import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "../../_data/projects.json";
import styles from "../../css/ProjectCard.module.css";

type Project = {
  id: number;
  name: string;
  summary: string;
  description: string;
  tags: string[];
  github: string;
  dates: string;
  image?: string;
  live?: string;
};

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id)) as Project | undefined;
  if (!project) notFound();

  return (
    <main>
      <h1>{project.name}</h1>
      <p>{project.dates}</p>
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
      {project.image && (
        <div className={styles.projectImageWrapper}>
          <Image src={project.image} alt={project.name} fill className={styles.projectImage} />
        </div>
      )}
      <p>{project.description}</p>
      <div className={styles.projectLinks}>
        <Link href={project.github} target="_blank" className={styles.githubLink}>
          View on GitHub →
        </Link>
        {project.live && (
          <Link href={project.live} target="_blank" className={styles.githubLink}>
            View Live Site →
          </Link>
        )}
      </div>
    </main>
  );
}
