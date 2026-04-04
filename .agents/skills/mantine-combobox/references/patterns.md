# Combobox Implementation Patterns

## Table of Contents
- [Basic select (button trigger)](#basic-select-button-trigger)
- [Searchable select (input trigger)](#searchable-select-input-trigger)
- [Multi-select with pills](#multi-select-with-pills)
- [Options with groups](#options-with-groups)
- [Custom option rendering](#custom-option-rendering)
- [Clear button](#clear-button)
- [Form integration (hidden input)](#form-integration-hidden-input)
- [Nothing found message](#nothing-found-message)

---

## Basic select (button trigger)

```tsx
function CustomSelect({ data }: { data: string[] }) {
  const [value, setValue] = useState<string | null>(null);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = data.map((item) => (
    <Combobox.Option value={item} key={item} active={item === value}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target targetType="button">
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```

---

## Searchable select (input trigger)

Input acts as both trigger and search field. Filter options based on the typed value.

```tsx
function SearchableSelect({ data }: { data: string[] }) {
  const [value, setValue] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.selectFirstOption(),
  });

  const shouldFilterOptions = data.every((item) => item !== search);
  const filtered = shouldFilterOptions
    ? data.filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
    : data;

  const options = filtered.length > 0
    ? filtered.map((item) => (
        <Combobox.Option value={item} key={item}>{item}</Combobox.Option>
      ))
    : <Combobox.Empty>Nothing found</Combobox.Empty>;

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        setSearch(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          rightSection={<Combobox.Chevron />}
          value={search}
          onChange={(e) => {
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
            setSearch(e.currentTarget.value);
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value || '');
          }}
          placeholder="Search value"
          rightSectionPointerEvents="none"
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```

---

## Multi-select with pills

Use `Combobox.DropdownTarget` for the outer container and `Combobox.EventsTarget` around the text input inside it.

```tsx
function MultiSelect({ data }: { data: string[] }) {
  const combobox = useCombobox({ onDropdownClose: () => combobox.resetSelectedOption() });
  const [search, setSearch] = useState('');
  const [value, setValue] = useState<string[]>([]);

  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
    );

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const options = data
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          {value.includes(item) ? <CheckIcon size={12} /> : null}
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  const pills = value.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
      <Combobox.DropdownTarget>
        <PillsInput onClick={() => combobox.openDropdown()}>
          <Pill.Group>
            {pills}
            <Combobox.EventsTarget>
              <PillsInput.Field
                onFocus={() => combobox.openDropdown()}
                onBlur={() => combobox.closeDropdown()}
                value={search}
                placeholder="Search values"
                onChange={(e) => {
                  combobox.updateSelectedOptionIndex();
                  setSearch(e.currentTarget.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Backspace' && search.length === 0) {
                    e.preventDefault();
                    handleValueRemove(value[value.length - 1]);
                  }
                }}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```

---

## Options with groups

```tsx
const groups = data.map((group) => (
  <Combobox.Group label={group.group} key={group.group}>
    {group.items.map((item) => (
      <Combobox.Option value={item.value} key={item.value}>
        {item.label}
      </Combobox.Option>
    ))}
  </Combobox.Group>
));

// Inside Combobox.Dropdown:
<Combobox.Options>{groups}</Combobox.Options>
```

---

## Custom option rendering

Render any content inside `Combobox.Option`:

```tsx
const options = data.map((item) => (
  <Combobox.Option value={item.value} key={item.value}>
    <Group>
      <Avatar src={item.avatar} size="sm" />
      <div>
        <Text size="sm">{item.label}</Text>
        <Text size="xs" c="dimmed">{item.email}</Text>
      </div>
    </Group>
  </Combobox.Option>
));
```

---

## Clear button

```tsx
const rightSection = value ? (
  <Combobox.ClearButton onClear={() => { setValue(null); setSearch(''); }} />
) : (
  <Combobox.Chevron />
);

<InputBase
  rightSection={rightSection}
  rightSectionPointerEvents={value ? 'all' : 'none'}
/>
```

---

## Form integration (hidden input)

```tsx
// Single value
<Combobox.HiddenInput value={value} name="framework" />

// Multiple values (joined by comma by default)
<Combobox.HiddenInput value={selectedValues} name="frameworks" valuesDivider="," />
```

---

## Nothing found message

```tsx
<Combobox.Dropdown>
  <Combobox.Options>
    {filteredOptions.length > 0
      ? filteredOptions
      : <Combobox.Empty>Nothing found for "{search}"</Combobox.Empty>}
  </Combobox.Options>
</Combobox.Dropdown>
```
