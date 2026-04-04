# @mantine/form API Reference

## Table of Contents
- [useForm options](#useform-options)
- [useForm return value](#useform-return-value)
- [useField](#usefield-hook)
- [createFormContext](#createformcontext)
- [createFormActions](#createformactions)
- [Built-in validators](#built-in-validators)
- [Validation rule format](#validation-rule-format)
- [Key types](#key-types)

---

## useForm options

```ts
useForm<Values, TransformedValues>({
  mode?,
  initialValues?,
  initialErrors?,
  initialTouched?,
  initialDirty?,
  validate?,
  validateInputOnChange?,
  validateInputOnBlur?,
  clearInputErrorOnChange?,
  transformValues?,
  onValuesChange?,
  enhanceGetInputProps?,
  onSubmitPreventDefault?,
  touchTrigger?,
  validateDebounce?,
  resolveValidationError?,
  name?,
})
```

| Option | Type | Default | Description |
|---|---|---|---|
| `mode` | `'controlled' \| 'uncontrolled'` | `'controlled'` | Controlled: React state, re-renders on change. Uncontrolled: refs, no re-renders. |
| `initialValues` | `Values` | — | Starting values for all fields |
| `initialErrors` | `FormErrors` | `{}` | Starting error messages |
| `initialTouched` | `FormStatus` | `{}` | Starting touched flags |
| `initialDirty` | `FormStatus` | `{}` | Starting dirty flags |
| `validate` | `FormRules \| (values) => FormErrors \| Promise<FormErrors>` | — | Validation rules or function |
| `validateInputOnChange` | `boolean \| string[]` | `false` | Validate on change (all or named fields) |
| `validateInputOnBlur` | `boolean \| string[]` | `false` | Validate on blur (all or named fields) |
| `clearInputErrorOnChange` | `boolean` | `true` | Clear field error when its value changes |
| `transformValues` | `(values: Values) => TransformedValues` | identity | Transform values before they reach `onSubmit` handler |
| `onValuesChange` | `(values, previous) => void` | — | Called whenever any value changes |
| `enhanceGetInputProps` | `(payload) => object \| void` | — | Merge extra props into every `getInputProps` call |
| `onSubmitPreventDefault` | `'always' \| 'never' \| 'validation-failed'` | `'always'` | When to call `event.preventDefault()` |
| `touchTrigger` | `'focus' \| 'change'` | `'change'` | When a field becomes touched |
| `validateDebounce` | `number` | `0` | Debounce validation calls (ms) |
| `resolveValidationError` | `(error: unknown) => ReactNode` | message extractor | Transform raw validation errors to display values |
| `name` | `string` | — | Form name for `createFormActions` event bus |

---

## useForm return value

### Values

| Member | Type | Description |
|---|---|---|
| `values` | `Values` | Current form values (reactive in controlled mode) |
| `errors` | `FormErrors` | Current errors keyed by field path |
| `submitting` | `boolean` | True while async `onSubmit` handler is pending |
| `initialized` | `boolean` | True after `initialize()` has been called |

### Getting & setting values

| Method | Signature | Description |
|---|---|---|
| `getValues` | `() => Values` | Get current values snapshot |
| `getInitialValues` | `() => Values` | Get initial values snapshot |
| `setValues` | `(values: Partial<Values>) => void` | Merge partial values into form state |
| `setFieldValue` | `(path, value \| updater) => void` | Set a single field by dot-path |
| `setInitialValues` | `(values: Values) => void` | Update the initial values reference |
| `initialize` | `(values: Values) => void` | Reset form to given values and mark as initialized |
| `reset` | `() => void` | Reset to `initialValues`, clear errors/touched/dirty |
| `resetField` | `(path) => void` | Reset a single field to its initial value |

### Errors

| Method | Signature | Description |
|---|---|---|
| `setErrors` | `(errors: FormErrors) => void` | Replace all errors |
| `setFieldError` | `(path, error: ReactNode) => void` | Set one field's error |
| `clearFieldError` | `(path) => void` | Clear one field's error |
| `clearErrors` | `() => void` | Clear all errors |

### Dirty & touched

| Method | Signature | Description |
|---|---|---|
| `isDirty` | `(path?) => boolean` | True if field (or any field) differs from initial value |
| `isTouched` | `(path?) => boolean` | True if field (or any field) has been interacted with |
| `getDirty` | `() => FormStatus` | All dirty flags |
| `getTouched` | `() => FormStatus` | All touched flags |
| `setDirty` | `(status: FormStatus) => void` | Overwrite dirty flags |
| `setTouched` | `(status: FormStatus) => void` | Overwrite touched flags |
| `resetDirty` | `(values?) => void` | Reset dirty tracking (optionally to new baseline) |
| `resetTouched` | `() => void` | Reset all touched flags |

### Array fields

| Method | Signature | Description |
|---|---|---|
| `insertListItem` | `(path, item, index?) => void` | Insert item at index (appends if omitted) |
| `removeListItem` | `(path, index) => void` | Remove item at index |
| `reorderListItem` | `(path, { from, to }) => void` | Move item from one index to another |
| `replaceListItem` | `(path, index, item) => void` | Replace item at index |

### Validation

| Method | Signature | Description |
|---|---|---|
| `validate` | `() => FormValidationResult \| Promise<...>` | Validate all fields, returns result |
| `validateField` | `(path) => FormFieldValidationResult \| Promise<...>` | Validate one field |
| `isValid` | `(path?) => boolean \| Promise<boolean>` | True if form/field has no errors |
| `isValidating` | `(path?) => boolean` | True if async validation is pending |
| `setSubmitting` | `(value: boolean) => void` | Manually control `submitting` flag |

### Submission

| Method | Signature | Description |
|---|---|---|
| `onSubmit` | `(handler, onError?) => FormEventHandler` | Returns event handler; calls `handler(values)` only when valid |
| `onReset` | `FormEventHandler` | Pass to `<form onReset>` to reset on native reset |
| `getTransformedValues` | `(values?) => TransformedValues` | Apply `transformValues` to given or current values |

### Input binding

| Method | Signature | Description |
|---|---|---|
| `getInputProps` | `(path, options?) => object` | Returns `{ value, onChange, error, onFocus, onBlur }` to spread on an input |
| `getInputNode` | `(path) => HTMLElement \| null` | Get the DOM node for a field (uncontrolled mode) |
| `key` | `(path) => string` | React `key` for uncontrolled inputs that need forced re-renders |

**`getInputProps` options:**
```ts
{
  type?: 'input' | 'checkbox'  // 'checkbox' uses checked/defaultChecked instead of value
  withError?: boolean           // default true — include error prop
  withFocus?: boolean           // default true — include onFocus/onBlur for touched tracking
}
```

### Watch

| Method | Signature | Description |
|---|---|---|
| `watch` | `(path, subscriber) => void` | Subscribe to a field's changes |

Subscriber receives `{ value, previousValue, touched, dirty }`.

---

## useField hook

Standalone single-field hook — no full form needed.

```ts
const field = useField({
  initialValue,
  validate?,
  validateOnChange?,    // boolean, default false
  validateOnBlur?,      // boolean, default false
  clearErrorOnChange?,  // boolean, default true
  initialError?,
  initialTouched?,      // boolean, default false
  onValueChange?,
  type?,                // 'input' | 'checkbox', default 'input'
  mode?,                // 'controlled' | 'uncontrolled', default 'controlled'
  resolveValidationError?,
})
```

**Return value:**
```ts
{
  getInputProps(options?) // spread on input
  getValue()             // current value
  setValue(value)        // set value
  reset()               // reset to initial state
  validate()            // returns Promise<ReactNode | void>
  isValidating          // boolean
  error                 // ReactNode
  setError(error)
  isTouched()           // boolean
  isDirty()             // boolean
  resetTouched()
  key                   // number — for uncontrolled re-render forcing
}
```

---

## createFormContext

Shares a `useForm` instance across multiple components via React context.

```ts
const [FormProvider, useFormContext, useForm] = createFormContext<Values>();
```

Returns a tuple:
- **`FormProvider`** — `<FormProvider form={form}>` wraps the subtree
- **`useFormContext`** — access the form anywhere inside the provider (throws if used outside)
- **`useForm`** — same as the package-level `useForm` but typed to `Values`

---

## createFormActions

Event-bus API for controlling a named form from outside its React tree.

```ts
const actions = createFormActions<Values>('my-form-name');
```

The form must be created with the same `name`:
```ts
const form = useForm({ name: 'my-form-name', initialValues: {...} });
```

**Available actions** (all dispatch custom DOM events):
`setFieldValue`, `setValues`, `setInitialValues`, `setErrors`, `setFieldError`,
`clearFieldError`, `clearErrors`, `reset`, `validate`, `validateField`,
`insertListItem`, `removeListItem`, `reorderListItem`, `setDirty`, `setTouched`,
`resetDirty`, `resetTouched`

---

## Built-in validators

All validators return a rule function `(value, values) => ReactNode | null`.

| Validator | Signature | Validates |
|---|---|---|
| `isNotEmpty(error?)` | — | Not null, undefined, false, empty string, or empty array |
| `isEmail(error?)` | — | Valid email format |
| `isUrl(error?)` | `isUrl({ protocols?, allowLocalhost? }, error?)` | Valid URL (default: http/https, no localhost) |
| `matches(regexp, error?)` | — | String matches regex |
| `hasLength(payload, error?)` | `payload: number \| { min?, max? }` | String/array length (exact or range) |
| `isInRange({ min?, max? }, error?)` | — | Number within range |
| `matchesField(fieldName, error?)` | — | Value equals another field's value |
| `isNotEmptyHTML(error?)` | — | HTML string is not empty after stripping tags |
| `isJSONString(error?)` | — | String is valid JSON |
| `isOneOf(values[], error?)` | — | Value is one of allowed values |

All `error` arguments are optional `ReactNode` — omit to use a default message.

---

## Validation rule format

```ts
// Rules object — keys match form field names, nested objects follow the values shape
validate: {
  name: isNotEmpty(),
  address: {
    street: isNotEmpty(),
    zip: matches(/^\d{5}$/, 'Invalid ZIP'),
  },
  // Validate the array itself (not its items) with formRootRule:
  tags: {
    [formRootRule]: (tags) => tags.length > 0 ? null : 'At least one tag required',
    0: isNotEmpty(), // validates items too
  }
}

// Function — receives full values, returns errors object
validate: (values) => ({
  endDate: values.endDate <= values.startDate ? 'Must be after start date' : null,
})

// Async — return a Promise from any rule
validate: {
  username: async (value, values, path, signal) => {
    const taken = await checkUsername(value, { signal });
    if (signal?.aborted) return null;
    return taken ? 'Username is taken' : null;
  }
}
```

Validators receive `(value, allValues, fieldPath, abortSignal?)`. The `abortSignal` is provided for async rules — check `signal.aborted` before applying stale results.

---

## Key types

```ts
type FormErrors = Record<string, ReactNode>
type FormStatus = Record<string, boolean>

interface FormValidationResult {
  hasErrors: boolean
  errors: FormErrors
}

interface FormFieldValidationResult {
  hasError: boolean
  error: ReactNode
}

// Path utilities (for typed field paths)
type LooseKeys<T>       // union of all dot-paths into T
type FormPathValue<T, Path>  // value type at a given path
```
