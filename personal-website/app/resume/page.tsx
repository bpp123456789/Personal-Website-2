import styles from "../css/Resume.module.css";

export default function Resume() {
  return (
    <main className={styles.resumeMain}>
      <h1>Resume</h1>
      <div className={styles.pdfContainer}>
        <iframe
          src="/William Petrik Resume 2026.pdf"
          className={styles.pdfViewer}
          title="William Petrik Resume"
        />
      </div>
    </main>
  );
}
