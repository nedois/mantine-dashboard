import { ElementType } from 'react';
import { PiSquaresFourDuotone, PiChartLineUpDuotone, PiStarDuotone } from 'react-icons/pi';

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
        href: '/',
        icon: PiStarDuotone,
      },
    ],
  },

  {
    header: 'Widgets',
    section: [
      {
        name: 'Charts',
        href: routes.widgets.charts,
        icon: PiChartLineUpDuotone,
      },
      {
        name: 'Metrics',
        href: routes.widgets.metrics,
        icon: PiSquaresFourDuotone,
      },
    ],
  },
];
