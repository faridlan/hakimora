export interface Project {
  title: string;
  description: string;
  tech: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Employee Tracker — Bank Galuh Ciamis",
    description:
      "A system for tracking employee targets and achievements for Bank Galuh Ciamis.",
    tech: "NestJS · React (TS) · SQLite",
    link: "https://github.com/faridlan/employee-tracker-backend",
  },
];

export default projects;
