import { Spotlight, SpotlightActionData } from '@mantine/spotlight';
import {
  PiHouseDuotone,
  PiSquaresFourDuotone,
  PiFileDuotone,
  PiMagnifyingGlassBold as SearchIcon,
} from 'react-icons/pi';

const actions: SpotlightActionData[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'Get to home page',
    onClick: () => console.log('Home'),
    leftSection: <PiHouseDuotone size="1.5rem" />,
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Get full information about current system status',
    onClick: () => console.log('Dashboard'),
    leftSection: <PiSquaresFourDuotone size="1.5rem" />,
  },
  {
    id: 'documentation',
    label: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onClick: () => console.log('Documentation'),
    leftSection: <PiFileDuotone size="1.5rem" />,
  },
];

export function SearchMenu() {
  return (
    <Spotlight
      actions={actions}
      nothingFound="Nothing found..."
      highlightQuery
      searchProps={{
        leftSection: <SearchIcon />,
        placeholder: 'Search feature',
      }}
    />
  );
}
