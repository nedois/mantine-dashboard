import { ElementType } from 'react';
import {
  PiChartLineUpDuotone,
  PiChatCenteredDotsDuotone,
  PiKanbanDuotone,
  PiLockKeyDuotone,
  PiShieldCheckDuotone,
  PiSquaresFourDuotone,
  PiStarDuotone,
  PiTableDuotone,
  PiUserPlusDuotone,
  PiUsersDuotone,
} from 'react-icons/pi';
import { paths } from '@/routes/paths';

interface MenuItem {
  header: string;
  section: {
    name: string;
    href: string;
    icon: ElementType;
    dropdownItems?: {
      name: string;
      href: string;
      badge?: string;
    }[];
  }[];
}

export const menu: MenuItem[] = [
  {
    header: 'Overview',
    section: [
      {
        name: 'Welcome',
        href: paths.dashboard.home,
        icon: PiStarDuotone,
      },
    ],
  },

  {
    header: 'Apps',
    section: [
      {
        name: 'Kanban',
        href: paths.dashboard.apps.kanban,
        icon: PiKanbanDuotone,
      },
    ],
  },

  {
    header: 'Management',
    section: [
      {
        name: 'Customers',
        icon: PiUsersDuotone,
        href: paths.dashboard.management.customers.root,
        dropdownItems: [
          {
            name: 'List',
            href: paths.dashboard.management.customers.list,
          },
        ],
      },
    ],
  },

  {
    header: 'Widgets',
    section: [
      {
        name: 'Charts',
        href: paths.dashboard.widgets.charts,
        icon: PiChartLineUpDuotone,
      },
      {
        name: 'Metrics',
        href: paths.dashboard.widgets.metrics,
        icon: PiSquaresFourDuotone,
      },
      {
        name: 'Tables',
        href: paths.dashboard.widgets.tables,
        icon: PiTableDuotone,
      },
    ],
  },

  {
    header: 'Authentication',
    section: [
      {
        name: 'Register',
        href: paths.auth.register,
        icon: PiUserPlusDuotone,
      },
      {
        name: 'Login',
        href: paths.auth.login,
        icon: PiShieldCheckDuotone,
      },
      {
        name: 'Forgot Password',
        href: paths.auth.forgotPassword,
        icon: PiLockKeyDuotone,
      },
      {
        name: 'OTP',
        href: paths.auth.otp,
        icon: PiChatCenteredDotsDuotone,
      },
    ],
  },
];
