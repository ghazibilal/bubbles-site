(() => {
const A = './assets/';

// Prices marked ✓ are transcribed from the flyers in assets/reference/.
// Ceramic + PPF are placeholders pending legible source.
const SERVICES = [
  {
    id: 'ppf', title: 'Paint protection film', short: 'PPF',
    lead: 'Paint Protection', tail: 'Film', icon: 'shield-check',
    summary: 'Self-healing film over the panels that take the hits — bonnet, bumper, mirrors.',
    blurb: 'Karachi roads throw stones. Film is the only thing that stops a chip becoming a rust spot. We cut to pattern and wrap the edges so nothing lifts in the heat.',
    eyebrow: 'Services we offer',
    hero: A + 'photos/ext-rinse-taillight.jpg',
    photos: [A + 'photos/ext-polisher.jpg', A + 'photos/ext-grille-foam.jpg'],
    includes: ['Full front-end coverage: bonnet, bumper, fenders, mirrors.', 'Self-healing top coat.', 'Wrapped and tucked edges.', 'Paint decontamination before application.', 'Pattern-cut, no blade near your paint.', 'Applied indoors, dust-controlled.'],
    prices: [
      { vehicleClass: 'Small hatchback', price: '55,000/-' },
      { vehicleClass: 'Medium hatchback', price: '62,000/-' },
      { vehicleClass: 'Sedan', price: '70,000/-' },
      { vehicleClass: 'Luxury sedan / Crossover', price: '85,000/-' },
      { vehicleClass: 'SUV', price: '98,000/-' },
    ],
    priceConfirmed: false, duration: '2–3 days', durability: '05 years',
  },
  {
    id: 'ceramic', title: 'Ceramic coating', short: 'Ceramic',
    lead: 'Ceramic', tail: 'Coating', icon: 'droplets',
    summary: 'Gtechniq-approved coating systems in Gold, Platinum and Silver tiers.',
    blurb: 'Three tiers, three durability ratings. Every tier gets full paint correction first — the difference is the product stack, not the care.',
    eyebrow: 'Gtechniq systems',
    hero: A + 'photos/ext-polisher.jpg',
    photos: [A + 'photos/complete-polisher.jpg', A + 'photos/ext-grille-foam.jpg'],
    includes: ['Full paint correction before coating.', 'Gtechniq product systems, applied as specified.', 'Wheels, tyres and trim coated.', 'Glass coating on the windscreen (Platinum).', 'Indoor cure, no rushed handback.', 'Written record of every product applied.'],
    prices: [
      { vehicleClass: 'Small hatchback', price: '35,000/-' },
      { vehicleClass: 'Sedan', price: '45,000/-' },
      { vehicleClass: 'Luxury sedan', price: '50,000/-' },
      { vehicleClass: 'Crossover', price: '50,000/-' },
      { vehicleClass: 'SUV', price: '60,000/-' },
    ],
    priceConfirmed: false, duration: '2–3 days', durability: '03–05 years', hasTiers: true,
  },
  {
    id: 'rust', title: 'Anti rust coating', short: 'Anti rust',
    lead: 'Anti Rust', tail: 'Coating', icon: 'spray-can',
    summary: 'Underbody and cavity treatment for Karachi salt air and monsoon standing water.',
    blurb: 'Salt air and standing monsoon water take the underbody first, and you never see it happen. We strip, treat and seal the cavities and floor pan.',
    eyebrow: 'Benefits',
    hero: A + 'photos/rust-underbody.jpg',
    photos: [A + 'photos/rust-suspension.jpg', A + 'photos/rust-spray-gun.jpg'],
    includes: ["Prolongs the car's life.", 'Prevents rust and corrosion.', 'Heat resistance.', 'Absorbs road noise.', 'Moisture resistance.', 'Protection against stone chips, damp and salt.'],
    prices: [
      { vehicleClass: 'Small hatchback', price: '18,000/-' },
      { vehicleClass: 'Medium hatchback', price: '20,000/-' },
      { vehicleClass: 'Sedan', price: '22,000/-' },
      { vehicleClass: 'Luxury sedan / Crossover', price: '28,000/-' },
      { vehicleClass: 'SUV', price: '35,000/-' },
    ],
    priceConfirmed: true, duration: '1 day',
  },
  {
    id: 'complete', title: 'Complete detailing', short: 'Complete',
    lead: 'Complete', tail: 'Detailing', icon: 'sparkles',
    summary: 'Interior and exterior together — the full strip-down, correction and dressing.',
    blurb: 'Interior and exterior in one booking. The car goes in dirty and comes out corrected, dressed and protected. Usually two days.',
    eyebrow: 'Services we offer',
    hero: A + 'photos/complete-polisher.jpg',
    photos: [A + 'photos/complete-leather-wipe.jpg', A + 'photos/ext-grille-foam.jpg'],
    includes: ['Interior vacuuming.', 'Dash, console, doors, vinyl and plastics cleaning and dressing.', 'Leather cleaning and dressing.', 'Headliner cleaning.', 'Seats cleaning.', 'Carpet vacuuming.', 'Exterior body jet shampoo wash.', 'Clay bar treatment.', 'Exterior paint correction compounding.', 'High gloss polishing.', 'Chrome and metal surface cleaning.', 'Wax application.', 'Exterior plastic trim dressing.', 'Engine bay degreasing and cleaning.', 'Rim and tyre cleaning and dressing.'],
    prices: [
      { vehicleClass: 'Small hatchback', price: '17,000/-' },
      { vehicleClass: 'Medium hatchback', price: '18,000/-' },
      { vehicleClass: 'Sedan', price: '20,000/-' },
      { vehicleClass: 'Luxury sedan / Crossover', price: '25,000/-' },
      { vehicleClass: 'SUV', price: '30,000/-' },
    ],
    priceConfirmed: true, duration: '2 days',
  },
  {
    id: 'interior', title: 'Interior detailing', short: 'Interior',
    lead: 'Interior', tail: 'Detailing', icon: 'car',
    summary: 'Cabin strip-down, leather and trim dressing, headliner, carpets and vents.',
    blurb: 'Full cabin strip-down. Carpets extracted, every vent and seam done by hand, leather fed rather than glossed.',
    eyebrow: 'Services we offer',
    hero: A + 'photos/int-vacuum.jpg',
    photos: [A + 'photos/int-vent-cloth.jpg', A + 'photos/int-dash-wipe.jpg'],
    includes: ['Interior vacuuming.', 'Dash, console, doors, vinyl and plastics cleaning and dressing.', 'Leather cleaning and dressing.', 'Seats cleaning.', 'Headliner cleaning.', 'Carpet vacuuming and cleaning.', 'Windows cleaning.', 'Engine bay degreasing and cleaning.', 'Rim and tyre cleaning and dressing.', 'Exterior body jet shampoo washing.', 'Wax application.'],
    prices: [
      { vehicleClass: 'Small hatchback', price: '10,000/-' },
      { vehicleClass: 'Medium hatchback', price: '11,000/-' },
      { vehicleClass: 'Sedan', price: '12,000/-' },
      { vehicleClass: 'Luxury sedan / Crossover', price: '18,000/-' },
      { vehicleClass: 'SUV', price: '20,000/-' },
    ],
    priceConfirmed: true, duration: '1 day',
  },
  {
    id: 'exterior', title: 'Exterior detailing', short: 'Exterior',
    lead: 'Exterior', tail: 'Detailing', icon: 'droplets',
    summary: 'Wash, clay, correction and polish — the paint side of the job on its own.',
    blurb: 'The paint side on its own. Wash, decontaminate, correct, polish, protect. Best value if the cabin is already clean.',
    eyebrow: 'Services we offer',
    hero: A + 'photos/ext-grille-foam.jpg',
    photos: [A + 'photos/ext-polisher.jpg', A + 'photos/ext-rinse-taillight.jpg'],
    includes: ['Jet shampoo wash.', 'Clay bar treatment.', 'Paint correction compounding.', 'High gloss polishing.', 'Chrome and metal surface cleaning.', 'Wax application.', 'Exterior plastic trim dressing.', 'Complete interior vacuum.', 'Interior and exterior windows cleaning.', 'Engine bay degreasing and cleaning.', 'Rim and tyre cleaning and dressing.'],
    prices: [
      { vehicleClass: 'Small hatchback', price: '10,000/-' },
      { vehicleClass: 'Medium hatchback', price: '11,000/-' },
      { vehicleClass: 'Sedan', price: '12,000/-' },
      { vehicleClass: 'Luxury sedan / Crossover', price: '18,000/-' },
      { vehicleClass: 'SUV', price: '20,000/-' },
    ],
    priceConfirmed: true, duration: '1 day',
  },
  {
    id: 'wash', title: 'Premium wash & wax', short: 'Wash & wax',
    lead: 'Premium', tail: 'Wash & Wax', icon: 'droplets',
    summary: 'Jet shampoo wash, clay bar, hand wax. Same day, both branches.',
    blurb: 'The maintenance visit. Book it every six weeks and a coated car stays coated.',
    eyebrow: 'Best and fast washing',
    hero: A + 'photos/wash-foam-wheel.jpg',
    photos: [A + 'photos/ext-grille-foam.jpg', A + 'photos/int-dash-wipe.jpg'],
    includes: ['Complete interior vacuum.', 'Interior dusting with trims, plastic and vinyl surface dressing.', 'Engine bay cleaning and dressing.', 'Trunk compartment cleaning.', 'Exterior body shampoo wash.', 'Wax application.', 'Exterior windows and mirrors cleaning.', 'Tire dressing.'],
    prices: [
      { vehicleClass: 'Small hatchback', price: '3,500/-' },
      { vehicleClass: 'Medium hatchback', price: '4,000/-' },
      { vehicleClass: 'Sedan', price: '5,000/-' },
      { vehicleClass: 'Luxury sedan / Crossover', price: '7,000/-' },
      { vehicleClass: 'SUV', price: '9,000/-' },
    ],
    priceConfirmed: true, duration: 'Same day',
  },
];

const PROJECTS = [
  { id: 'p1', car: 'Honda City 2021', service: 'Ceramic coating', tier: 'Gold', image: A + 'photos/ext-polisher.jpg', problem: 'Two years of swirl marks from a roadside wash. Corrected, then coated.', duration: '3 days in the bay', branch: 'DHA Branch' },
  { id: 'p2', car: 'Suzuki Cultus 2018', service: 'Anti rust coating', image: A + 'photos/rust-underbody.jpg', problem: 'Surface rust starting along the sills after two monsoons parked outside.', duration: '1 day', branch: 'North Chapter' },
  { id: 'p3', car: 'Toyota Fortuner 2020', service: 'Interior detailing', image: A + 'photos/int-vacuum.jpg', problem: 'Two kids and a dog. Carpets extracted, leather fed, headliner spot-cleaned.', duration: '1 day', branch: 'DHA Branch' },
  { id: 'p4', car: 'Toyota Corolla 2019', service: 'Complete detailing', image: A + 'photos/complete-polisher.jpg', problem: 'Bought used, never detailed. Full correction inside and out.', duration: '2 days', branch: 'North Chapter' },
  { id: 'p5', car: 'Kia Sportage 2022', service: 'Paint protection film', image: A + 'photos/ext-rinse-taillight.jpg', problem: 'New car, owner drives Super Highway daily. Front end wrapped before delivery mileage.', duration: '2 days', branch: 'DHA Branch' },
  { id: 'p6', car: 'Honda Civic 2017', service: 'Exterior detailing', image: A + 'photos/ext-grille-foam.jpg', problem: 'Faded clear coat on the roof and bonnet. Compounded back, then sealed.', duration: '1 day', branch: 'North Chapter' },
  { id: 'p7', car: 'Suzuki Alto 2020', service: 'Premium wash & wax', image: A + 'photos/wash-foam-wheel.jpg', problem: 'Six-week maintenance visit on a car we coated last year.', duration: 'Same day', branch: 'North Chapter' },
  { id: 'p8', car: 'Toyota Vitz 2015', service: 'Anti rust coating', image: A + 'photos/rust-suspension.jpg', problem: 'Suspension and floor pan treated before the rust reached a structural member.', duration: '1 day', branch: 'DHA Branch' },
];

const TESTIMONIALS = [
  { quote: 'Booked on a Thursday, collected Saturday morning. Water just runs off it now and the swirls from the last place are gone.', name: 'Bilal A.', car: 'Honda City 2021', service: 'Ceramic coating', rating: 5, branch: 'DHA Branch' },
  { quote: 'They showed me the underbody before and after on their phone. Nobody had ever bothered to do that.', name: 'Sana R.', car: 'Suzuki Cultus 2018', service: 'Anti rust coating', rating: 5, branch: 'North Chapter' },
  { quote: 'Two kids and a dog. The cabin smells new again. Took a day longer than quoted but worth it.', name: 'Faraz H.', car: 'Toyota Fortuner 2020', service: 'Interior detailing', rating: 4, branch: 'DHA Branch' },
  { quote: 'I asked three places for a price on PPF. Bubbles was the only one who asked to see the car first.', name: 'Hamza K.', car: 'Kia Sportage 2022', service: 'Paint protection film', rating: 5, branch: 'DHA Branch' },
  { quote: 'Straightforward on WhatsApp, no pushing me to a bigger package. Car came back better than I expected for the money.', name: 'Ayesha M.', car: 'Toyota Corolla 2019', service: 'Complete detailing', rating: 5, branch: 'North Chapter' },
  { quote: 'The roof had gone chalky. They warned me it might need paint, then got it back with compounding anyway.', name: 'Usman T.', car: 'Honda Civic 2017', service: 'Exterior detailing', rating: 5, branch: 'North Chapter' },
  { quote: 'Same-day wash and it was actually same day. Small thing, but nobody in Karachi does that.', name: 'Zainab F.', car: 'Suzuki Alto 2020', service: 'Premium wash & wax', rating: 4, branch: 'North Chapter' },
  { quote: 'Second car I have brought here. They remembered the first one without me telling them.', name: 'Imran S.', car: 'Toyota Vitz 2015', service: 'Anti rust coating', rating: 5, branch: 'DHA Branch' },
  { quote: 'Priced per vehicle class, written down, no add-ons at collection. That is the whole reason I went back.', name: 'Nida J.', car: 'Honda BR-V 2019', service: 'Ceramic coating', rating: 5, branch: 'DHA Branch' },
];

// ✓ Both branches verified against bubblescarcare.pk (Aug 2026).
const BRANCHES = [
  {
    id: 'dha', name: 'DHA Branch',
    address: 'Plot 20, Sector A, 4th Commercial Street, opp. Defence Police Station, Main Korangi Road, Kashmir Colony, Karachi 75500',
    phone: '0330 2822537', hours: 'Mon–Sun, 10am – 9pm',
    map: 'https://goo.gl/maps/EJ2SorRz4F1hXQRR9',
  },
  {
    id: 'north', name: 'North Chapter',
    address: 'C-177, Block C, Shahrah-e-Noorjahan, North Nazimabad, adj. Essa General Hospital, Karachi',
    phone: '0300 8233793', hours: 'Mon–Sun, 10am – 9pm',
    map: 'https://www.google.com/maps/place/Bubbles+Car+Care,+North+Chapter/@24.9402926,67.0326485,19.07z',
  },
];

// ✓ Real channels, verified counts (Aug 2026).
const SOCIAL = [
  { platform: 'YouTube', icon: 'youtube', handle: '@bubblescarcare8150', count: 'Detailing projects & reviews', url: 'https://www.youtube.com/channel/UCAyzXaIEBDVXZB5Suj_eCYg/videos' },
  { platform: 'Instagram', icon: 'instagram', handle: '@bubbles.carcare', count: '12K followers · 1,572 posts', url: 'https://www.instagram.com/bubbles.carcare/' },
  { platform: 'Facebook', icon: 'facebook', handle: '/bubblescarcare', count: '78,849 likes', url: 'https://www.facebook.com/bubblescarcare/' },
];

// ✓ VERIFIED YouTube video ids only. Two are confirmed to exist; the channel has
// more, but ids must be read off the real channel — never guessed, or the embed
// renders "Video unavailable". Add to this array as ids are supplied.
const VIDEOS = [
  {
    videoId: '3IkwinYT00c', platform: 'youtube', kind: 'review',
    title: 'My friends advised me to visit Bubbles Car Care',
    service: 'Customer review',
  },
  {
    videoId: 'Mj7pTswBBv0', platform: 'youtube', kind: 'work',
    title: 'Witness the best car wash in Karachi',
    car: 'Honda Civic', service: 'Premium wash & wax',
  },
];
const VIDEO_REVIEWS = VIDEOS.filter((v) => v.kind === 'review');
const VIDEO_WORK = VIDEOS.filter((v) => v.kind !== 'review');

// ✓ Published Google reviews, verbatim from bubblescarcare.pk — typos included.
// Owner's instruction: publish positive reviews only.
const GOOGLE_REVIEWS = [
  { quote: 'Perfect experience while buying the car from them. Nice facilty with parking availablity. And giving their customers the best service. For washing and car care the place you need', name: 'Talha Mahmud', rating: 5 },
  { quote: 'Wonderful experience...good way of work under supervision of well trained staff...', name: 'Syed Shah', rating: 5 },
  { quote: 'First experience was good. Went for wash and wax only. Well trained staff, know their job and they use high quality stuff', name: 'Mateen Farooq', rating: 5 },
  { quote: 'Nyce detailing car clean SHOP.. It staff used Maguire Products..', name: 'Abid Ali Momin', rating: 5 },
  { quote: 'Still satisfy with them....... Doing good work', name: 'Muhammad Atiq', rating: 5 },
];

// ✓ Verified facts from bubblescarcare.pk /about-us.
const COMPANY = {
  founded: 2015,
  firstBranch: 'DHA Phase 1, Karachi',
  secondBranchYear: 2021,
  email: 'info@bubblescarcare.pk',
  site: 'bubblescarcare.pk',
  whatsapp: '923008233793',
  products: ['Gtechniq ceramic coatings', 'Nanotek PPF', 'Nanolink PPF', 'Gravitex anti-rust'],
};

const FAQS = [
  { q: 'How long does a ceramic coating take?', a: 'Two to three days for full paint correction and cure. The car stays indoors the whole time — we do not hand it back mid-cure.' },
  { q: 'Do you collect and drop off?', a: 'Yes, within DHA and Gulshan. Ask on WhatsApp when you book and we will confirm a window.' },
  { q: 'Is PPF better than ceramic coating?', a: 'They do different jobs. Film takes physical impact on the panels that get hit; coating makes the whole car easier to wash and holds gloss. Most owners do film on the front end and coating everywhere else.' },
  { q: 'Can you fix scratches?', a: 'Light swirls and water spots come out with correction. Anything through the clear coat needs paint, and we will tell you that before taking your money.' },
  { q: 'Do I need to wash the car before bringing it?', a: 'No. Bring it as it is — the wash is the first step of every service.' },
  { q: 'What does "vehicle class" mean for my car?', a: 'Small hatchback is an Alto or Cultus. Medium is a Vitz or Swift. Sedan is a City or Corolla. Luxury sedan and crossover covers Camry, BR-V and Sportage. SUV is Fortuner and up. Not sure — send the model on WhatsApp.' },
  { q: 'Do you work on both branches to the same standard?', a: 'Same process, same products, same checklist. Book whichever is closer.' },
];

const A_ = A;
Object.assign(window, {
  BCC: { A: A_, SERVICES, PROJECTS, TESTIMONIALS, BRANCHES, FAQS, VIDEOS, VIDEO_REVIEWS, VIDEO_WORK, GOOGLE_REVIEWS, SOCIAL, COMPANY },
});
})();
