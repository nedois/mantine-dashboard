# Custom Component Patterns

## Table of Contents
- [Minimal component (no styles API)](#minimal-component-no-styles-api)
- [Component with CSS variables](#component-with-css-variables)
- [Compound component with context](#compound-component-with-context)
- [Polymorphic component](#polymorphic-component)
- [Generic component](#generic-component)
- [Theme integration](#theme-integration)
- [Namespace exports](#namespace-exports)

---

## Minimal component (no styles API)

When you don't need theming/Styles API support — just Box + useProps.

```tsx
import { Box, BoxProps, ElementProps, factory, Factory, useProps } from '@mantine/core';

export interface MinimalProps extends BoxProps, ElementProps<'div'> {
  label?: string;
}

export type MinimalFactory = Factory<{
  props: MinimalProps;
  ref: HTMLDivElement;
}>;

const defaultProps = {} satisfies Partial<MinimalProps>;

export const Minimal = factory<MinimalFactory>((_props) => {
  const props = useProps('Minimal', defaultProps, _props);
  const { label, children, ...others } = props;

  return (
    <Box {...others}>
      {label && <span>{label}</span>}
      {children}
    </Box>
  );
});

Minimal.displayName = '@mantine/core/Minimal';
```

---

## Component with CSS variables

Full example with Styles API, CSS variables, and theme integration.

**MyComponent.module.css:**
```css
.root {
  border-radius: var(--my-radius);
  padding: var(--my-padding);
}

.inner {
  font-size: var(--my-fz);
}
```

**MyComponent.tsx:**
```tsx
import {
  Box, BoxProps, createVarsResolver, ElementProps, factory, Factory,
  getFontSize, getRadius, getSpacing, MantineFontSize, MantineRadius,
  MantineSpacing, StylesApiProps, useProps, useStyles,
} from '@mantine/core';
import classes from './MyComponent.module.css';

export type MyComponentStylesNames = 'root' | 'inner';
export type MyComponentVariant = 'filled' | 'outline';
export type MyComponentCssVariables = {
  root: '--my-radius' | '--my-padding';
  inner: '--my-fz';
};

export interface MyComponentProps
  extends BoxProps, StylesApiProps<MyComponentFactory>, ElementProps<'div'> {
  radius?: MantineRadius;
  padding?: MantineSpacing;
  size?: MantineFontSize;
  variant?: MyComponentVariant;
}

export type MyComponentFactory = Factory<{
  props: MyComponentProps;
  ref: HTMLDivElement;
  stylesNames: MyComponentStylesNames;
  vars: MyComponentCssVariables;
  variant: MyComponentVariant;
}>;

const defaultProps = {
  radius: 'sm',
  padding: 'md',
  size: 'md',
} satisfies Partial<MyComponentProps>;

const varsResolver = createVarsResolver<MyComponentFactory>((_theme, { radius, padding, size }) => ({
  root: {
    '--my-radius': getRadius(radius),
    '--my-padding': getSpacing(padding),
  },
  inner: {
    '--my-fz': getFontSize(size),
  },
}));

export const MyComponent = factory<MyComponentFactory>((_props) => {
  const props = useProps('MyComponent', defaultProps, _props);
  const {
    classNames, className, style, styles, unstyled, vars, attributes,
    radius, padding, size,
    children,
    ...others
  } = props;

  const getStyles = useStyles<MyComponentFactory>({
    name: 'MyComponent',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    attributes,
    varsResolver,
  });

  return (
    <Box {...getStyles('root')} {...others}>
      <div {...getStyles('inner')}>{children}</div>
    </Box>
  );
});

MyComponent.displayName = '@mantine/core/MyComponent';
MyComponent.classes = classes;
MyComponent.varsResolver = varsResolver;
```

---

## Compound component with context

Pattern for components with typed sub-components (e.g. `Card.Section`, `Tabs.Tab`).

**MyCard.context.ts:**
```ts
import { createSafeContext, GetStylesApi } from '@mantine/core';
import type { MyCardFactory } from './MyCard';

interface MyCardContextValue {
  getStyles: GetStylesApi<MyCardFactory>;
  orientation: 'horizontal' | 'vertical';
}

export const [MyCardProvider, useMyCardContext] = createSafeContext<MyCardContextValue>(
  'MyCard component was not found in tree'
);
```

**MyCardSection.tsx** (sub-component):
```tsx
import {
  Box, BoxProps, CompoundStylesApiProps, ElementProps,
  factory, Factory, useProps, useStyles,
} from '@mantine/core';
import { useMyCardContext } from './MyCard.context';
import classes from './MyCard.module.css';

export type MyCardSectionStylesNames = 'section';

export interface MyCardSectionProps
  extends BoxProps, CompoundStylesApiProps<MyCardSectionFactory>, ElementProps<'div'> {
  withBorder?: boolean;
}

export type MyCardSectionFactory = Factory<{
  props: MyCardSectionProps;
  ref: HTMLDivElement;
  stylesNames: MyCardSectionStylesNames;
  compound: true;   // marks as a compound sub-component
}>;

const defaultProps = {} satisfies Partial<MyCardSectionProps>;

export const MyCardSection = factory<MyCardSectionFactory>((_props) => {
  const props = useProps('MyCardSection', defaultProps, _props);
  const { className, style, classNames, styles, withBorder, children, ...others } = props;

  // Access styles from parent context
  const { getStyles } = useMyCardContext();

  return (
    <Box
      {...getStyles('section', { className, style, classNames, styles })}
      data-with-border={withBorder || undefined}
      {...others}
    >
      {children}
    </Box>
  );
});

MyCardSection.displayName = '@mantine/core/MyCardSection';
```

**MyCard.tsx** (root component):
```tsx
import { MyCardProvider } from './MyCard.context';

// ... (same Styles API setup as above)

export type MyCardFactory = Factory<{
  props: MyCardProps;
  ref: HTMLDivElement;
  stylesNames: 'root' | 'section';    // include sub-component selectors too
  staticComponents: {
    Section: typeof MyCardSection;
  };
}>;

export const MyCard = factory<MyCardFactory>((_props) => {
  const props = useProps('MyCard', defaultProps, _props);
  const {
    classNames, className, style, styles, unstyled, vars, attributes,
    orientation, children, ...others
  } = props;

  const getStyles = useStyles<MyCardFactory>({ ... });

  return (
    <MyCardProvider value={{ getStyles, orientation: orientation ?? 'vertical' }}>
      <Box {...getStyles('root')} {...others}>{children}</Box>
    </MyCardProvider>
  );
});

MyCard.displayName = '@mantine/core/MyCard';
MyCard.classes = classes;
MyCard.Section = MyCardSection;   // attach sub-component
```

---

## Polymorphic component

Supports `component` prop to render as any element or React component.

```tsx
import {
  Box, BoxProps, polymorphicFactory, PolymorphicFactory,
  StylesApiProps, useProps, useStyles,
} from '@mantine/core';

export type MyLinkStylesNames = 'root';

export interface MyLinkProps extends BoxProps, StylesApiProps<MyLinkFactory> {
  active?: boolean;
}

export type MyLinkFactory = PolymorphicFactory<{
  props: MyLinkProps;
  defaultRef: HTMLAnchorElement;
  defaultComponent: 'a';            // renders as <a> unless component prop is provided
  stylesNames: MyLinkStylesNames;
}>;

const defaultProps = {} satisfies Partial<MyLinkProps>;

export const MyLink = polymorphicFactory<MyLinkFactory>((_props) => {
  const props = useProps('MyLink', defaultProps, _props);
  const {
    classNames, className, style, styles, unstyled, vars, attributes,
    active, ...others
  } = props;

  const getStyles = useStyles<MyLinkFactory>({
    name: 'MyLink', classes, props, className, style,
    classNames, styles, unstyled, vars, attributes,
  });

  return (
    <Box
      component="a"          // default element
      data-active={active || undefined}
      {...getStyles('root')}
      {...others}
    />
  );
});

MyLink.displayName = '@mantine/core/MyLink';
MyLink.classes = classes;
```

**Usage:**
```tsx
<MyLink href="/about">Link</MyLink>
<MyLink component="button" onClick={fn}>As button</MyLink>
<MyLink component={RouterLink} to="/about">Router link</MyLink>
```

---

## Generic component

For components where prop types depend on a generic parameter.

```tsx
import { factory, Factory, genericFactory, useProps } from '@mantine/core';

type SelectValue<M extends boolean> = M extends true ? string[] : string | null;

export interface MySelectProps<M extends boolean = false>
  extends BoxProps, StylesApiProps<MySelectFactory> {
  multiple?: M;
  value?: SelectValue<M>;
  defaultValue?: SelectValue<M>;
  onChange?: (value: SelectValue<M>) => void;
}

export type MySelectFactory = Factory<{
  props: MySelectProps;
  ref: HTMLDivElement;
  signature: <M extends boolean = false>(props: MySelectProps<M>) => React.JSX.Element;
  stylesNames: 'root';
}>;

const defaultProps = { multiple: false } satisfies Partial<MySelectProps>;

export const MySelect = genericFactory<MySelectFactory>((_props) => {
  const props = useProps('MySelect', defaultProps as any, _props);
  const { multiple, value, onChange, ...others } = props;
  // ...
});

MySelect.displayName = '@mantine/core/MySelect';
```

**Usage:**
```tsx
// TypeScript infers value as string | null
<MySelect value={val} onChange={(v) => setVal(v)} />

// TypeScript infers value as string[]
<MySelect multiple value={vals} onChange={(v) => setVals(v)} />
```

---

## Theme integration

Components built with `factory()` automatically get `.extend()` and `.withProps()`.

**`.extend()`** — for theme-level configuration in `createTheme`:
```tsx
const theme = createTheme({
  components: {
    MyComponent: MyComponent.extend({
      // Override default props
      defaultProps: {
        radius: 'xl',
        size: 'lg',
      },
      // Add classes to selectors
      classNames: {
        root: 'my-root-class',
        inner: 'my-inner-class',
      },
      // Add inline styles to selectors
      styles: {
        root: { border: '1px solid red' },
      },
      // Or use a callback for theme-aware styles
      styles: (theme) => ({
        root: { background: theme.colors.blue[0] },
      }),
      // Override CSS variables
      vars: (_theme, props) => ({
        root: { '--my-radius': props.radius ? getRadius(props.radius) : undefined },
      }),
    }),
  },
});
```

**`.withProps()`** — create a pre-configured variant at the call site:
```tsx
const BigMyComponent = MyComponent.withProps({ size: 'xl', radius: 'lg' });

// Same as MyComponent but with size and radius pre-set
<BigMyComponent>Content</BigMyComponent>
```

---

## Namespace exports

Add at the bottom of the component file or `index.ts` to let consumers access types without extra imports.

```tsx
export namespace MyComponent {
  export type Props = MyComponentProps;
  export type StylesNames = MyComponentStylesNames;
  export type CssVariables = MyComponentCssVariables;
  export type Factory = MyComponentFactory;
  export type Variant = MyComponentVariant;

  export namespace Section {
    export type Props = MyComponentSectionProps;
    export type StylesNames = MyComponentSectionStylesNames;
    export type Factory = MyComponentSectionFactory;
  }
}
```

**Usage:**
```ts
import { MyComponent } from './MyComponent';

// No need to import MyComponentProps separately
const props: MyComponent.Props = { radius: 'md' };
```
