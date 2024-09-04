import { IconType } from 'react-icons';
import {
  PiBookLight,
  PiGithubLogoLight,
  PiRocketLaunchLight,
  PiTerminalLight,
} from 'react-icons/pi';

export const icons = {
  rocket: PiRocketLaunchLight,
  terminal: PiTerminalLight,
  github: PiGithubLogoLight,
  default: PiBookLight,
} as Record<string, IconType>;
