import Image from "next/image";
import Link from "next/link";
import experiences from "../_data/experience.json";
import styles from "../css/ExperienceCard.module.css";

export type Experience = {
  id: number;
  company: string;
  role: string;
  dates: string;
  location: string;
  photo: string;
  summary: string;
  bullets: string[];
};

export default function ExperienceList() {
  return (
    <div className={styles.Exp}>
      <h2>Experience</h2>
      <div className={styles.ExpList}>
        {experiences.map((exp: Experience) => (
          <ExperienceCard key={exp.id} {...exp} />
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ id, company, role, dates, photo }: Experience) {
  return (
    <Link href={`/experience/${id}`} className={styles.ExpCard}>
      <div className={styles.imageWrapper}>
        <Image src={photo} alt={company} fill className={styles.cardImage} />
      </div>
      <div className={styles.cardBody}>
        <p className={styles.cardName}>{company}</p>
        <p className={styles.cardRole}>{role}</p>
        <p className={styles.cardDates}>{dates}</p>
      </div>
    </Link>
  );
}
