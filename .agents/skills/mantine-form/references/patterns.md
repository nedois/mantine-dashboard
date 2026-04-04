# @mantine/form Patterns

## Table of Contents
- [Basic form with validation](#basic-form-with-validation)
- [Nested object fields](#nested-object-fields)
- [Array / list fields](#array--list-fields)
- [Async validation](#async-validation)
- [Form context across components](#form-context-across-components)
- [transformValues](#transformvalues)
- [Uncontrolled mode](#uncontrolled-mode)
- [Standalone useField](#standalone-usefield)
- [Server errors after submission](#server-errors-after-submission)

---

## Basic form with validation

```tsx
import { useForm, isEmail, isNotEmpty, hasLength } from '@mantine/form';

function BasicForm() {
  const form = useForm({
    initialValues: { name: '', email: '', password: '' },
    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
      password: hasLength({ min: 8 }, 'Password must be at least 8 characters'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput label="Name" {...form.getInputProps('name')} />
      <TextInput label="Email" {...form.getInputProps('email')} />
      <PasswordInput label="Password" {...form.getInputProps('password')} />
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

---

## Nested object fields

Use dot notation to address nested fields.

```tsx
const form = useForm({
  initialValues: {
    user: {
      name: '',
      address: {
        city: '',
        zip: '',
      },
    },
  },
  validate: {
    user: {
      name: isNotEmpty('Required'),
      address: {
        city: isNotEmpty('City is required'),
        zip: matches(/^\d{5}$/, 'Must be 5 digits'),
      },
    },
  },
});

// Access nested fields with dot notation
<TextInput {...form.getInputProps('user.name')} />
<TextInput {...form.getInputProps('user.address.city')} />
<TextInput {...form.getInputProps('user.address.zip')} />
```

---

## Array / list fields

```tsx
interface Employee {
  name: string;
  role: string;
}

const form = useForm({
  initialValues: {
    employees: [{ name: '', role: '' }] as Employee[],
  },
  validate: {
    employees: {
      name: isNotEmpty('Name required'),
      role: isNotEmpty('Role required'),
    },
  },
});

// Render the list
const fields = form.values.employees.map((_, index) => (
  <Group key={form.key(`employees.${index}`)}>
    <TextInput
      {...form.getInputProps(`employees.${index}.name`)}
      placeholder="Name"
    />
    <TextInput
      {...form.getInputProps(`employees.${index}.role`)}
      placeholder="Role"
    />
    <ActionIcon onClick={() => form.removeListItem('employees', index)}>
      <IconTrash />
    </ActionIcon>
  </Group>
));

return (
  <form onSubmit={form.onSubmit((values) => console.log(values))}>
    {fields}
    <Button onClick={() => form.insertListItem('employees', { name: '', role: '' })}>
      Add employee
    </Button>
    <Button type="submit">Submit</Button>
  </form>
);
```

**List methods:**
```tsx
form.insertListItem('employees', { name: '', role: '' });       // append
form.insertListItem('employees', { name: '', role: '' }, 0);    // prepend
form.removeListItem('employees', index);
form.reorderListItem('employees', { from: 2, to: 0 });
form.replaceListItem('employees', index, { name: 'New', role: 'Dev' });
```

---

## Async validation

Return a `Promise` from any validator. Use the provided `AbortSignal` to avoid stale results.

```tsx
const form = useForm({
  initialValues: { username: '' },
  validate: {
    username: async (value, _values, _path, signal) => {
      if (!value) return 'Username is required';
      const response = await fetch(`/api/check-username?q=${value}`, { signal });
      if (signal?.aborted) return null;
      const { taken } = await response.json();
      return taken ? 'Username is already taken' : null;
    },
  },
  validateInputOnChange: ['username'],
  validateDebounce: 500,   // debounce async calls
});
```

Check `form.isValidating()` to show a loading indicator while async validation runs.

---

## Form context across components

Share one form instance across a component tree without prop drilling.

```tsx
// 1. Create typed context once
import { createFormContext, isNotEmpty } from '@mantine/form';

interface ProfileValues {
  bio: string;
  website: string;
}

const [FormProvider, useFormContext, useProfileForm] = createFormContext<ProfileValues>();

// 2. Wrap your form tree with FormProvider
function ProfileForm() {
  const form = useProfileForm({
    initialValues: { bio: '', website: '' },
    validate: {
      bio: isNotEmpty('Bio is required'),
    },
  });

  return (
    <FormProvider form={form}>
      <form onSubmit={form.onSubmit((values) => save(values))}>
        <BioField />
        <WebsiteField />
        <Button type="submit">Save</Button>
      </form>
    </FormProvider>
  );
}

// 3. Access form in any child — no prop drilling
function BioField() {
  const form = useFormContext();
  return <Textarea label="Bio" {...form.getInputProps('bio')} />;
}

function WebsiteField() {
  const form = useFormContext();
  return <TextInput label="Website" {...form.getInputProps('website')} />;
}
```

---

## transformValues

Shape the values before they reach `onSubmit`. The transform is applied transparently — `onSubmit` receives `TransformedValues`, not `Values`.

```tsx
const form = useForm({
  initialValues: {
    price: '',        // stored as string in input
    tags: 'a, b, c', // stored as comma-separated string
  },
  transformValues: (values) => ({
    price: Number(values.price),
    tags: values.tags.split(',').map((t) => t.trim()),
  }),
});

// handler receives { price: number, tags: string[] }
form.onSubmit((values) => console.log(values));
```

---

## Uncontrolled mode

Use when performance matters (large forms, frequent updates). The form does not cause React re-renders on input changes.

```tsx
const form = useForm({
  mode: 'uncontrolled',
  initialValues: { name: '', email: '' },
  validate: { email: isEmail() },
});

// Same API — getInputProps works identically
<TextInput {...form.getInputProps('name')} label="Name" />
<TextInput {...form.getInputProps('email')} label="Email" />

// To read current values imperatively:
const current = form.getValues();

// To force a controlled re-render of a specific input (e.g. after reset):
<TextInput key={form.key('name')} {...form.getInputProps('name')} />
```

`form.values` and `form.errors` are not reactive in uncontrolled mode — use `form.getValues()` and `form.errors` only inside event handlers, or subscribe via `watch`.

---

## Standalone useField

Manage a single field without a full form — useful for isolated inputs or custom field components.

```tsx
import { useField, isEmail } from '@mantine/form';

function EmailField() {
  const field = useField({
    initialValue: '',
    validate: isEmail('Invalid email'),
    validateOnBlur: true,
  });

  return (
    <TextInput
      label="Email"
      {...field.getInputProps()}
      onBlur={() => field.validate()}
    />
  );
}
```

---

## Server errors after submission

Set server-side errors on fields after a failed API call.

```tsx
const form = useForm({ initialValues: { email: '', password: '' } });

const handleSubmit = async (values: typeof form.values) => {
  try {
    await login(values);
  } catch (error) {
    if (error.fields) {
      // Map server field errors onto form
      form.setErrors(error.fields);
    } else {
      form.setFieldError('password', 'Invalid email or password');
    }
  }
};

<form onSubmit={form.onSubmit(handleSubmit)}>
  <TextInput {...form.getInputProps('email')} label="Email" />
  <PasswordInput {...form.getInputProps('password')} label="Password" />
  <Button type="submit" loading={form.submitting}>Sign in</Button>
</form>
```
