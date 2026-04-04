import { Breadcrumbs as MantineBreadcrumbs, type BreadcrumbsProps as MantineBreadcrumbsProps } from "@mantine/core";

import { type BreadcrumbItemProps, BreadcrumbsItem } from "./breadcrumbs-item";
import { BreadcrumbsMenu } from "./breadcrumbs-menu";

export interface BreadcrumbsProps extends Omit<MantineBreadcrumbsProps, "children"> {
  items: Array<BreadcrumbItemProps>;
  maxItems?: number;
}

export function Breadcrumbs({ items, maxItems, ...props }: BreadcrumbsProps) {
  const { end: endItems, middle: middleItems, start: startItems } = splitBreadcrumbs(items, maxItems);

  return (
    <MantineBreadcrumbs {...props}>
      {startItems.map((item) => (
        <BreadcrumbsItem key={item.label} label={item.label} to={item.to} />
      ))}
      {middleItems.length > 0 && <BreadcrumbsMenu items={middleItems} />}
      {endItems.map((item) => (
        <BreadcrumbsItem key={item.label} label={item.label} to={item.to} />
      ))}
    </MantineBreadcrumbs>
  );
}

/**
 * Split items into start / middle (collapsed) / end slices.
 *
 * Behavior:
 * - If maxItems is not provided or items.length <= maxItems => start = items, middle = [], end = []
 * - Otherwise we reserve 1 visible slot for the overflow control (the collapsed "middle").
 *   That means startCount + endCount = maxItems - 1.
 * - startCount is ceil((maxItems - 1) / 2), endCount is floor((maxItems - 1) / 2).
 */
function splitBreadcrumbs<T>(items: Array<T>, maxItems?: number) {
  const n = items.length;

  if (!maxItems || n <= maxItems) {
    return {
      end: [],
      middle: [],
      start: items,
    };
  }

  const visibleWithoutOverflow = Math.max(0, maxItems - 1);
  const startCount = Math.ceil(visibleWithoutOverflow / 2);
  const endCount = Math.floor(visibleWithoutOverflow / 2);

  const start = items.slice(0, startCount);
  const end = endCount > 0 ? items.slice(n - endCount) : [];
  const middle = items.slice(startCount, n - endCount);

  return { end, middle, start };
}
