export type Edition = {
  number: string
  vehicle: string
  ownerInstagram: string
  featuredDate: string
  location: string
  year: string
  power: string
  modifications: string[]
  gallery: string[]
  story: string
}

export const editions: Edition[] = [
  {
    number: '0001',
    vehicle: 'forged',
    ownerInstagram: '@forged.limited',
    featuredDate: 'January 2026',
    location: 'Adelaide, Australia',
    year: '5000',
    power: '210 hp — 2.7L flat-six',
    modifications: [
      'Ducktail spoiler rebuilt from original tooling',
      'Numbers-matching engine rebuild',
      'Fuchs wheels refinished to factory spec',
      'Concours-grade repaint in Grand Prix White',
    ],
    gallery: ['/editions/0001.png', '/editions/0001-a.png', '/editions/0001-b.png'],
    story:
      'A numbers-matching restoration carried out over four years. Every fastener returned to factory specification, the Ducktail rebuilt from original tooling. This is edition zero-zero-zero-one — where the archive begins.',
  },
  {
    number: '0002',
    vehicle: 'Suzuki Swift Sport Turbo ZC33S',
    ownerInstagram: '@bby_turbo',
    featuredDate: 'August 2026',
    location: 'Castle Plaza',
    year: '2018',
    power: '138hp 1.4L K14C booster jet turbocharged inline-four ',
    modifications: [
      'Greedy spoiler, CTC intercooler pipes ',
      'CTC air intake pipes ',
      'Colt speed front air intake pipe',
      'Aftermarket drop in air filter',
      'Turbo smart plump back BOV',
      'Eyelids ',
      'Avid AV-06 gloss bronze polished lip 17x8 rims ',
      'Blitz tower top strut brace',
      'Aftermarket foot well lights (change colour) ',
      'OEM carbon fibre look body kit',
    ],
    gallery: ['/editions/0002.png', '/editions/0002-a.png', '/editions/0002-b.png'],
    story:
      'The Suzuki Swift Sport Turbo ZC33S is uniquely special because it pairs a punchy turbocharged engine with a sub-1,000 kg kerb weight, delivering an agile, old-school "go-kart" driving experience that is virtually unmatched in modern cars.',
  },
  {
    number: '0003',
    vehicle: 'BMW E30 M3 Sport Evolution',
    ownerInstagram: '@evo.works',
    featuredDate: 'March 2026',
    location: 'Munich, Germany',
    year: '1990',
    power: '238 hp — S14 2.5L inline-four',
    modifications: [
      'Sympathetic mechanical recommissioning',
      'Original box flares and front splitter',
      'Period-correct BBS wheels',
      'Dogleg five-speed rebuilt',
    ],
    gallery: ['/editions/0003.png', '/editions/0003-a.png', '/editions/0003-b.png'],
    story:
      'One of 600 built. Discovered in a private collection and returned to the road with a sympathetic recommissioning. The boxflares, the splitter, the intent — all untouched.',
  },
  {
    number: '0004',
    vehicle: 'Lancia Delta HF Integrale Evoluzione',
    ownerInstagram: '@gruppo.a',
    featuredDate: 'April 2026',
    location: 'Turin, Italy',
    year: '1992',
    power: '210 hp — 2.0L turbo inline-four',
    modifications: [
      'Rosso Monza respray',
      'Recaro seats retrimmed',
      'Momo steering wheel refresh',
      'Full corner-balanced suspension setup',
    ],
    gallery: ['/editions/0004.png', '/editions/0004-a.png', '/editions/0004-b.png'],
    story:
      'A homologation icon in Rosso Monza. Rally lineage worn openly, driven with the sound turned up. Photographed at dawn on the roads it was built to conquer.',
  },
  {
    number: '0005',
    vehicle: 'Honda NSX Type R',
    ownerInstagram: '@na1.registry',
    featuredDate: 'May 2026',
    location: 'Tokyo, Japan',
    year: '1992',
    power: '276 hp — 3.0L VTEC V6',
    modifications: [
      'Factory weight-reduction package intact',
      'Championship White respray',
      'Red Recaro interior preserved',
      'Titanium shift knob original to car',
    ],
    gallery: ['/editions/0005.png', '/editions/0005-a.png', '/editions/0005-b.png'],
    story:
      'Championship White, stripped and focused. The purest expression of the first-generation car — a machine defined by what was removed rather than what was added.',
  },
  {
    number: '0006',
    vehicle: 'Mercedes-Benz 190E 2.5-16 Evolution II',
    ownerInstagram: '@cosworth.co',
    featuredDate: 'June 2026',
    location: 'Cologne, Germany',
    year: '1990',
    power: '235 hp — Cosworth 2.5L 16v',
    modifications: [
      'Blauschwarz metallic preserved',
      'Original aero package including rear wing',
      'Complete books, tools and records',
      'Evolution II 17-inch wheels',
    ],
    gallery: ['/editions/0006.png', '/editions/0006-a.png', '/editions/0006-b.png'],
    story:
      'Blauschwarz metallic, the wing that changed touring car design. A time-capsule example with original books, tools and the quiet confidence of a car that has nothing left to prove.',
  },
]

export function getEdition(number: string): Edition | undefined {
  return editions.find((e) => e.number === number.padStart(4, '0'))
}
