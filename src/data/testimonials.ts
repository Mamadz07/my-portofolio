export type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmad Rizki",
    position: "Project Manager",
    company: "Digital Agency",
    image: "/images/testimonials/person-1.jpg",
    content:
      "Muhammad Ilham memiliki kemampuan teknis yang sangat baik. Komunikasi jelas, pengerjaan tepat waktu, dan hasil yang diberikan melampaui ekspektasi.",
  },

  {
    id: 2,
    name: "Siti Rahma",
    position: "Business Owner",
    company: "SR Fashion",
    image: "/images/testimonials/person-2.jpg",
    content:
      "Website yang dibuat sangat profesional dan membantu meningkatkan kepercayaan pelanggan terhadap bisnis kami.",
  },

  {
    id: 3,
    name: "Budi Santoso",
    position: "UI/UX Designer",
    company: "Creative Studio",
    image: "/images/testimonials/person-3.jpg",
    content:
      "Kolaborasi yang sangat menyenangkan. Ilham mampu menerjemahkan desain menjadi produk yang responsif dan berkualitas tinggi.",
  },
];