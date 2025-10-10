import { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

const tabs = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Writing", href: "/writing" },
];

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftPane}>
        <div className={styles.leftInner}>
          <nav className={styles.header} aria-label="Primary">
            <ul className={styles.tabList}>
              {tabs.map((tab) => {
                const isActive = router.pathname === tab.href;
                return (
                  <li key={tab.href}>
                    <Link
                      href={tab.href}
                      className={isActive ? styles.activeTab : styles.tab}
                    >
                      {tab.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <main className={styles.content}>{children}</main>
          <footer className={styles.footer}>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              X
            </a>
          </footer>
        </div>
      </div>
      <div className={styles.rightPane} aria-hidden="true">
      </div>
    </div>
  );
}
