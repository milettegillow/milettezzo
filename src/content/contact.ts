/**
 * Contact page content data
 * 
 * To update contact page content:
 * 1. Edit the values below
 * 2. The page will automatically reflect changes
 */

export interface PolaroidImage {
  image: string;
  caption?: string;
}

export const contactContent = {
  pageTitle: "Stage Door",
  subtitle: "No flowers, please",
  intro: [
    "Hey! If you're an artist, musician, or producer with a fun idea, I'd love to hear from you. I'm always up for interesting collaborations, whether that's a new production, a cross-genre experiment, or something completely different. No idea is too weird.",
    "(You can also use this form to hire me)"
  ],
  socialLinks: [
    {
      platform: "Instagram",
      handle: "@milettezzo",
      url: "https://instagram.com/milettezzo",
      icon: "instagram"
    },
    {
      platform: "YouTube",
      handle: "YouTube",
      url: "https://youtube.com/@milettezzo",
      icon: "youtube"
    }
  ],
  polaroidImages: [
    { image: '/images/bts/blurry.jpg', caption: '5 hours into a recording day, losing the will' },
    { image: '/images/bts/roll.jpg', caption: 'what\'s the quickest way to get on the stage?' },
    { image: '/images/bts/christmas.jpg', caption: 'christmas in july' },

    { image: '/images/bts/fox.jpg', caption: 'backstage' },
    { image: '/images/bts/mess.jpg', caption: 'the post-recording mess' },
    { image: '/images/bts/purple.jpg', caption: 'feelin\' purple' },
    { image: '/images/bts/wigmore.jpg', caption: 'the wigmore' },
  ] as PolaroidImage[]
};

