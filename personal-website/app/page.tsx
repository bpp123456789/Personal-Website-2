import Link from "next/link";
import ExperienceCard from "./_components/ExperienceCard";
import NewsList from "./_components/NewsCard";

export default function Home() {
  return (
    <main>
      <h1>William Petrik</h1>
      <p>Welcome to my personal website where I get to show off what I have learned throughout my early career. I have worked as a climbing instructor, route setter, and customer service associate. <Link href="/about">Learn more about me here!</Link></p>
      <p>Feel free to explore and find out more about me and some of the experiences I have had.</p>
      <ExperienceCard></ExperienceCard>
      <NewsList></NewsList>
    </main>
  );
}
