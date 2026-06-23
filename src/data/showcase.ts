export type ShowcaseWebsite = {
  id: number;
  name: string;
  url: string;
  image: string;
  description: string;
  category:
    | "Company Profile"
    | "E-Commerce"
    | "Portfolio"
    | "Dashboard"
    | "Landing Page";
};

export const showcaseWebsites: ShowcaseWebsite[] = [
  {
    id: 1,
    name: "Modern Business Website",
    url: "https://example.com",
    image: "/images/showcase/business.jpg",
    description:
      "Professional company profile website with modern UI and responsive experience.",
    category: "Company Profile",
  },

  {
    id: 2,
    name: "Premium E-Commerce",
    url: "https://example.com",
    image: "/images/showcase/ecommerce.jpg",
    description:
      "High-converting online store with payment gateway integration.",
    category: "E-Commerce",
  },

  {
    id: 3,
    name: "Creative Portfolio",
    url: "https://example.com",
    image: "/images/showcase/portfolio.jpg",
    description:
      "Interactive portfolio website with advanced animations.",
    category: "Portfolio",
  },

  {
    id: 4,
    name: "Analytics Dashboard",
    url: "https://example.com",
    image: "/images/showcase/dashboard.jpg",
    description:
      "Modern admin dashboard with charts, analytics, and reporting features.",
    category: "Dashboard",
  },
];