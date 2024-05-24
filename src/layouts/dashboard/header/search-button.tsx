import { spotlight } from '@mantine/spotlight';
import { PiCommand as CommandIcon, PiMagnifyingGlassBold as SearchIcon } from 'react-icons/pi';
import {
  Button,
  TextInput,
  UnstyledButton,
  UnstyledButtonProps,
  ElementProps,
} from '@mantine/core';

import { SearchMenu } from './search-menu';
import classes from './search-button.module.css';

type SearchButtonProps = Omit<UnstyledButtonProps, 'children'> &
  ElementProps<'div', keyof UnstyledButtonProps>;

export function SearchButton(props: SearchButtonProps) {
  return (
    <>
      <UnstyledButton component="div" className={classes.input} onClick={spotlight.open} {...props}>
        <TextInput
          placeholder="Search feature"
          leftSection={<SearchIcon />}
          rightSection={
            <Button component="span" size="compact-xs" leftSection={<CommandIcon size="1rem" />}>
              K
            </Button>
          }
        />
      </UnstyledButton>

      <Button
        c="inherit"
        variant="transparent"
        className={classes.button}
        onClick={spotlight.open}
        leftSection={<SearchIcon size="1.2rem" />}
        rightSection={
          <Button
            component="span"
            variant="filled"
            size="compact-md"
            leftSection={<CommandIcon size="1rem" />}
          >
            K
          </Button>
        }
      />

      <SearchMenu />
    </>
  );
}
