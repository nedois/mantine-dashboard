import {
  Combobox,
  type ComboboxOptionsProps,
  type ComboboxProps,
  Input,
  InputBase,
  type InputBaseProps,
  Loader,
  useCombobox,
} from "@mantine/core";
import { useUncontrolled } from "@mantine/hooks";
import { useState } from "react";

export interface SearchableComboboxProps<T>
  extends
    Omit<InputBaseProps, "component" | "onClick" | "pointer" | "rightSection" | "rightSectionPointerEvents" | "type">,
    Pick<ComboboxProps, "onOptionSubmit">,
    Pick<ComboboxOptionsProps, "onScroll"> {
  defaultValue?: string;
  emptyMessage?: string;
  getLabel: T extends string ? never : (option: T) => string;
  getValue: T extends string ? never : (option: T) => string;
  isLoading?: boolean;
  onChange?: (value: string) => void;
  onSearch?: (term: string) => void;
  options: T[];
  placeholder?: string;
  searchPlaceholder?: string;
  value?: string;
}

export function SearchableCombobox<T>({
  defaultValue,
  emptyMessage,
  getLabel,
  getValue,
  isLoading,
  onChange,
  onOptionSubmit,
  onScroll,
  onSearch,
  options,
  placeholder,
  searchPlaceholder,
  value,
  ...props
}: SearchableComboboxProps<T>) {
  const [search, setSearch] = useState("");

  const isStringOptions = typeof options.at(0) === "string";

  const [selectedValue, setSelectedValue] = useUncontrolled({
    defaultValue,
    finalValue: "",
    onChange,
    value,
  });

  const selectedOption = selectedValue
    ? options.find((o) => getOptionValue(o, getValue, isStringOptions) === selectedValue)
    : undefined;

  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      combobox.focusTarget();
      setSearch("");
    },
    onDropdownOpen: () => {
      combobox.focusSearchInput();
    },
  });

  const handleSearch = (term: string): void => {
    setSearch(term);
    onSearch?.(term);
  };

  const handleOptionSubmit = (
    val: string,
    optionProps: Parameters<NonNullable<ComboboxProps["onOptionSubmit"]>>[1]
  ): void => {
    combobox.closeDropdown();
    setSelectedValue(val);
    onOptionSubmit?.(val, optionProps);
  };

  const displayValue = selectedOption ? getOptionLabel(selectedOption, getLabel, isStringOptions) : null;

  return (
    <Combobox onOptionSubmit={handleOptionSubmit} store={combobox}>
      <Combobox.Target>
        <InputBase
          component="button"
          onClick={() => combobox.toggleDropdown()}
          pointer
          rightSection={isLoading ? <Loader size={18} /> : <Combobox.Chevron />}
          rightSectionPointerEvents="none"
          type="button"
          {...props}
          // oxlint-disable-next-line typescript/no-misused-spread
          style={{ overflow: "hidden", ...props.style }}
        >
          {displayValue ?? <Input.Placeholder>{placeholder}</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Search
          onChange={(e) => handleSearch(e.currentTarget.value)}
          placeholder={searchPlaceholder}
          value={search}
        />

        <Combobox.Options mah={240} onScroll={onScroll} style={{ overflowY: "auto" }}>
          {options.length > 0 ? (
            options.map((option) => {
              const label = getOptionLabel(option, getLabel, isStringOptions);
              const value = getOptionValue(option, getValue, isStringOptions);

              return (
                <Combobox.Option key={value} value={value}>
                  {label}
                </Combobox.Option>
              );
            })
          ) : (
            <Combobox.Empty>{isLoading ? "Carregando" : emptyMessage}</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}

function getOptionLabel<T>(option: T, getLabel: (o: T) => string, isString: boolean): string {
  return isString ? (option as string) : getLabel(option);
}

function getOptionValue<T>(option: T, getValue: (o: T) => string, isString: boolean): string {
  return isString ? (option as string) : getValue(option);
}
