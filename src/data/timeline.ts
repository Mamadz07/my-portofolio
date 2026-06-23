export type TimelineItem = {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string;
  type:
    | "education"
    | "work"
    | "freelance"
    | "certification";
};

export const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "Bachelor of Information Systems",
    company: "University Name",
    date: "2022 - Present",
    description:
      "Studying software engineering, databases, web development, and system analysis.",
    type: "education",
  },

  {
    id: 2,
    title: "Frontend Developer",
    company: "Freelance",
    date: "2023 - Present",
    description:
      "Building responsive websites, dashboards, and modern web applications for clients.",
    type: "freelance",
  },

  {
    id: 3,
    title: "Full Stack Developer",
    company: "Personal Projects",
    date: "2023 - Present",
    description:
      "Developing complete web applications using Next.js, Laravel, Node.js, and MySQL.",
    type: "work",
  },

  {
    id: 4,
    title: "Web Development Certification",
    company: "Dicoding",
    date: "2024",
    description:
      "Completed web development learning path and modern frontend technologies.",
    type: "certification",
  },
];