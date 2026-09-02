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
    vehicle: 'Subaru Impreza Hawkeye',
    ownerInstagram: '@letty_thathyperdrive_girl',
    featuredDate: 'August 2026',
    location: 'Castle Plaza',
    year: '2004',
    power: '210-255hp EJ20 (2.0L Turbocharged Flat-Four) 5 Speed Manual AWD',
    modifications: [
      'Generally stock',
      'About to start with interior modifications',
      ' 3 > 3½ inch exhaust with highflow cat',
    ],
    gallery: ['/editions/0001.png', '/editions/0001-a.png', '/editions/0001-b.png', '/editions/0001-c.png', '/editions/0001-d.png'],
    story:
      'This genuine Hawkeye Subaru Impreza pairs its legendary 5-speed manual transmission with a freshly rebuilt 2.0L EJ20 boxer engine, delivering a pure and reliable 210 hp through its iconic Symmetrical AWD system.    Shot by NMS Media',
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
      'Greedy spoiler',
      'CTC intercooler pipes ',
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
    vehicle: 'Lexus IS200/Altezza AS200',
    ownerInstagram: '@gex_da_lex',
    featuredDate: 'August 2026',
    location: 'Castle Plaza',
    year: '2000',
    power: '200hp 2.0L 1G-FE Beams 2000 Inline 6 with Eaton M62 supercharger',
    modifications: [
      'J160 Six Speed swap',
      'Eaton M62 Supercharger with Front Mount Intercooler',
      'All steel intercooler & intake piping',
      'K&N cone filter & heat shield',
      'Cable operated bypass valve',
      'Custom Catback exhaust by Everlast Mufflers',
      'Exedy Sports Tuff Clutch',
      'Exedy Single Mass Flywheel',
      'Tein Flex Z coilovers',
      'HI-C Roof Spoiler',
      'Black/Gold repainted Altezza headlights',
      'iiLumo flashing T10 parking lights',
      'Rockford Fosgate rear shelf speakers',
      'Kicker 10 inch slimline subwoofer with Rockford Fosgate amplifier',
      'SXE10 gauge cluster with red led backlight',
      'Limited edition Series 1 Ghost Ghost shifter from Likewise',
      'Repainted Altezza mesh grille',
      'Toyota OEM ETC toll reader',
      'Import Bible tilting licence plate brackets & Iwate prefecture seals',
    ],
    gallery: ['/editions/0004.png', '/editions/0004-a.png', '/editions/0004-b.png'],
    story:
      'Lexus IS200, known as the Toyota Altezza AS200 in Japan, is unique because it pairs a compact, rear-wheel-drive layout with a smooth 2.0-liter inline-six engine to deliver balanced handling in a small sedan.',
  },
  {
    number: '0007',
    vehicle: 'Porsche 981 Cayman GT4',
    ownerInstagram: '@mikey_cheung_photography',
    featuredDate: 'August 2026',
    location: 'Goodyear Autocare, Adelaide',
    year: '2015',
    power: '3.8L flat six, 6 speed manual. 385PS',
    modifications: [
      'Gloss White',
      'Porsche Carbon Bucket seats',
      'Half Cage',
      '5 point Sabelt harnesses ',
      'Suspension by Manthey Racing',
      'Manthey shocks and springs',
    ],
    gallery: ['/editions/0007.png', '/editions/0007-a.png', '/editions/0007-b.png'],
    story:
      'The 2015 Porsche 981 Cayman GT4 is a pure analog track weapon that uniquely pairs a GT3-derived front suspension with a screaming, naturally aspirated 3.8-liter flat-six engine and a six-speed manual transmission.',
  },
  
  {
    number: '0010',
    vehicle: 'Mercedes-Benz W124 260E',
    ownerInstagram: '@ayushdhxnda',
    featuredDate: 'August 2026',
    location: 'Goodyear Autocare, Adelaide',
    year: '1989',
    power: '160 hp — 2.6-litre M103.940 inline-six',
    modifications: [
      'Lorinser Wheels'
    ],
    gallery: ['/editions/0010.png', '/editions/0010-a.png', '/editions/0010-b.png'],
    story:
      'The 1989 Mercedes-Benz 260E (W124) elegantly bridges the gap between mechanical purity and modern comfort, hiding a velvety 2.6-litre inline-six engine behind its timeless, wind-cheating design.',
  },
]

export function getEdition(number: string): Edition | undefined {
  return editions.find((e) => e.number === number.padStart(4, '0'))
}
