import { ElementType } from 'react';
import {
  PiSquaresFourDuotone,
  PiChartLineUpDuotone,
  PiStarDuotone,
  PiShieldCheckDuotone,
  PiUserPlusDuotone,
  PiLockKeyDuotone,
  PiChatCenteredDotsDuotone,
  PiTableDuotone,
  PiKanbanDuotone,
  PiUsersDuotone,
} from 'react-icons/pi';

import { routes } from '@/routes/paths';

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
        href: routes.dashboard.home,
        icon: PiStarDuotone,
      },
    ],
  },

  {
    header: 'Apps',
    section: [
      {
        name: 'Kanban',
        href: routes.dashboard.apps.kanban,
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
        href: routes.dashboard.management.customers.root,
        dropdownItems: [
          {
            name: 'List',
            href: routes.dashboard.management.customers.list,
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
        href: routes.dashboard.widgets.charts,
        icon: PiChartLineUpDuotone,
      },
      {
        name: 'Metrics',
        href: routes.dashboard.widgets.metrics,
        icon: PiSquaresFourDuotone,
      },
      {
        name: 'Tables',
        href: routes.dashboard.widgets.tables,
        icon: PiTableDuotone,
      },
    ],
  },

  {
    header: 'Authentication',
    section: [
      {
        name: 'Register',
        href: routes.auth.register,
        icon: PiUserPlusDuotone,
      },
      {
        name: 'Login',
        href: routes.auth.login,
        icon: PiShieldCheckDuotone,
      },
      {
        name: 'Forgot Password',
        href: routes.auth.forgotPassword,
        icon: PiLockKeyDuotone,
      },
      {
        name: 'OTP',
        href: routes.auth.otp,
        icon: PiChatCenteredDotsDuotone,
      },
    ],
  },
];
