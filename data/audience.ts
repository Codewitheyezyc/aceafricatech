export interface AudienceCard {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  outcome: string;
}

export const audienceCards: AudienceCard[] = [
  {
    id: "fresh-starter",
    title: "The Fresh Starter",
    subtitle: "You're new to the professional world and don't know where to begin.",
    problem: "Maybe you just finished school. Maybe you've been doing odd jobs and know you're capable of more. You've heard about remote work and dollar-paying jobs but don't know where to start or what to learn.",
    solution: "We start with you — your strengths, your personality, your goals — and build a career path around who you actually are. Then we teach you the skills, build your profile, and walk you to your first international role.",
    outcome: "You leave AceAfrica with: a career direction, a job-ready profile, and a clear path to your first remote income."
  },
  {
    id: "working-professional",
    title: "The Working Professional",
    subtitle: "You already have a career. You want it to work internationally — and remotely.",
    problem: "You're in HR, finance, operations, marketing, customer service, banking, or admin etc. You're good at what you do. But you're tired of the commute, the salary cap, or the limited opportunities where you are. You want to take your existing skills and make them work for international companies — earning in dollars or pounds without leaving your expertise behind.",
    solution: "We don't start from scratch with you. We help you identify which of your current skills are globally marketable, what they're called in international job markets, and how to position yourself for remote roles that pay significantly more than what you're earning now.",
    outcome: "You leave AceAfrica with: your existing experience repackaged for the global market, an ATS CV that crosses borders, and a strategy to land international roles."
  },
  {
    id: "immigrant-professional",
    title: "The Immigrant Professional",
    subtitle: "You're already in the UK, US, or Canada etc— but your career didn't make the journey with you.",
    problem: "You came with qualifications, experience, and ambition. But somehow you ended up in care work, warehouse shifts, hospitality, or retail — doing jobs that don't reflect who you are or what you're worth. You know there's more for you. You just need someone to show you how to get there.",
    solution: "This is one of the most important things AceAfrica does. We help African professionals in the diaspora translate their skills for the local market, build profiles that compete with local candidates, and confidently go after the corporate and remote roles they actually deserve. Awanger has navigated this herself — from Nigeria to corporate London — and she teaches exactly what she's lived.",
    outcome: "You leave AceAfrica with: a UK/US/Canada-ready CV, a repositioned professional identity, and the confidence and strategy to go after roles that match your actual worth."
  },
  {
    id: "career-switcher",
    title: "The Career Switcher",
    subtitle: "You're done with what you've been doing. You want something different — and you want it to work globally.",
    problem: "Maybe you're a teacher, a nurse, a banker, or a civil servant. You're not unhappy with your skills — you're unhappy with the ceiling. Remote digital work offers something your current field doesn't: flexibility, foreign currency income, and the ability to work from anywhere. But you don't know how to make the switch without starting from zero.",
    solution: "You don't have to. Most career switchers already have more transferable skills than they realise — they just don't know the professional terms for them or how to present them in a new context. We help you make that translation, choose the right new track, and build toward it without throwing away everything you've already built.",
    outcome: "You leave AceAfrica with: a clear transition roadmap, transferable skills properly named and packaged, and a strategy to enter a new field without starting from scratch."
  }
];
