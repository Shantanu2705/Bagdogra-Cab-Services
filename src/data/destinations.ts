export interface Destination {
  id: string;
  name: string;
  region: 'Sikkim' | 'Darjeeling';
  image: string;
  shortDescription: string;
  description?: string;
  highlights?: string[];
}

export const destinations: Destination[] = [
  {
    id: 'gangtok',
    name: 'Gangtok',
    region: 'Sikkim',
    image: '/images/dest_gangtok.png',
    shortDescription: 'The Vibrant Capital of Sikkim',
  },
  {
    id: 'pelling',
    name: 'Pelling',
    region: 'Sikkim',
    image: '/images/dest_pelling.png',
    shortDescription: 'Unmatched views of Kanchenjunga',
  },
  {
    id: 'lachung',
    name: 'Lachung',
    region: 'Sikkim',
    image: '/images/dest_hero.png',
    shortDescription: 'Picturesque mountain village',
  },
  {
    id: 'tsomgo-lake',
    name: 'Tsomgo Lake',
    region: 'Sikkim',
    image: '/images/pkg_sikkim.png',
    shortDescription: 'Glacial lake surrounded by mountains',
  },
  {
    id: 'darjeeling-town',
    name: 'Darjeeling',
    region: 'Darjeeling',
    image: '/images/dest_darjeeling.png',
    shortDescription: 'The Queen of the Hills',
  },
  {
    id: 'tiger-hill',
    name: 'Tiger Hill',
    region: 'Darjeeling',
    image: '/images/home_hero.png',
    shortDescription: 'Spectacular sunrise over Kanchenjunga',
  },
  {
    id: 'tea-gardens',
    name: 'Tea Gardens',
    region: 'Darjeeling',
    image: '/images/home_cinematic.png',
    shortDescription: 'Lush green tea estates rolling over the hills',
  },
  {
    id: 'batasia-loop',
    name: 'Batasia Loop',
    region: 'Darjeeling',
    image: '/images/about_fleet.png',
    shortDescription: 'Spiral railway created to lower the gradient of ascent',
  }
];
