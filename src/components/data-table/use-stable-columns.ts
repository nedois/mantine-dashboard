import type { DataTableColumn } from "mantine-datatable";
import { useRef } from "react";

export function useStableColumns<T>(columns: DataTableColumn<T>[]): DataTableColumn<T>[] {
  const ref = useRef(columns);

  if (!areColumnsStructurallyEqual(ref.current, columns)) {
    ref.current = columns;
  } else {
    ref.current = mergeLatestFunctions(ref.current, columns);
  }

  return ref.current;
}

/**
 * Return columns with stable non-function values but fresh function
 * references so closures over changing state (e.g. page, perPage) work.
 * Creates shallow copies only for columns whose functions actually changed.
 */
function mergeLatestFunctions<T>(prev: DataTableColumn<T>[], next: DataTableColumn<T>[]): DataTableColumn<T>[] {
  let changed = false;
  const result: DataTableColumn<T>[] = Array.from({ length: prev.length });

  for (let i = 0; i < prev.length; i++) {
    const p = prev[i] as Record<string, unknown>;
    const n = next[i] as Record<string, unknown>;
    let colChanged = false;

    for (const key of Object.keys(n)) {
      if (typeof n[key] === "function" && p[key] !== n[key]) {
        colChanged = true;
        break;
      }
    }

    if (colChanged) {
      changed = true;
      result[i] = { ...p, ...pickFunctions(n) } as DataTableColumn<T>;
    } else {
      result[i] = prev[i];
    }
  }

  return changed ? result : prev;
}

function pickFunctions(obj: Record<string, unknown>): Record<string, unknown> {
  const fns: Record<string, unknown> = {};
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "function") {
      fns[key] = obj[key];
    }
  }
  return fns;
}

function areColumnsStructurallyEqual<T>(prev: DataTableColumn<T>[], next: DataTableColumn<T>[]): boolean {
  if (prev.length !== next.length) {
    return false;
  }

  for (let i = 0; i < prev.length; i++) {
    if (!isShallowEqualNonFunctions(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function isShallowEqualNonFunctions(a: Record<string, unknown>, b: Record<string, unknown>): boolean {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    const valA = a[key];
    const valB = b[key];

    if (typeof valA === "function" && typeof valB === "function") {
      continue;
    }

    if (valA !== valB) {
      return false;
    }
  }

  return true;
}
