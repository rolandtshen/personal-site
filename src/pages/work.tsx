import Head from "next/head";
import styles from "@/styles/Work.module.css";

type Project = {
  title: string;
  summary: string;
  year: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "AI Labor Index",
    summary: "Researching the impact of AI on the labor market.",
    year: "2025",
    href: "https://ailaborindex.com",
  },
  {
    title: "Shield Shipping Protection",
    summary: "Shipping protection for top ecommerce brands.",
    year: "2024",
    href: "https://shieldcheckout.com",
  },
  {
    title: "Imprint",
    summary: "Content ownership centered blogging platform",
    year: "2024",
    href: "https://shieldcheckout.com",
  }
];

export default function WorkPage() {
  return (
    <>
      <Head>
        <title>Work | Roland Shen</title>
      </Head>
      <section>
        <ul className={styles.projectList}>
          {projects.map((project, index) => (
            <li key={index} className={styles.projectItem}>
              <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.projectTitle}>{project.title} ({project.year})</a>
              <span className={styles.projectMeta}>{project.summary}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
