import Image from "next/image";
import { notFound } from "next/navigation";
import experiences from "../../_data/experience.json";
import type { Experience } from "../../_components/ExperienceCard";
import styles from "../../css/ExperienceCard.module.css"

export function generateStaticParams() {
  return experiences.map((exp) => ({ id: String(exp.id) }));
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const exp = experiences.find((e) => e.id === Number(id)) as Experience | undefined;
  if (!exp) notFound();

  return (
    <main>
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
        <Image src={exp.photo} alt={exp.company} fill style={{ objectFit: "cover", borderRadius: "0.75rem" }} />
      </div>
      <h1>{exp.company}</h1>
      <h2>{exp.role}</h2>
      <p>{exp.dates} · {exp.location}</p>
      <p>{exp.summary}</p>
      <ul>
        {exp.bullets.map((b, i) => (
          <li key={i} className={styles.bullet}>{b}</li>
        ))}
      </ul>
    </main>
  );
}
