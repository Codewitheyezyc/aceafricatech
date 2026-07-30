export interface CourseModule {
  id: string;
  title: string;
  badge: string;
  description: string;
  skills: string[];
  tools: string[];
}

export const curriculumModules: CourseModule[] = [
  {
    id: "module-1",
    title: "Customer Support, Technical Support & IT Helpdesk",
    badge: "Core Track",
    description: "Master foreign client support etiquette, ticketing workflows, live chat handling, email support, omnichannel ticket triage, and IT support fundamentals.",
    skills: [
      "Customer Support Skills & Service Excellence",
      "Omnichannel Support (Email, Live Chat, Ticketing & Voice)",
      "IT Support & Technical Problem Resolution",
      "SLA Management & Ticket Triage Workflows",
      "De-escalation Techniques & Customer Retention",
      "Proficiency in CRM & Helpdesk Management Tools"
    ],
    tools: ["Zendesk", "Freshdesk", "Intercom", "Front", "Slack", "Zoho Desk"]
  },
  {
    id: "module-2",
    title: "Virtual Assistance & Executive Administrative Support",
    badge: "In-Demand Track",
    description: "Learn how to manage C-suite executive calendars, achieve inbox zero, conduct research, manage travel schedules, and streamline daily operations.",
    skills: [
      "General Virtual Assistance & Executive Admin",
      "Calendar & Meeting Scheduling Management",
      "Inbox Zero Strategy & Email Triage",
      "Document Preparation, Data Entry & File Organization",
      "Travel Planning, Itinerary & Expense Tracking",
      "Google Workspace & Project Management Mastery"
    ],
    tools: ["Google Workspace", "Notion", "Trello", "Asana", "Loom", "ClickUp"]
  },
  {
    id: "module-3",
    title: "Tech Sales, Prospecting & Art of Negotiation",
    badge: "High Income Track",
    description: "Discover how tech sales works, lead qualification, cold outreach, CRM pipeline management, handling objections, and closing deals with foreign businesses.",
    skills: [
      "Closing Sales/Deals & The Complete Sales Process",
      "Art of Selling Yourself & Sales Psychology",
      "Networking, Prospecting & Lead Generation",
      "Telemarketing, Appointment Setting & Outbound Prospecting",
      "Art of Negotiating & Handling Client Objections",
      "CRM Pipeline Management & Multi-touch Follow-ups"
    ],
    tools: ["HubSpot CRM", "Salesforce", "Apollo.io", "LinkedIn Sales Navigator", "Calendly"]
  },
  {
    id: "module-4",
    title: "Remote Work Tools & Leveraging AI Productivity",
    badge: "Modern Edge",
    description: "Leverage AI to double your work speed, automate repetitive support & research tasks, draft high-converting emails, and stand out to foreign recruiters.",
    skills: [
      "AI Prompt Engineering for Support & Operations",
      "Automated Knowledge Base & FAQ Generation",
      "AI-Assisted Email, Proposal & Ticket Drafting",
      "Task Automation & Productivity Workflows",
      "Tools for Remote Jobs & Async Collaboration"
    ],
    tools: ["ChatGPT", "Claude AI", "Grammarly", "Zapier", "Canva"]
  },
  {
    id: "module-5",
    title: "Job Search Preparation, ATS CV & Platform Pitching",
    badge: "Career Launchpad",
    description: "Complete career preparation to get you hired: ATS CV revamp, LinkedIn optimization, interview prep, and pitching on top remote job platforms.",
    skills: [
      "ATS-Compliant Resume Revamp & Architecture",
      "LinkedIn Profile Optimization for Inbound Recruiters",
      "High-Converting Proposal Writing & Cover Letters",
      "Monetization Guidance (Upwork, Glassdoor, Contra & Remote Sites)",
      "Mock Interview Coaching & Salary Pitching",
      "Access to Remote Job Lead Groups & Lifetime Mentorship"
    ],
    tools: ["Upwork", "Contra", "LinkedIn", "Glassdoor", "RemoteOK"]
  }
];
