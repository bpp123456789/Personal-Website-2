import Link from "next/link";
import projects from "../_data/projects.json";
import styles from "../css/ProjectCard.module.css";

type Project = {
  id: number;
  name: string;
  summary: string;
  description: string;
  tags: string[];
  github: string;
  dates: string;
};

export default function Projects() {
  return (
    <main>
      <h1>Projects</h1>
      <div className={styles.grid}>
        {projects.map((p: Project) => (
          <Link key={p.id} href={`/projects/${p.id}`} className={styles.card}>
            <p className={styles.cardName}>{p.name}</p>
            <p className={styles.cardDates}>{p.dates}</p>
            <p className={styles.cardDescription}>{p.summary}</p>
            <div className={styles.tags}>
              {p.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
