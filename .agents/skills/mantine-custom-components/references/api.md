# Custom Components API Reference

## Table of Contents
- [Imports cheatsheet](#imports-cheatsheet)
- [factory / polymorphicFactory / genericFactory](#factory--polymorphicfactory--genericfactory)
- [Factory type fields](#factory-type-fields)
- [useProps](#usepropss)
- [useStyles](#usestyles)
- [createVarsResolver](#createvarsresolver)
- [StylesApiProps and CompoundStylesApiProps](#stylesapiprops-and-compoundstylesapiprops)
- [BoxProps and ElementProps](#boxprops-and-elementprops)
- [createSafeContext](#createsafecontext)
- [Theme helper functions](#theme-helper-functions)
- [Static properties](#static-properties)

---

## Imports cheatsheet

```ts
import {
  // Factory functions
  factory,
  polymorphicFactory,
  genericFactory,

  // Types
  Factory,
  PolymorphicFactory,
  StylesApiProps,
  CompoundStylesApiProps,
  BoxProps,
  ElementProps,

  // Hooks
  useProps,
  useStyles,

  // Vars
  createVarsResolver,

  // Context
  createSafeContext,

  // Base component
  Box,

  // Theme helpers
  getSize,
  getSpacing,
  getRadius,
  getFontSize,
  getLineHeight,
  getShadow,
  rem,
  em,
} from '@mantine/core';
```

---

## factory / polymorphicFactory / genericFactory

### factory()

Standard factory for non-polymorphic components.

```ts
factory<Payload extends FactoryPayload>(
  ui: (props: Payload['props'] & { ref?: React.Ref<Payload['ref']> }) => React.ReactNode
): MantineComponent<Payload>
```

The returned component has static properties: `.extend()`, `.withProps()`, `.classes`, `.displayName`, `.varsResolver` (if vars are used), and any sub-components assigned.

### polymorphicFactory()

For components that accept a `component` prop to render as a different element. Same signature as `factory()`, but uses `PolymorphicFactory` type.

```ts
// Type uses PolymorphicFactory<{}> instead of Factory<{}>
export type MyFactory = PolymorphicFactory<{
  props: MyProps;
  defaultRef: HTMLButtonElement;    // default ref type
  defaultComponent: 'button';       // default element
  stylesNames: ...;
  vars: ...;
}>;

export const My = polymorphicFactory<MyFactory>((_props) => { ... });
```

### genericFactory()

For components whose prop types depend on a generic argument.

```ts
// Factory uses 'signature' field
export type MyFactory = Factory<{
  props: MyProps<boolean>;
  signature: <T extends boolean = false>(props: MyProps<T>) => React.JSX.Element;
  ref: HTMLDivElement;
  // ... other fields
}>;

export const My = genericFactory<MyFactory>((_props) => { ... });
```

---

## Factory type fields

All fields except `props` are optional.

```ts
Factory<{
  props: MyComponentProps;

  // Forwarded ref element type
  ref: HTMLDivElement;

  // Union of Styles API selector strings (must match CSS module class names)
  stylesNames: 'root' | 'label' | 'icon';

  // CSS variables definition: { selectorName: '--var-name' | '--other-var' }
  vars: {
    root: '--my-height' | '--my-color';
    label: '--my-label-fz';
  };

  // Accepted values for the variant prop
  variant: 'filled' | 'outline' | 'subtle';

  // Sub-components for compound pattern
  staticComponents: {
    Item: typeof MyItem;
    Label: typeof MyLabel;
  };

  // Set to true for sub-components — disables theme classNames/styles/vars for this component
  compound: true;

  // Context type passed as 3rd argument to styles/vars resolvers
  ctx: { opened: boolean };

  // Generic signature (genericFactory only)
  signature: <T extends boolean = false>(props: MyProps<T>) => React.JSX.Element;
}>
```

---

## useProps

Merges default props from three sources in priority order (highest → lowest):
1. Props passed by the user
2. Default props from `MantineProvider` theme (`components.MyComponent.defaultProps`)
3. Component-level `defaultProps`

```ts
useProps<T extends Record<string, any>>(
  componentName: string,    // must match the name used in theme.components
  defaultProps: Partial<T>, // use 'satisfies Partial<T>' for correct inference
  props: T
): T
```

**Important:** Always call `useProps` before destructuring. Always use `satisfies Partial<Props>` (not `: Partial<Props>`) for `defaultProps` to preserve narrowed types.

```ts
const defaultProps = { size: 'md', variant: 'filled' } satisfies Partial<MyProps>;

const props = useProps('MyComponent', defaultProps, _props);
const { className, style, classNames, styles, unstyled, vars, attributes, ...others } = props;
```

---

## useStyles

Returns a `getStyles` function that provides `className` and `style` for each Styles API selector.

```ts
useStyles<Payload extends FactoryPayload>(input: {
  name: string | string[];       // component name(s) for static CSS class generation
  classes: Record<string, string>; // CSS module classes object
  props: Payload['props'];
  stylesCtx?: Payload['ctx'];    // optional context for styles/vars resolvers
  className?: string;            // spread to rootSelector
  style?: MantineStyleProp;      // spread to rootSelector
  rootSelector?: string;         // which selector gets className/style (default: 'root')
  unstyled?: boolean;
  classNames?: ClassNames<Payload>;
  styles?: Styles<Payload>;
  vars?: PartialVarsResolver<Payload>;
  varsResolver?: VarsResolver<Payload>;
  attributes?: Attributes<Payload>;
}): GetStylesApi<Payload>
```

**`getStyles` function:**
```ts
getStyles(
  selector: StylesNames,
  options?: {
    className?: string;   // additional className merged in
    style?: CSSProperties; // additional style merged in
    focusable?: boolean;
    active?: boolean;
    withStaticClass?: boolean;
  }
): { className: string; style: CSSProperties }
```

Usage:
```tsx
<Box {...getStyles('root')} {...others} />
<div {...getStyles('label', { className: cx(extraClass), style: { color: 'red' } })} />
```

---

## createVarsResolver

Defines how component props map to CSS variables.

```ts
createVarsResolver<Payload extends FactoryPayload>(
  resolver: (
    theme: MantineTheme,
    props: Payload['props'],
    ctx: Payload['ctx']    // only if Factory has ctx field
  ) => TransformVars<Payload['vars']>
): VarsResolver<Payload>
```

The resolver must return an object matching the `vars` structure defined in `Factory`:

```ts
// Factory vars: { root: '--my-height' | '--my-color' }
const varsResolver = createVarsResolver<MyFactory>((_theme, { size, color }) => ({
  root: {
    '--my-height': getSize(size, 'my-height'),
    '--my-color': color ?? undefined,   // undefined = CSS var not set (uses CSS fallback)
  },
}));
```

Assign to the component after creation:
```ts
MyComponent.varsResolver = varsResolver;
```

---

## StylesApiProps and CompoundStylesApiProps

**`StylesApiProps`** — extend on the root/main component's props interface:
```ts
interface StylesApiProps<Payload extends FactoryPayload> {
  unstyled?: boolean;
  variant?: Payload['variant'] | (string & {});
  classNames?: ClassNames<Payload>;    // { root: 'my-class', inner: 'other' } or callback
  styles?: Styles<Payload>;            // { root: { color: 'red' } } or callback
  vars?: PartialVarsResolver<Payload>; // (theme, props) => { root: { '--my-var': '...' } }
  attributes?: Attributes<Payload>;    // { root: { 'data-custom': value } }
}
```

**`CompoundStylesApiProps`** — extend on sub-component (compound) props instead. Subset of `StylesApiProps` — no `unstyled` or `attributes`.

```ts
interface CompoundStylesApiProps<Payload extends FactoryPayload>
  extends Omit<StylesApiProps<Payload>, 'unstyled' | 'attributes'> {}
```

Compound sub-components also use `Factory<{ ..., compound: true }>` and access styles via the parent context's `getStyles`.

---

## BoxProps and ElementProps

**`BoxProps`** — extends `MantineStyleProps`, adds:
```ts
interface BoxProps extends MantineStyleProps {
  className?: string;
  style?: MantineStyleProp;           // accepts function: (theme) => CSSProperties
  mod?: string | Record<string, any> | (string | Record<string, any>)[]; // data-* attributes
  hiddenFrom?: MantineBreakpoint;     // hidden at this breakpoint and above
  visibleFrom?: MantineBreakpoint;    // visible only at this breakpoint and above
  lightHidden?: boolean;              // hidden in light color scheme
  darkHidden?: boolean;               // hidden in dark color scheme
}
```

**`MantineStyleProps`** — shorthand style props (all accept responsive `{ base, sm, md, lg, xl }` objects):

| Prop | CSS property | Prop | CSS property |
|---|---|---|---|
| `m` `mt` `mb` `ml` `mr` `mx` `my` `ms` `me` | margin variants | `p` `pt` `pb` `pl` `pr` `px` `py` `ps` `pe` | padding variants |
| `w` `miw` `maw` | width | `h` `mih` `mah` | height |
| `c` | color | `bg` | background |
| `fz` | font-size | `fw` | font-weight |
| `ff` | font-family | `fs` | font-style |
| `lh` | line-height | `lts` | letter-spacing |
| `ta` | text-align | `tt` | text-transform |
| `td` | text-decoration | `bd` | border |
| `bdrs` | border-radius | `opacity` | opacity |
| `pos` | position | `top` `left` `bottom` `right` `inset` | positioning |
| `display` | display | `flex` | flex |

**`ElementProps`** — gets HTML element props, remapping `style` to Mantine's type:
```ts
// Include all div props except style (remapped) and any conflicting props
interface MyProps extends ElementProps<'div'> {}

// Omit conflicting HTML attrs (e.g. input has native 'size' and 'color')
interface MyProps extends ElementProps<'input', 'size' | 'color'> {
  size?: MantineSize;
  color?: MantineColor;
}

// Can also accept a React component type instead of element string
interface MyProps extends ElementProps<typeof OtherComponent> {}
```

---

## createSafeContext

Used inside compound components to share state from the parent to sub-components.

```ts
createSafeContext<ContextValue>(
  errorMessage: string   // thrown when hook is used outside the provider
): [
  Context: React.Context<ContextValue | null>,
  useContext: () => ContextValue     // throws errorMessage if used outside provider
]
```

**Usage pattern (in ComponentName.context.ts):**
```ts
import { createSafeContext, GetStylesApi } from '@mantine/core';
import { MyFactory } from './MyComponent';

interface MyContextValue {
  getStyles: GetStylesApi<MyFactory>;
  // other shared state...
}

export const [MyProvider, useMyContext] = createSafeContext<MyContextValue>(
  'MyComponent was not found in tree'
);
```

In the root component:
```tsx
return (
  <MyProvider value={{ getStyles }}>
    <Box {...getStyles('root')} {...others}>{children}</Box>
  </MyProvider>
);
```

In sub-components:
```tsx
const { getStyles } = useMyContext();
return <div {...getStyles('item')} />;
```

---

## Theme helper functions

Use these in `createVarsResolver` to convert Mantine size tokens to CSS values:

| Function | Input | Output example |
|---|---|---|
| `getSize(size, prefix)` | `'sm'`, `'button-height'` | `'var(--mantine-button-height-sm)'` |
| `getSpacing(size)` | `'md'` or `16` | `'var(--mantine-spacing-md)'` or `'1rem'` |
| `getRadius(size)` | `'sm'` or `4` | `'var(--mantine-radius-sm)'` or `'0.25rem'` |
| `getFontSize(size)` | `'sm'` | `'var(--mantine-font-size-sm)'` |
| `getLineHeight(size)` | `'sm'` | `'var(--mantine-line-height-sm)'` |
| `getShadow(size)` | `'md'` | `'var(--mantine-shadow-md)'` |
| `rem(value)` | `16` | `'1rem'` |
| `em(value)` | `16` | `'1em'` |

Return `undefined` from a var resolver entry to leave that CSS variable unset (CSS fallback applies).

---

## Static properties

These must be set on every component after creation:

```ts
MyComponent.displayName = '@mantine/core/MyComponent'; // or '@mantine/package/Name'
MyComponent.classes = classes;                          // CSS module classes object
MyComponent.varsResolver = varsResolver;               // only if component defines vars

// Sub-components (compound pattern)
MyComponent.Item = MyItem;
MyComponent.Label = MyLabel;
```

`.extend()` and `.withProps()` are added automatically by `factory()`.
