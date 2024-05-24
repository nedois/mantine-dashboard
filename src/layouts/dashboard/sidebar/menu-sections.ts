import { ElementType } from 'react';
import {
  PiSquaresFourDuotone,
  PiChartLineUpDuotone,
  PiStarDuotone,
  PiShieldCheckDuotone,
  PiUserPlusDuotone,
  PiLockKeyDuotone,
  PiChatCenteredDotsDuotone,
} from 'react-icons/pi';

import { routes } from '@/routes/paths';

interface MenuItem {
  header: string;
  section: {
    name: string;
    href?: string;
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
