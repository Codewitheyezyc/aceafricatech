export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'enrollment' | 'training' | 'career';
}

export const faqs: FaqItem[] = [
  {
    id: "q1",
    category: "general",
    question: "What exactly is AceAfrica?",
    answer: "AceAfrica Tech Support Skills Limited is a digital skills academy that trains Africans in high-demand remote work skills — virtual assistance, customer support, CRM and automation, AI tools, email marketing, and more — and guides them step by step to discover their career path, build their professional profile, and land jobs with international companies paying in foreign currency."
  },
  {
    id: "q2",
    category: "training",
    question: "Do I need a tech or coding background?",
    answer: "No. Our training is designed for complete beginners. Awanger herself came from an accounting background — not tech. If you can use a smartphone and follow instructions, you can do this."
  },
  {
    id: "q3",
    category: "enrollment",
    question: "What's the difference between the Prerecorded Masterclass and the Live Cohort?",
    answer: "The Prerecorded Masterclass (₦50,000) gives you instant access to recordings of our previous live cohort — you learn at your own pace, on your own schedule, with no live interaction. The Live Cohort (₦70,000) is four weeks of live Zoom training with Awanger — interactive, real-time, with direct feedback, career coaching, and a cohort community around you."
  },
  {
    id: "q4",
    category: "enrollment",
    question: "Which one should I choose?",
    answer: "If you have a busy or unpredictable schedule and prefer to learn independently, the Prerecorded Masterclass is for you. If you want accountability, direct access to Awanger, and the full experience — choose the Live Cohort."
  },
  {
    id: "q5",
    category: "enrollment",
    question: "When does the next live cohort start?",
    answer: "Live cohort dates are announced periodically. Join the waitlist or follow our social media pages to be notified when enrolment opens."
  },
  {
    id: "q6",
    category: "training",
    question: "What tools and platforms will I learn?",
    answer: "Depending on your track: Zendesk, Freshdesk, HubSpot, GoHighLevel, Zapier, Make, Notion, Google Workspace, Trello, Canva, ChatGPT and other AI tools, LinkedIn, Upwork, Contra, and more."
  },
  {
    id: "q7",
    category: "career",
    question: "Do you help with job placement after training?",
    answer: "We don't place you in a job — but we do everything short of that. You graduate with a complete professional profile: an ATS CV, optimised LinkedIn, proposal scripts, and a job application strategy. Our student community shares live remote job leads daily, and we show you exactly where to look and how to apply effectively — including for corporate roles in the UK, US, and Canada."
  },
  {
    id: "q8",
    category: "career",
    question: "I'm already working. Can AceAfrica help me move into a better role?",
    answer: "Yes — and this is one of the things we do best. If you're already in a professional role but want to transition into a higher-paying remote or international position, we help you identify the transferable skills you already have, reframe them professionally, and position yourself for the roles you actually want."
  },
  {
    id: "q9",
    category: "career",
    question: "I'm an immigrant in the UK/Canada/US stuck in low-paying work. Is this for me?",
    answer: "Absolutely. A significant part of what we do is helping African professionals in the diaspora who are overqualified for the jobs they're currently in. We help you get job-ready for the corporate roles you deserve — with the CV, LinkedIn, and confidence to go after them."
  },
  {
    id: "q10",
    category: "career",
    question: "How much can I expect to earn after training?",
    answer: "It depends on your track, effort, and the roles you target. Graduates in our community report earning between $400–$2,000/month in their first remote roles. VA and customer support roles typically start at $400–$800/month. Automation and CRM specialists often earn more. The earning potential grows significantly with experience."
  },
  {
    id: "q11",
    category: "general",
    question: "Is this only for Nigerians?",
    answer: "AceAfrica started in Nigeria and our community is majority Nigerian — but we welcome students from across Africa and the diaspora. If you're African and want access to global work opportunities, you're welcome here."
  },
  {
    id: "q12",
    category: "enrollment",
    question: "How do I enrol?",
    answer: "Click the Enrol Now button on this page. Complete your registration and payment. For the Prerecorded Masterclass, you'll receive your course materials within 24 hours. For the Live Cohort, you'll receive your onboarding details and cohort schedule immediately after payment."
  }
];
