import Image from "next/image";
import experiences from "../_data/experience.json";
import styles from "../css/ExperienceCard.module.css"

type Experience = {
  id: number;
  company: string;
  photo: string;
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

function ExperienceCard({ company, photo }: Experience) {
  return (
    <div className={styles.ExpCard}>
      <div className={styles.imageWrapper}>
        <Image src={photo} alt={company} fill className={styles.cardImage} />
      </div>
      <h3>{company}</h3>
    </div>
  );
}
