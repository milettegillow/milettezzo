/**
 * Digital content data for the Digital page
 * 
 * To update digital page content:
 * 1. Edit the heroBanner and continueWatching values below
 * 2. To add new tiles: Add a new object to the appropriate category array
 * 3. Include: title, subtitle, href, image (path under public/images/digital/), and optional badge
 */

export interface DigitalHeroBanner {
  title: string;
  description: string;
  watchUrl: string;
  moreInfoText?: string; // Optional text for the "More Info" modal popup
  moreInfoUrl?: string; // Optional URL (if moreInfoText is not provided)
  image?: string; // Optional background image for the hero banner
}

export interface DigitalContinueWatching {
  title: string;
  microcopy: string;
}

export const digitalHeroBanner: DigitalHeroBanner = {
  title: "Featured: The Cunning Little Vixen",
  description: "Award-winning production",
  watchUrl: "https://youtu.be/KTGOIW7n2C0",
  moreInfoText: "<p><strong>The Cunning Little Vixen</strong></p><p><em>Leoš Janáček</em></p><p>Performed with HGO. Captured when young by the Forester, and brought up by him as a pet, Vixen Sharp-Ears escapes back to the wild – but her life continues to interweave with those of the Forester and his friends the pastor, the schoolmaster and the poacher – and the handsome young Fox Gold-Stripe. Sung in the original Czech</p><p>Award-winning ensemble (Offies, 2023)</p>",
  image: "/images/digital/hgo-vixen.jpg"
};

export const digitalContinueWatching: DigitalContinueWatching = {
  title: "Continue Watching",
  microcopy: "You were halfway through \"Spider Pig: The Opera\""
};

export interface DigitalTile {
  title: string;
  subtitle: string;
  href: string;
  image: string;
  badge?: string;
}

export interface DigitalCategory {
  id: string;
  name: string;
  microcopy?: string; // Optional Netflix-style microcopy
  tiles: DigitalTile[];
}

export const digitalContent: DigitalCategory[] = [
  {
    id: 'viral',
    name: 'Viral Moments',
    microcopy: 'Trending now',
    tiles: [
      {
        title: 'Spider Pig',
        subtitle: '(but make it opera)',
        href: 'https://www.instagram.com/reel/DCeReK-Al33/?igsh=aHlzOWV4aThib3Js',
        image: '/images/digital/spiderpig.jpg',
        badge: '1.4M+'
      },
      {
        title: 'Smelly Cat',
        subtitle: '(but make it art song)',
        href: 'https://www.instagram.com/reel/C6iyekYgGfF/?igsh=MWZubXp3ZG50OXp3aw==',
        image: '/images/digital/smellycat.jpg',
        badge: '500K+'
      },
      {
        title: 'Soft Kitty, Warm Kitty',
        subtitle: '(but make it a vocal warmup)',
        href: 'https://www.instagram.com/reel/DErhUURAQUb/?igsh=MWUwbm1teG9lcDhycA==',
        image: '/images/digital/softkitty.jpg',
        badge: '1.3M+'
      },
      {
        title: 'Toxic',
        subtitle: '(but make it opera)',
        href: 'https://www.instagram.com/reel/DM2O0jAoRwH/?igsh=MWszN2oxOGg4ZGhnZg==',
        image: '/images/digital/britneyspears-toxic.jpg',
        badge: '200K+'
      },
      {
        title: 'My Little Pony',
        subtitle: '(but make it baroque)',
        href: 'https://www.instagram.com/reel/DNIYIVEoEEb/?igsh=MTlraWE2YnlsNXh1NQ==',
        image: '/images/digital/mylittlepony.jpg',
        badge: '200K+'
      },
      {
        title: 'Inner Monologue',
        subtitle: 'based on a true story',
        href: 'https://www.instagram.com/reel/C54GZy9IxDr/?igsh=MTlqaGQ4NGJvYWJjdQ==',
        image: '/images/digital/rossini-inner-thoughts.jpg',
        badge: '40K+'
      },
      {
        title: 'Then vs Now',
        subtitle: 'what a difference 15 years makes',
        href: 'https://www.instagram.com/reel/CoIjbY5gKBy/?igsh=ZG96enVrYmRzeDNt',
        image: '/images/digital/then-vs-now.jpg',
        badge: '350K+'
      },
      {
        title: 'Audition Routine',
        subtitle: 'if I don\'t do this routine, I won\'t book the gig',
        href: 'https://www.instagram.com/reel/ClqpF7OA5IF/?igsh=eG41a21hbnQ4Zjdq',
        image: '/images/digital/audition-routine.jpg',
        badge: '45K+'
      },
      {
        title: 'Phoebe Buffay\'s Christmas Song',
        subtitle: '(but make it opera)',
        href: 'https://www.instagram.com/reel/DDjfObLg-dY/?igsh=YXlnM2tyam5mdHdr',
        image: '/images/digital/christmas-song.jpg',
        badge: '20K+'
      },
      {
        title: 'Barbie Girl',
        subtitle: '(but make it opera)',
        href: 'https://www.instagram.com/reel/DMkNu_2IV0p/?igsh=MWllZWl6dzBib3Vibg==',
        image: '/images/digital/barbie-girl.jpg',
        badge: '20K+'
      },
    ]
  },
  {
    id: 'recordings',
    name: 'Recordings',
    microcopy: 'Because you liked The Magic Flute',
    tiles: [
      {
        title: 'Rossini: Una voce poco fa',
        subtitle: 'from Il barbiere di Siviglia',
        href: 'https://www.youtube.com/watch?v=4jZhDYsbCn4',
        image: '/images/digital/una-voce.jpg',
        badge: 'Top Rated'
      },
      {
        title: 'Purcell: Thy hand, Belinda',
        subtitle: 'from Dido and Aeneas',
        href: 'https://youtu.be/RWaH9jMlvmk',
        image: '/images/digital/dido-lament.jpg',
        badge: 'Live'
      },
      {
        title: 'Sea Pictures',
        subtitle: 'full song cycle',
        href: 'https://youtu.be/YdIsT8hYc7o',
        image: '/images/digital/elgar.jpg',
      },
      {
        title: 'Finzi: I Said to Love',
        subtitle: 'full song cycle',
        href: 'https://youtu.be/pGNa3ZADvT0',
        image: '/images/digital/finzi.jpg',
      },
      {
        title: 'Mahler: Hans und Grethe',
        subtitle: 'from Lieder und Gesänge',
        href: 'https://youtu.be/fs1tbuCnuSg',
        image: '/images/digital/mahler.jpg',
        badge: 'Audience present'
      },
      {
        title: 'Gershwin: The Lorelei',
        subtitle: 'the only jazz piece here',
        href: 'https://youtu.be/yGKHf3-13aQ',
        image: '/images/digital/gershwin.jpg',
        badge: 'Piano included'
      },
      {
        title: 'Give Him this Orchid',
        subtitle: 'from The Rape of Lucretia',
        href: 'https://youtu.be/HvfAK_DpNFs',
        image: '/images/digital/lucretia.jpg',
        badge: 'Minimal staging'
      },
      {
        title: 'Rossini: Signor, una parola',
        subtitle: 'from La Cenerentola',
        href: 'https://youtu.be/_yilCWpjrNM',
        image: '/images/digital/cenerentola.jpg',
      },
      {
        title: 'Donizetti: O Mio Fernando',
        subtitle: 'from La Favorita',
        href: 'https://www.youtube.com/watch?v=lcwqh5i6o-I',
        image: '/images/digital/fernando.jpg',
        badge: 'No amplification'
      },
      {
        title: 'Schubert: Die Forelle',
        subtitle: 'comfort listeninge',
        href: 'https://youtu.be/fGNjM6XUkWQ',
        image: '/images/digital/schubert.jpg',
      },
      {
        title: 'Saint-Saens: Mon Coeur',
        subtitle: 'from Samson et Dalila',
        href: 'https://youtu.be/FA1KdSCUOrs',
        image: '/images/digital/mon-coeur.jpg',
      },
      {
        title: 'Purcell: Music for a While',
        subtitle: 'what a tune',
        href: 'https://youtu.be/86GlKOItXGE',
        image: '/images/digital/purcell-music.jpg'
      },
    ]
  },
  {
    id: 'experiments',
    name: 'Internet Experiments',
    microcopy: 'Others also liked',
    tiles: [
      {
        title: 'Boogie Woogie Bugle Boy',
        subtitle: 'inspired by lockdown',
        href: 'https://www.youtube.com/watch?v=5fOx7V_ZSU8',
        image: '/images/digital/bugle-boy.jpg',
        badge: 'Hot'
      },
      {
        title: 'Jack\'s Lament',
        subtitle: 'makeup + singing = magic',
        href: 'https://www.instagram.com/reel/DBlVXliA-uX/?igsh=MWd0ODlsaWZhYnY0bg==',
        image: '/images/digital/skellington.jpg'
      },
      {
        title: 'Poor Unfortunate Souls',
        subtitle: 'more makeup + singing',
        href: 'https://www.instagram.com/reel/C7YmJfZoBKu/?igsh=ZGY4a3QweW4xZWoy',
        image: '/images/digital/poor-unfortunate-souls.jpg',
      },
      {
        title: 'Carmen for Gen Z',
        subtitle: 'a new translation for a new audience',
        href: 'https://www.instagram.com/reel/DMSS1jYICSz/?igsh=MWZvbnpvemk2NDUxNg==e',
        image: '/images/digital/carmen-genz.jpg',
        badge: 'New'
      },
      {
        title: 'Mr Grinch',
        subtitle: 'what if the grich were an opera?',
        href: 'https://www.instagram.com/reel/DD9R5eZg-jD/?igsh=bTJ5cXY4bmswa2pm',
        image: '/images/digital/grinch.jpg',
      },
      {
        title: 'Corpse Bride',
        subtitle: 'typical friday night look',
        href: 'https://www.instagram.com/reel/DQJiziZCJq2/?igsh=cWN6dTZjcDVhbzV4',
        image: '/images/digital/corpse-bride.jpg',
        badge: 'New'
      },
      {
        title: 'How to prepare for oratorio',
        subtitle: 'a journey in 90 seconds',
        href: 'https://www.instagram.com/reel/DSafDGOCN-Z/?igsh=bmdwbnF2MDNnamxz',
        image: '/images/digital/oratorio-prep.jpg',
        badge: 'New'
      },
    ]
  },
];

