import Link from "next/link";
import ExperienceCard from "./_components/ExperienceCard";
import NewsList from "./_components/NewsCard";

export default function Home() {
  return (
    <main>
      <h1>Hi, I'm Billy Petrik</h1>
      <h2>A CS graduate who actually likes talking to people.</h2>
      <p>I'm a CS and Management graduate from Boston College, currently working at SciSure in life sciences compliance. I like the space where code meets people: designing systems that work well and making sure the humans using them do too.</p>
      <ExperienceCard></ExperienceCard>
      <NewsList></NewsList>
    </main>
  );
}
