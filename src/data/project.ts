export interface Project {
  title: string;
  description: string;
  tech: string;
  link: string;
  link2: string;
}

const projects: Project[] = [
  {
    title: "Employee Tracker — Bank Galuh Ciamis",
    description:
      "A system for tracking employee targets and achievements for Bank Galuh Ciamis.",
    tech: "NestJS · React (TS) · SQLite",
    link: "https://github.com/faridlan/employee-tracker-backend",
    link2: "https://github.com/faridlan/employee-tracker-frontend",
  },
  {
    title: "Meeting Minutes — Bank Galuh Ciamis",
    description:
      "A system for write a meeting minute and result meeting of Bank Galuh Ciamis.",
    tech: "NestJS · React (TS) · SQLite",
    link: "https://github.com/faridlan/notulen-backend",
    link2: "https://github.com/faridlan",
  },
];

export default projects;
