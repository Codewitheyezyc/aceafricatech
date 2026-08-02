export interface PricingTier {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  tag: string;
  isPopular?: boolean;
  features: string[];
  bestFor: string;
  ctaText: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "prerecorded",
    name: "Prerecorded Masterclass",
    price: 50000,
    priceFormatted: "₦50,000",
    tag: "Learn at Your Own Pace",
    features: [
      "Full recordings of our previous live cohort — all sessions",
      "Instant access sent directly to your Google Drive",
      "Learn on your own schedule, rewatch as many times as you need",
      "Access to all course materials, templates, and resources",
      "ATS CV template and LinkedIn optimisation guide",
      "Access to the AceAfrica student community"
    ],
    bestFor: "People with busy schedules who want flexibility and prefer to learn independently.",
    ctaText: "Get Instant Access — ₦50,000"
  },
  {
    id: "live-cohort",
    name: "Live Zoom Cohort",
    price: 70000,
    priceFormatted: "₦70,000",
    tag: "Train Live With Awanger",
    isPopular: true,
    features: [
      "4 weeks of live Zoom training sessions",
      "Direct, interactive access to Awanger throughout the cohort",
      "Real-time Q&A and feedback on your work",
      "Live career path discovery session — understand your strengths and choose your direction",
      "ATS CV review and LinkedIn profile feedback",
      "Cohort WhatsApp community for peer support and job leads",
      "Certificate of Completion issued on graduation"
    ],
    bestFor: "People who want accountability, direct mentorship, and the full AceAfrica experience.",
    ctaText: "Join the Next Cohort — ₦70,000"
  }
];
