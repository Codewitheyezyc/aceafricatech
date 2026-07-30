export interface FaqItem {
  id: string;
  category: "General" | "Enrollment & Payment" | "Training & Support" | "Career & Jobs";
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: "general-1",
    category: "General",
    question: "What is AceAfrica Tech Support Skills Limited?",
    answer: "AceAfrica Tech Support Skills Limited is an educational institution dedicated to training everyday Nigerians in high-demand digital skills (Customer Support, Virtual Assistant, IT Technical Support, and Tech Sales) and equipping them to secure high-paying remote jobs with international companies paying in foreign currency."
  },
  {
    id: "general-2",
    category: "General",
    question: "Do I need prior tech or coding experience to enroll?",
    answer: "No! All our courses are beginner-friendly and designed from scratch. No coding background, degree, or prior tech experience is required. We teach you step-by-step everything you need to know."
  },
  {
    id: "enrollment-1",
    category: "Enrollment & Payment",
    question: "How much does the complete training cost?",
    answer: "The complete hands-on training program costs a one-time fee of ₦25,000. This covers all live classes, practical assignments, course materials, ATS CV templates, and job placement mentorship."
  },
  {
    id: "enrollment-2",
    category: "Enrollment & Payment",
    question: "Do you offer installment or partial payments?",
    answer: "No. Full payment of ₦25,000 must be completed via bank transfer before class access and training materials are granted. Partial payment or installment plans are strictly not eligible for course access."
  },
  {
    id: "enrollment-3",
    category: "Enrollment & Payment",
    question: "How do I confirm my payment after sending the bank transfer?",
    answer: "After transferring ₦25,000 to our official bank account, go to the Enroll page on our website and fill out the Payment Confirmation Form, attaching your proof of payment screenshot. Alternatively, you can send your receipt directly to our official WhatsApp support at +234 906 000 1468. Once verified (usually within 2–4 hours), you will receive instant confirmation and class onboarding details."
  },
  {
    id: "training-1",
    category: "Training & Support",
    question: "How are classes delivered?",
    answer: "Training is delivered online via flexible live virtual sessions, video tutorials, practical assignments, and interactive Q&A sessions. This allows you to learn from anywhere in Nigeria using your smartphone or laptop."
  },
  {
    id: "training-2",
    category: "Training & Support",
    question: "What tools and software will I learn to use?",
    answer: "You will master industry-standard remote work software, including Zendesk, Freshdesk, Intercom, Slack, Notion, Google Workspace, Canva, Loom, CRM platforms, and AI productivity tools (ChatGPT, Claude) to maximize your speed and job readiness."
  },
  {
    id: "career-1",
    category: "Career & Jobs",
    question: "How will AceAfrica help me get a remote job?",
    answer: "We provide comprehensive career coaching: building a killer ATS-compliant CV, optimizing your LinkedIn profile, setting up winning Upwork & Contra accounts, writing tailored cover letters, and practicing mock interviews with expert guidance."
  },
  {
    id: "career-2",
    category: "Career & Jobs",
    question: "How much can I expect to earn in a remote role?",
    answer: "Our graduates land remote customer support, virtual assistant, and IT support roles paying anywhere from $500 to $2,500+ monthly (paid directly in USD, GBP, or CAD depending on the hiring company)."
  }
];
