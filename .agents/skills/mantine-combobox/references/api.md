# Combobox API Reference

## Table of Contents
- [useCombobox hook](#usecombobox-hook)
- [Combobox (root)](#combobox-root)
- [Sub-components](#sub-components)
- [CSS variables & Styles API](#css-variables--styles-api)

---

## useCombobox hook

```tsx
const combobox = useCombobox(options?: UseComboboxOptions);
```

**Options:**
```ts
interface UseComboboxOptions {
  defaultOpened?: boolean;
  opened?: boolean;
  onOpenedChange?: (opened: boolean) => void;
  onDropdownClose?: (eventSource: 'keyboard' | 'mouse' | 'unknown') => void;
  onDropdownOpen?: (eventSource: 'keyboard' | 'mouse' | 'unknown') => void;
  loop?: boolean;           // Default: true — keyboard nav wraps at boundaries
  scrollBehavior?: ScrollBehavior; // Default: 'instant'
}
```

**Returned store:**
```ts
interface ComboboxStore {
  // Dropdown state
  dropdownOpened: boolean;
  openDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;
  closeDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;
  toggleDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;

  // Option keyboard navigation
  selectActiveOption(): string | null;
  selectFirstOption(): string | null;
  selectNextOption(): string | null;
  selectPreviousOption(): string | null;
  resetSelectedOption(): void;
  clickSelectedOption(): void;
  updateSelectedOptionIndex(
    target?: 'active' | 'selected' | number,
    options?: { scrollIntoView?: boolean }
  ): void;

  // Programmatic focus
  focusSearchInput(): void;
  focusTarget(): void;
}
```

---

## Combobox (root)

```tsx
<Combobox
  store={combobox}              // required — ComboboxStore from useCombobox()
  onOptionSubmit={fn}           // (value: string, optionProps) => void
  size="sm"                     // MantineSize | string, default: 'sm'
  dropdownPadding={4}           // number, default: 4
  resetSelectionOnOptionHover   // boolean
  readOnly                      // boolean — disables all interactions
  // + all Popover props (position, offset, width, withinPortal, etc.)
/>
```

---

## Sub-components

### Combobox.Target
```tsx
<Combobox.Target
  targetType="input"          // 'button' | 'input', default: 'input'
  withKeyboardNavigation      // boolean, default: true
  withAriaAttributes          // boolean, default: true
  withExpandedAttribute       // boolean, default: false
  autoComplete="off"          // string
>
  {/* single child — the trigger element */}
</Combobox.Target>
```

Use `targetType="button"` when the trigger is a button (Space key toggles dropdown).

### Combobox.DropdownTarget
Marks the element used for dropdown positioning when separate from the keyboard events target. Used together with `Combobox.EventsTarget` in multi-select/pills patterns.

### Combobox.EventsTarget
Receives keyboard events for dropdown navigation. Used alongside `Combobox.DropdownTarget` when the typing input is nested inside the trigger (e.g. inside `PillsInput`).

### Combobox.Dropdown
```tsx
<Combobox.Dropdown hidden={false}>
  {/* dropdown content */}
</Combobox.Dropdown>
```

Use `hidden` to hide without unmounting (preserves scroll position).

### Combobox.Options
```tsx
<Combobox.Options labelledBy="some-label-id">
  {/* Combobox.Option or Combobox.Group elements */}
</Combobox.Options>
```

### Combobox.Option
```tsx
<Combobox.Option
  value="react"       // string | number, required
  active={false}      // visually marks as selected; used by selectActiveOption()
  disabled={false}
>
  React
</Combobox.Option>
```

### Combobox.Search
Built-in search input, wired to keyboard navigation. Renders sticky at top of dropdown.

```tsx
<Combobox.Search
  value={search}
  onChange={(e) => setSearch(e.currentTarget.value)}
  placeholder="Search..."
  withAriaAttributes      // boolean, default: true
  withKeyboardNavigation  // boolean, default: true
  // + all Input props
/>
```

### Combobox.Empty
```tsx
<Combobox.Empty>Nothing found</Combobox.Empty>
```

### Combobox.Group
```tsx
<Combobox.Group label="Frontend">
  <Combobox.Option value="react">React</Combobox.Option>
</Combobox.Group>
```

### Combobox.Header / Combobox.Footer
```tsx
<Combobox.Header>Custom header</Combobox.Header>
<Combobox.Footer>Custom footer</Combobox.Footer>
```

### Combobox.Chevron
```tsx
<Combobox.Chevron size="sm" error={error} color="blue" />
```

### Combobox.ClearButton
```tsx
<Combobox.ClearButton onClear={() => setValue(null)} />
```

### Combobox.HiddenInput
```tsx
<Combobox.HiddenInput
  value={value}           // string | number | (string | number)[] | null
  valuesDivider=","       // string, default: ','
  name="myField"
  form="myForm"
/>
```

---

## CSS variables & Styles API

### CSS variables (set on root element)
| Variable | Description |
|---|---|
| `--combobox-option-fz` | Option font size (driven by `size` prop) |
| `--combobox-option-padding` | Option padding (driven by `size` prop) |
| `--combobox-padding` | Dropdown padding (driven by `dropdownPadding`, default 4px) |

### Styles API selectors
| Selector | Element |
|---|---|
| `dropdown` | Dropdown container |
| `options` | Options listbox |
| `option` | Individual option |
| `search` | Search input |
| `empty` | Nothing found message |
| `header` | Dropdown header |
| `footer` | Dropdown footer |
| `group` | Group container |
| `groupLabel` | Group label text |
