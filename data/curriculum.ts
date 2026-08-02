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
    id: "card-1",
    title: "Virtual Assistance & Operations Support",
    badge: "Track 1",
    description: "Calendar management, inbox management, file organisation, creating SOPs, appointment setting, travel scheduling, and executive-level administrative support. You'll learn how to run a busy executive's world remotely — and get paid well to do it.",
    skills: [
      "Calendar & Inbox Management",
      "Executive Administrative Support",
      "SOP Creation & Document Organisation",
      "Travel Scheduling & Appointment Setting"
    ],
    tools: ["Google Workspace", "Notion", "Trello", "Asana", "Loom"]
  },
  {
    id: "card-2",
    title: "Customer Service & Technical Support",
    badge: "Track 2",
    description: "Customer support, technical troubleshooting, live chat, email triage, and helpdesk management. You'll learn how to represent international brands professionally and handle real customer queues from day one.",
    skills: [
      "Technical Troubleshooting & Live Chat",
      "Email Triage & Ticket Management",
      "International Brand Professionalism",
      "Helpdesk Queue Resolution & SLAs"
    ],
    tools: ["Zendesk", "Freshdesk", "Intercom", "Front", "Slack"]
  },
  {
    id: "card-3",
    title: "CRM, Project Management & Workflow Automation",
    badge: "Track 3",
    description: "HubSpot, GoHighLevel, CRM tools, project management platforms, Zapier, Make, and workflow automation. You'll learn how to manage pipelines, build automations, and make teams more efficient — skills that are in extremely high demand globally.",
    skills: [
      "HubSpot & GoHighLevel CRM Management",
      "Workflow Automation (Zapier & Make)",
      "Project Pipeline Management",
      "Team Efficiency & Process Optimization"
    ],
    tools: ["HubSpot", "GoHighLevel", "Zapier", "Make", "ClickUp"]
  },
  {
    id: "card-4",
    title: "Email Marketing & Lead Generation",
    badge: "Track 4",
    description: "Email marketing strategy, campaign management, lead generation, telemarketing, and account management. You'll learn how to help businesses grow their customer base and manage client relationships end to end.",
    skills: [
      "Email Marketing Campaign Strategy",
      "B2B Lead Generation & Prospecting",
      "Telemarketing & Appointment Setting",
      "Client Account Relationship Management"
    ],
    tools: ["Mailchimp", "Apollo.io", "Klaviyo", "LinkedIn Sales Navigator"]
  },
  {
    id: "card-5",
    title: "AI Tools, Content Creation & Admin Support",
    badge: "Track 5",
    description: "AI utilisation for administrative and operational support, AI-powered content creation, AI video production, and training AI tools to work for you. You'll learn how to use AI not just as a user — but as someone who can set it up, train it, and deliver better results faster than anyone who isn't using it.",
    skills: [
      "AI Utilization for Operations & Support",
      "AI-Powered Content & Video Production",
      "Custom AI Tool Setup & Prompting",
      "Automated Productivity Acceleration"
    ],
    tools: ["ChatGPT", "Claude AI", "Grammarly", "Midjourney", "Zapier"]
  },
  {
    id: "card-6",
    title: "CV Optimisation, LinkedIn & Job Pitching",
    badge: "Track 6",
    description: "ATS-friendly CV building for 2026, LinkedIn profile optimisation for inbound recruiters, proposal writing, cover letter writing, and understanding how to apply for roles in corporate UK, US, Canada, and beyond. We don't just teach you the skills — we make sure the world can see them.",
    skills: [
      "ATS-Friendly 2026 CV Building",
      "LinkedIn Optimization for Inbound Recruiters",
      "High-Converting Proposal & Cover Letter Writing",
      "Global Application Strategy (UK, US, Canada)"
    ],
    tools: ["Upwork", "Contra", "LinkedIn", "Glassdoor", "RemoteOK"]
  }
];
