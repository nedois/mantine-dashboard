import { http, HttpResponse } from 'msw';

import { app } from '@/config';
import { generateId } from '@/utilities/uid';
import { Company } from '../resources/companies';
import { paginate } from './helpers';

const companies: Company[] = [
  {
    id: generateId(),
    name: 'Walmart',
    address: '702 SW 8th St',
    city: 'Bentonville',
    state: 'AR',
    active: true,
  },
  {
    id: generateId(),
    name: 'Amazon',
    address: '410 Terry Ave N',
    city: 'Seattle',
    state: 'WA',
    active: false,
  },
  {
    id: generateId(),
    name: 'ExxonMobil',
    address: '5959 Las Colinas Blvd',
    city: 'Irving',
    state: 'TX',
    active: true,
  },
  {
    id: generateId(),
    name: 'Apple',
    address: 'One Apple Park Way',
    city: 'Cupertino',
    state: 'CA',
    active: true,
  },
  {
    id: generateId(),
    name: 'CVS Health',
    address: '1 CVS Dr',
    city: 'Woonsocket',
    state: 'RI',
    active: false,
  },
  {
    id: generateId(),
    name: 'Berkshire Hathaway',
    address: '3555 Farnam St',
    city: 'Omaha',
    state: 'NE',
    active: true,
  },
  {
    id: generateId(),
    name: 'UnitedHealth Group',
    address: '9900 Bren Rd E',
    city: 'Minnetonka',
    state: 'MN',
    active: true,
  },
  {
    id: generateId(),
    name: 'McKesson',
    address: '6555 State Hwy 161',
    city: 'Irving',
    state: 'TX',
    active: false,
  },
  {
    id: generateId(),
    name: 'AmerisourceBergen',
    address: '1 W 1st Ave',
    city: 'Conshohocken',
    state: 'PA',
    active: true,
  },
  {
    id: generateId(),
    name: 'Alphabet',
    address: '1600 Amphitheatre Parkway',
    city: 'Mountain View',
    state: 'CA',
    active: false,
  },
  {
    id: generateId(),
    name: 'Tesla',
    address: '3500 Deer Creek Road',
    city: 'Palo Alto',
    state: 'CA',
    active: true,
  },
  {
    id: generateId(),
    name: 'Microsoft',
    address: 'One Microsoft Way',
    city: 'Redmond',
    state: 'WA',
    active: true,
  },
  {
    id: generateId(),
    name: 'Johnson & Johnson',
    address: 'One Johnson & Johnson Plaza',
    city: 'New Brunswick',
    state: 'NJ',
    active: false,
  },
  {
    id: generateId(),
    name: 'JPMorgan Chase',
    address: '383 Madison Avenue',
    city: 'New York',
    state: 'NY',
    active: true,
  },
  {
    id: generateId(),
    name: 'Meta Platforms',
    address: '1601 Willow Road',
    city: 'Menlo Park',
    state: 'CA',
    active: false,
  },
  {
    id: generateId(),
    name: 'Procter & Gamble',
    address: '1 Procter & Gamble Plaza',
    city: 'Cincinnati',
    state: 'OH',
    active: true,
  },
  {
    id: generateId(),
    name: 'NVIDIA',
    address: '2788 San Tomas Expressway',
    city: 'Santa Clara',
    state: 'CA',
    active: true,
  },
  {
    id: generateId(),
    name: 'Pfizer',
    address: '235 East 42nd Street',
    city: 'New York',
    state: 'NY',
    active: false,
  },
  {
    id: generateId(),
    name: 'Walt Disney',
    address: '500 South Buena Vista Street',
    city: 'Burbank',
    state: 'CA',
    active: true,
  },
  {
    id: generateId(),
    name: 'Home Depot',
    address: '2455 Paces Ferry Rd',
    city: 'Atlanta',
    state: 'GA',
    active: true,
  },
  {
    id: generateId(),
    name: 'Bank of America',
    address: '100 North Tryon Street',
    city: 'Charlotte',
    state: 'NC',
    active: false,
  },
  {
    id: generateId(),
    name: 'Verizon',
    address: '1095 Avenue of the Americas',
    city: 'New York',
    state: 'NY',
    active: true,
  },
  {
    id: generateId(),
    name: 'PepsiCo',
    address: '700 Anderson Hill Road',
    city: 'Purchase',
    state: 'NY',
    active: true,
  },
  {
    id: generateId(),
    name: 'Intel',
    address: '2200 Mission College Blvd',
    city: 'Santa Clara',
    state: 'CA',
    active: false,
  },
  {
    id: generateId(),
    name: 'Cisco Systems',
    address: '170 West Tasman Dr',
    city: 'San Jose',
    state: 'CA',
    active: true,
  },
  {
    id: generateId(),
    name: 'Coca-Cola',
    address: '1 Coca-Cola Plaza',
    city: 'Atlanta',
    state: 'GA',
    active: true,
  },
  {
    id: generateId(),
    name: 'Abbott Laboratories',
    address: '100 Abbott Park Road',
    city: 'Abbott Park',
    state: 'IL',
    active: false,
  },
  {
    id: generateId(),
    name: 'Chevron',
    address: '6001 Bollinger Canyon Rd',
    city: 'San Ramon',
    state: 'CA',
    active: true,
  },
  {
    id: generateId(),
    name: 'Merck & Co.',
    address: '2000 Galloping Hill Road',
    city: 'Kenilworth',
    state: 'NJ',
    active: true,
  },
  {
    id: generateId(),
    name: 'Goldman Sachs',
    address: '200 West Street',
    city: 'New York',
    state: 'NY',
    active: false,
  },
];

export default [
  http.get(`${app.apiUrl}/companies`, ({ request }) =>
    HttpResponse.json(paginate(request.url, companies))
  ),
];