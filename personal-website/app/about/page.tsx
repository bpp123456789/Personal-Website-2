import Image from "next/image";
import Link from "next/link";
import abtphoto from "../../public/about/About Photo.jpg";
import styles from "../css/About.module.css";
import ExperienceList from "../_components/ExperienceCard";

function GithubIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const aspects = [
  { label: "Pronouns", value: "He/Him/His" },
  { label: "Alma Mater", value: "Boston College" },
  { label: "Majors", value: "Computer Science B.A. and Management B.S." },
  { label: "Age", value: "22" },
  { label: "Hometown", value: "Milton, MA" },
];

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <h2>You can call me Billy</h2>
      <div className={styles.photoWrapper}>
        <Image src={abtphoto} alt="Billy's Photo" fill className={styles.profilePhoto} />
      </div>
      <ul className={styles.aspectList}>
        {aspects.map((a) => (
          <li key={a.label} className={styles.aspectItem}>
            <span className={styles.aspectLabel}>{a.label}</span>
            <span className={styles.aspectValue}>{a.value}</span>
          </li>
        ))}
      </ul>
      <div className={styles.socials}>
        <Link href="https://github.com/bpp123456789" target="_blank" className={styles.socialLink}>
          <GithubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/william-petrik-101290257/" target="_blank" className={styles.socialLink}>
          <LinkedinIcon />
        </Link>
      </div>
      <p>
        I graduated from Boston College in May 2026 with degrees in Computer Science and Management, along with a concentration in Management and Leadership through the Carroll School of Management. I most enjoy the intersections of technology and humanity, particularly in UI/UX and product management.
      </p>
      <p>
        At BC, I served as a trip leader for Outdoor Adventures, planning and leading trips for fellow students. During my time there I worked across several organizations: at SciSure as a Customer Service Associate, with the Scouts BSA as a climbing instructor, and at BC&apos;s Recreation Center as a route setter.
      </p>
      <ExperienceList />
      <h2>Coursework</h2>
      <h3>Computer Science</h3>
      <ul className={styles.courseList}>
        <li>Computer Organization and Lab</li>
        <li>Computer Systems</li>
        <li>Logic and Computation</li>
        <li>Randomness and Computation</li>
        <li>Algorithms</li>
        <li>Computer Networks</li>
        <li>Web Application Development</li>
        <li>Software Engineering</li>
        <li>iOS App Development (Swift)</li>
        <li>Foundations of Algorithmic (Un)fairness</li>
        <li>Data, Ethics and Society</li>
      </ul>
      <h3>Business &amp; Leadership</h3>
      <ul className={styles.courseList}>
        <li>Financial Accounting</li>
        <li>Fundamentals of Finance</li>
        <li>Principles of Economics</li>
        <li>Statistical Analysis</li>
        <li>Operations Management</li>
        <li>Organizational Behavior</li>
        <li>Leadership</li>
        <li>Leading High Performance Teams</li>
        <li>Power and Influence</li>
        <li>Integrative Strategy Simulation</li>
        <li>Gestion Des Ressources Humaines (Human Resources Management)</li>
        <li>Information Systems</li>
        <li>Strategic Management</li>
        <li>SQL Module</li>
        <li>Excel for Business Analytics</li>
      </ul>
    </main>
  );
}
