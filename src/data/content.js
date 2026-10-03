export const brand = 'Aegisfront'

export const nav = [
  { label: 'Products', href: '#technology' },
  { label: 'About us', href: '#perimeter' },
  { label: 'Newsroom', href: '#' },
  { label: 'Contacts', href: '#' },
]

export const hero = {
  line1: 'THE LONGEST ENDURANCE',
  line2: 'HYBRID DEFENSE UAS',
  about:
    'is a defense robotics company that specializes in long endurance drones and related technologies for border security, ISR and tactical operations.',
  reviews: {
    count: '1k+',
    label: 'POSITIVE REVIEWS',
    text: 'Our growing operator community is a testament to our quality services.',
    avatars: ['/assets/avatar-1.jpg', '/assets/avatar-2.jpg', '/assets/avatar-3.jpg'],
  },
}

export const technology = {
  tag: 'OUR TECHNOLOGY',
  title: ['Hybrid gas-electric', 'multicopter drone'],
  text:
    'The secret behind our long flight times is our proprietary fuel-injected hybrid-electric power source. We convert gasoline/petrol into electricity in flight, giving you extreme endurance and redundant power for sustained defense missions.',
  note: '* Available only on certain sub-models.',
  stats: [
    { icon: 'range', value: '60 mi', unit: '/100 km*', label: 'Video and control range', accent: true },
    { icon: 'clock', value: '5+', unit: '/hours', label: 'Flight endurance' },
    { icon: 'setup', value: '<5', unit: '/minutes', label: 'Setup time' },
    { icon: 'payload', value: '22lb', unit: '/10kg', label: 'Payload capacity' },
  ],
}

export const perimeter = {
  tag: 'PERIMETER 8 UAV DRONE',
  title: ['For carrying large payloads', 'for long distances'],
  // x / y are percentages of the field box, so chips scale with the artwork
  chips: [
    { icon: 'clock', text: '5 hours of flight endurance with the main tank. 8 hours with auxiliary tank.', accent: true, x: 22, y: 53 },
    { icon: 'payload', text: '22 lb. (10 kg) maximum payload capacity for 1 hour.', x: 41.4, y: 53 },
    { icon: 'temp', text: '15°F to 122°F (-10°C to 50°C) operation.', accent: true, x: 60.7, y: 53 },
    { icon: 'shield', text: 'Made in the United States. Blue UAS framework aligned. Fully NDAA compliant.', accent: true, x: 31.7, y: 77 },
    { icon: 'fuel', text: 'Fuel injected for high reliability and ease of use.', x: 51, y: 77 },
  ],
}
