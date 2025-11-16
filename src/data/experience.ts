// src/data/experience.ts

export interface Experience {
  company: string;
  location: string;
  year: string;
  role: string;
  type: "Full Time" | "Internship";
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    company: "CV Wijaya Family Tasikmalaya (Shirt Convection)",
    location: "Tasikmalaya, Indonesia",
    year: "2022 - Present",
    role: "Admin-Marketing Support",
    type: "Full Time",
    responsibilities: [
      "Design shirts for customers",
      "Create order recap from customers to production",
      "Create posters for advertisements and promotions",
    ],
  },
  {
    company: "PT Sapta Muda Berkarya - STARA",
    location: "Bandung, Indonesia",
    year: "2024",
    role: "Technical Writer",
    type: "Internship",
    responsibilities: [
      "Write documentation for API lists",
      "Create user guide documentation",
      "Document database structure",
    ],
  },
];

export default experiences;
