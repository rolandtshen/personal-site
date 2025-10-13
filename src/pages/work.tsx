import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/Work.module.css";

type Project = {
  title: string;
  summary: string;
  year: string;
  href: string | null;
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
    title: "Spellbound",
    summary: "AI powered cold email warmup and outreach tool",
    year: "2022",
    href: null,
  },
  {
    title: "ETH Tipper",
    summary: "Accept ETH tips on your website.",
    year: "2021",
    href: "https://tools.roland.xyz/tip",
  },
  {
    title: "Snapshot",
    summary: "Most popular NFT snapshot tool",
    year: "2021",
    href: "https://tools.roland.xyz/snapshot",
  },
  {
    title: "Imprint",
    summary: "Content ownership centered blogging platform",
    year: "2020",
    href: "https://www.producthunt.com/products/imprint",
  }
];

const archivedProjects: Project[] = [
  {
    title: "MeetPass",
    summary: "Social business card app",
    year: "2018",
    href: "https://www.producthunt.com/products/meetpass",
  },
  {
    title: "Flare",
    summary: "Location based social question and answer app",
    year: "2017",
    href: null,
  },
  {
    title: "Transcribe",
    summary: "OG iOS transcription app with 20k+ downloads",
    year: "2016",
    href: null,
  },
];

export default function WorkPage() {
  const [showArchived, setShowArchived] = useState(false);

  return (
    <>
      <Head>
        <title>Work | Roland Shen</title>
      </Head>
      <section>
        <ul className={styles.projectList}>
          {projects.map((project, index) => (
            <li key={index} className={styles.projectItem}>
              <a href={project.href ?? undefined} target="_blank" rel="noopener noreferrer" className={styles.projectTitle}>{project.title} ({project.year})</a>
              <span className={styles.projectMeta}>{project.summary}</span>
            </li>
          ))}
        </ul>
        
        <div className={styles.archivedSection}>
          <button 
            className={styles.toggleButton}
            onClick={() => setShowArchived(!showArchived)}
            aria-expanded={showArchived}
          >
            <span>Archived Projects</span>
            <span className={`${styles.arrow} ${showArchived ? styles.arrowExpanded : ''}`}>
              ↓
            </span>
          </button>
          
          {showArchived && (
            <ul className={styles.projectList}>
              {archivedProjects.map((project, index) => (
                <li key={index} className={styles.projectItem}>
                  <a href={project.href ?? undefined} target="_blank" rel="noopener noreferrer" className={styles.projectTitle}>{project.title} ({project.year})</a>
                  <span className={styles.projectMeta}>{project.summary}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
