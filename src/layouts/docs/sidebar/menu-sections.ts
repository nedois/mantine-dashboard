import { ElementType } from 'react';
import { PiGithubLogoLight, PiRocketLaunchLight, PiTerminalLight } from 'react-icons/pi';
import { paths } from '@/routes/paths';

interface Section {
  title: string;
  items: {
    name: string;
    href: string;
    icon: ElementType;
  }[];
}

export const menuSections: Section[] = [
  {
    title: 'Getting Started',
    items: [
      { name: 'Quickstart', href: paths.docs.page('quickstart'), icon: PiRocketLaunchLight },
      { name: 'Developmnent', href: paths.docs.page('development'), icon: PiTerminalLight },
      { name: 'Settings', href: paths.docs.page('settings'), icon: PiTerminalLight },
      { name: 'Github', href: paths.docs.page('github'), icon: PiGithubLogoLight },
    ],
  },
  {
    title: 'Getting Started',
    items: [
      { name: 'Quickstart', href: paths.docs.page('quickstart'), icon: PiRocketLaunchLight },
      { name: 'Developmnent', href: paths.docs.page('development'), icon: PiTerminalLight },
      { name: 'Settings', href: paths.docs.page('settings'), icon: PiTerminalLight },
      { name: 'Github', href: paths.docs.page('github'), icon: PiGithubLogoLight },
    ],
  },
  {
    title: 'Getting Started',
    items: [
      { name: 'Quickstart', href: paths.docs.page('quickstart'), icon: PiRocketLaunchLight },
      { name: 'Developmnent', href: paths.docs.page('development'), icon: PiTerminalLight },
      { name: 'Settings', href: paths.docs.page('settings'), icon: PiTerminalLight },
      { name: 'Github', href: paths.docs.page('github'), icon: PiGithubLogoLight },
    ],
  },
  {
    title: 'Getting Started',
    items: [
      { name: 'Quickstart', href: paths.docs.page('quickstart'), icon: PiRocketLaunchLight },
      { name: 'Developmnent', href: paths.docs.page('development'), icon: PiTerminalLight },
      { name: 'Settings', href: paths.docs.page('settings'), icon: PiTerminalLight },
      { name: 'Github', href: paths.docs.page('github'), icon: PiGithubLogoLight },
    ],
  },
];
