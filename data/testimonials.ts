export interface Testimonial {
  id: string;
  name: string;
  badge: string;
  content: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Fateema",
    badge: "AceAfrica Alumni",
    content: "Before joining AceAfrica, I had zero tech background. Awanger and the team walked me step-by-step through Zendesk, Intercom, and ticket handling. Within 4 weeks of finishing, I landed my first remote support role!",
    image: "/testimonial2.png",
    rating: 5,
  },
  {
    id: "2",
    name: "John Fas",
    badge: "AceAfrica Alumni",
    content: "The ATS CV rewrite module alone changed my life. I went from getting zero interview callbacks to receiving multiple remote job offers. AceAfrica gives you practical, real-world skills that international employers actually look for.",
    image: "/testimonial1.png",
    rating: 5,
  },
  {
    id: "3",
    name: "Chinemerem Maria",
    badge: "AceAfrica Alumni",
    content: "I recommend AceAfrica to every Nigerian looking to break free from local salary limits. Awanger Agena's hands-on guidance as an active support specialist in Canada gives you insider strategies that actually work.",
    image: "/testimonial3.png",
    rating: 5,
  },
  {
    id: "4",
    name: "Peace",
    badge: "AceAfrica Alumni",
    content: "The live mentorship and pitch guidance on LinkedIn & Upwork are top-notch. They don't just teach you the skills; they show you exactly how to pitch yourself confidently to foreign clients.",
    image: "/testimonial4.png",
    rating: 5,
  },
  {
    id: "5",
    name: "Queen Ogunwole",
    badge: "AceAfrica Alumni",
    content: "Switching careers to tech sales felt intimidating, but AceAfrica's structured curriculum made it so straightforward. The investment of ₦25,000 paid for itself many times over in my very first month.",
    image: "/testimonial5.jpg",
    rating: 5,
  }
];
