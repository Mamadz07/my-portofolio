export type Project = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;

  category:
    | "Frontend"
    | "Backend"
    | "Fullstack"
    | "UI/UX";

  technologies: string[];

  status:
    | "Completed"
    | "In Progress"
    | "Production";

  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;

  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise User Management System",

    slug: "enterprise-user-management",

    description:
      "Professional user management platform with role permissions, dashboard analytics, and audit logging.",

    image:
      "/images/projects/user-management.jpg",

    category: "Fullstack",

    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
    ],

    status: "Production",

    liveUrl:
      "https://demo-project.com",

    githubUrl:
      "https://github.com/yourusername/project",

    caseStudyUrl:
      "/case-studies/user-management",

    featured: true,
  },

  {
    id: 2,

    title: "Modern E-Commerce Platform",

    slug: "modern-ecommerce",

    description:
      "Scalable online store with payment integration, admin dashboard, and inventory management.",

    image:
      "/images/projects/ecommerce.jpg",

    category: "Fullstack",

    technologies: [
      "Next.js",
      "Stripe",
      "Laravel",
      "MySQL",
    ],

    status: "Production",

    liveUrl:
      "https://demo-project.com",

    githubUrl:
      "https://github.com/yourusername/project",

    featured: true,
  },

  {
    id: 3,

    title: "Portfolio Agency Website",

    slug: "agency-website",

    description:
      "Premium agency website focused on conversion and modern UX.",

    image:
      "/images/projects/agency.jpg",

    category: "Frontend",

    technologies: [
      "Next.js",
      "GSAP",
      "Framer Motion",
    ],

    status: "Completed",

    liveUrl:
      "https://demo-project.com",

    githubUrl:
      "https://github.com/yourusername/project",

    featured: true,
  },

  {
    id: 4,

    title: "Task Management Dashboard",

    slug: "task-management",

    description:
      "Collaborative task and productivity management platform.",

    image:
      "/images/projects/dashboard.jpg",

    category: "UI/UX",

    technologies: [
      "Figma",
      "Design System",
      "UX Research",
    ],

    status: "Completed",

    featured: false,
  },
];