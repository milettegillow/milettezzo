/**
 * Performances archive data
 * 
 * To add a new performance:
 * 1. Add a new object to the performances array
 * 2. Include: slug, year, workTitle, role, presenterOrVenue, image, category, href (optional)
 * 3. The performance will automatically appear in the archive
 * 
 * Example entry:
 * {
 *   slug: 'dido-wigmore-2022',
 *   year: 2022,
 *   workTitle: 'Dido and Aeneas',
 *   role: 'Dido',
 *   presenterOrVenue: 'Wigmore Hall',
 *   image: '/images/performances/dido-wigmore-2022.jpg',
 *   category: 'opera',
 *   href: 'https://example.com' // optional
 * }
 */

export type PerformanceCategory = 'opera' | 'concert' | 'oratorio' | 'choral' | 'other';

export interface Performance {
  slug: string;
  year: number;
  month?: number; // 1-12 (optional, defaults to 1 if not provided)
  workTitle: string;
  role: string;
  presenterOrVenue: string;
  image: string;
  category: PerformanceCategory;
  href?: string;
}

export const performances: Performance[] = [
  {
    slug: 'carmen-sheldonian-2025',
    year: 2025,
    month: 5,
    workTitle: 'Bizet: Carmen',
    role: 'Carmen',
    presenterOrVenue: 'Sheldonian Theatre',
    image: '/images/performances/carmen.jpg',
    category: 'opera',
    /*href: 'https://www.sheldonian.ox.ac.uk/event/oxford-opera-society-carmen'*/
  },
  {
    slug: 'richmond-in-europe-2025',
    year: 2025,
    month: 4,
    workTitle: 'Friendship - Richmond in Europe',
    role: 'Opera Gala',
    presenterOrVenue: 'St Mary\'s Church, Twickenham',
    image: '/images/performances/richmond-2025.jpg',
    category: 'concert',
    href: 'https://www.richmond.gov.uk/news/news_february_2025/enjoy_songs_and_arias_at_mayors_friendship_concert'
  },
  {
    slug: 'richmond-in-europe-2024',
    year: 2024,
    month: 4,
    workTitle: 'Togetherness - Richmond in Europe',
    role: 'Opera Gala',
    presenterOrVenue: 'St Mary\'s Church, Twickenham',
    image: '/images/performances/richmond-2024.jpg',
    category: 'concert',
    href: 'https://www.richmond.gov.uk/news/comment_spot/comment_spot_archive/council_blog_2024/new_blog_the_togetherness'
  },
  {
    slug: 'chiltern-chamber-2024',
    year: 2024,
    month: 3,
    workTitle: 'Haydn: Seven Last Words of Christ',
    role: 'Alto Soloist',
    presenterOrVenue: 'St Peter\'s Church, Berkhamsted',
    image: '/images/performances/chiltern-haydn.jpg',
    category: 'oratorio',
  },
  {
    slug: 'gabrieli-gerontius',
    year: 2023,
    month: 7,
    workTitle: 'Elgar: Dream of Gerontius',
    role: 'Gabrieli Consort',
    presenterOrVenue: 'Fairfield Halls, Croydon',
    image: '/images/performances/gabrieli-gerontius.jpg',
    category: 'choral',
    href: 'https://open.spotify.com/album/2TIAVwE6KG2ipg3qUdDeH0?si=Ym14XEpDQnGUWXiamvF3sA'
  },
    {
    slug: 'ferrier-semifinal-2023',
    year: 2023,
    month: 3,
    workTitle: 'Semifinalist',
    role: 'Kathleen Ferrier Award',
    presenterOrVenue: 'Wigmore Hall',
    image: '/images/performances/ferrier.jpg',
    category: 'other',
    href: 'https://www.wigmore-hall.org.uk/whats-on/202304181330'
  },
  {
    slug: 'rosenkavalier',
    year: 2022,
    month: 11,
    workTitle: 'Strauss: Der Rosenkavalier',
    role: 'Octavian',
    presenterOrVenue: 'Uncovered Opera',
    image: '/images/performances/rosenkavalier.jpg',
    category: 'opera',
  },
  {
    slug: 'cunning-little-vixen',
    year: 2022,
    month: 11,
    workTitle: 'Janáček: Příhody lišky Bystroušky',
    role: 'Lišák',
    presenterOrVenue: 'Hampstead Garden Opera',
    image: '/images/performances/vixen.jpg',
    category: 'opera',
    href: 'https://hgo.org.uk/vixen/'
  },
  {
    slug: 'haydn-nelson-mass',
    year: 2022,
    month: 9,
    workTitle: 'Haydn: Nelson Mass',
    role: 'Alto Soloist',
    presenterOrVenue: 'Cambridge Philharmonic',
    image: '/images/performances/haydn-nelson-mass.jpg',
    category: 'oratorio'
  },
  {
    slug: 'monteverdi-proms',
    year: 2022,
    month: 9,
    workTitle: 'Beethoven: Missa Solemnis',
    role: 'Monteverdi Choir',
    presenterOrVenue: 'Royal Albert Hall',
    image: '/images/performances/monteverdi-proms.jpg',
    category: 'choral',
    href: 'https://monteverdi.co.uk/recent-projects/beethoven-missa-solemnis'
  },
  {
    slug: 'nycgb-fellowship-2022',
    year: 2022,
    month: 5,
    workTitle: 'NYCGB Fellowship',
    role: 'Octet Concert',
    presenterOrVenue: 'St John The Evangelist, Oxford',
    image: '/images/performances/nycgb-fellowship-2022.jpg',
    category: 'choral'
  },
    {
    slug: 'jubilee-concert',
    year: 2022,
    month: 5,
    workTitle: 'Programme of English Song',
    role: 'Queen\'s Jubilee Concert',
    presenterOrVenue: 'Gerrards Cross',
    image: '/images/performances/jubilee-concert.jpg',
    category: 'concert'
  },
  {
    slug: 'final-recital',
    year: 2022,
    month: 5,
    workTitle: 'Final Recital (with Distinction)',
    role: 'Gala Concert',
    presenterOrVenue: 'Royal Academy of Music',
    image: '/images/performances/final-recital.jpg',
    category: 'concert'
  },
  {
    slug: 'dido-and-aeneas',
    year: 2022,
    month: 5,
    workTitle: 'Purcell: Dido and Aeneas',
    role: 'Dido',
    presenterOrVenue: 'Hampstead Garden Opera',
    image: '/images/performances/dido.jpg',
    category: 'opera',
    href: 'https://hgo.org.uk/venus-dido/'
  },

  {
    slug: 'wigmore-bach',
    year: 2022,
    month: 4,
    workTitle: 'Royal Academy Bach Soloists',
    role: 'Bach and the Greener Grass',
    presenterOrVenue: 'Wigmore Hall',
    image: '/images/performances/wigmore-bach.jpg',
    category: 'oratorio'
  },
  {
    slug: 'wigmore-fcol',
    year: 2022,
    month: 4,
    workTitle: 'For Crying Out Loud! Series',
    role: 'Gala Concert',
    presenterOrVenue: 'Wigmore Hall',
    image: '/images/performances/wigmore-fcol.jpg',
    category: 'concert'
  },
  {
    slug: 'st-johns-passion',
    year: 2022,
    month: 4,
    workTitle: 'Bach: St. John\'s Passion',
    role: 'Alto Soloist',
    presenterOrVenue: 'Guildford Cathedral',
    image: '/images/performances/st-johns-passion.jpg',
    category: 'oratorio'
  },
    {
    slug: 'female-composers-female-voices',
    year: 2022,
    month: 3,
    workTitle: 'Female Composers for Female Voices',
    role: 'Gala Concert',
    presenterOrVenue: 'Royal Academy of Music',
    image: '/images/performances/female-composers.jpg',
    category: 'concert'
  },
  {
    slug: 'eic-gala',
    year: 2022,
    month: 3,
    workTitle: 'The Greatest Hits',
    role: 'Opera Gala',
    presenterOrVenue: 'East India Club',
    image: '/images/performances/eic-gala.jpg',
    category: 'concert',
  },
  {
    slug: 'cenerentola',
    year: 2022,
    month: 2,
    workTitle: 'Rossini: La Cenerentola',
    role: 'Angelina',
    presenterOrVenue: 'Royal Academy Opera Scenes',
    image: '/images/performances/cenerentola.jpg',
    category: 'opera'
  },
  {
    slug: 'lucretia',
    year: 2022,
    month: 2,
    workTitle: 'Britten: The Rape of Lucretia',
    role: 'Lucretia',
    presenterOrVenue: 'Royal Academy Vocal Faculty Scenes',
    image: '/images/performances/lucretia.jpg',
    category: 'opera'
  },
  {
    slug: 'masterclass-dame-sarah-connolly',
    year: 2022,
    month: 1,
    workTitle: 'Dame Sarah Connolly',
    role: 'Masterclass',
    presenterOrVenue: 'Royal Academy of Music',
    image: '/images/performances/masterclass.jpg',
    category: 'other'
  },
  {
    slug: 'monteverdi-lenfance',
    year: 2021,
    month: 11,
    workTitle: 'L\'Enfance du Christ',
    role: 'Monteverdi Choir',
    presenterOrVenue: 'Tonhalle, Zürich',
    image: '/images/performances/lenfance-zurich.jpg',
    category: 'choral',
    href: 'https://seenandheard-international.com/2021/11/beautiful-berlioz-from-sir-john-eliot-gardiner-with-the-monteverdi-choir-in-zurich/'
  },
  {
    slug: 'elgar-sea-pictures',
    year: 2021,
    month: 11,
    workTitle: 'Elgar: Sea Pictures',
    role: 'Gala Concert',
    presenterOrVenue: 'St Martin’s Church, Dorking',
    image: '/images/performances/elgar-sea-pictures.jpg',
    category: 'concert',
  },
  {
    slug: 'nycgb-fellowship-2021',
    year: 2021,
    month: 7,
    workTitle: 'NYCGB Fellowship',
    role: 'Madrigals Concert',
    presenterOrVenue: 'St Mary the Virgin, Lewisham',
    image: '/images/performances/nycgb-fellowship-2021.jpg',
    category: 'choral'
  },
];

