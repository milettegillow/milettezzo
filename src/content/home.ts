/**
 * Home page content data
 * 
 * To update home page content:
 * 1. Edit the values below
 * 2. The page will automatically reflect changes
 */

export interface Quote {
  text: string;
  citation: string;
  href?: string; // Optional link to the original article
}

export const homeContent = {
  heroTitle: "Milette Gillow | Mezzo-Soprano",
  heroImage: "/images/hero.jpg",
  portraitImage: "/images/portrait.jpg",
  quotes: [
    {
      text: "From the off it was clear that Milette Gillow (Dido) has a magnificent voice: her heartrending rendition of Dido's Lament 'When I am laid in earth' reduced the equally talented Belinda to tears during the curtain call",
      citation: "— Ham & High, May 2022",
      href: "https://www.hamhigh.co.uk/news/21323539.hgo-double-bill-modern-dress-baroque-opera-sounded-centuries-ago/",
    },
    {
      text: "Milette Gillow, a poised, soulful and elegant mezzo […] held the stage with absolute vocal security and stillness.",
      citation: "— The Critic, May 2022",
      href: "https://thecritic.co.uk/the-original-best-and-shortest-english-opera/",
    },
    {
      text: "As the Fox, Milette Gillow was perhaps softer-grained than usual and rather touching.",
      citation: "— Planet Hugill, Nov 2022",
      href: "https://www.planethugill.com/2022/11/a-radiant-performance-from-caroline.html",
    }
  ] as Quote[]
};

