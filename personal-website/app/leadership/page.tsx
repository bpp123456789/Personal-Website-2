import Image from "next/image";
import scouts from "../../public/leadership/Scouts.jpg"
import cope from "../../public/leadership/COPE.jpg"
import oa from "../../public/leadership/OA.jpg"

export default function Leadership() {
  return (
  <main>
    <h1>Leadership</h1>
    <h3>Youth and Scouting</h3>
    <p>Like most people, I started in Cub Scouts. I joined the Tiger den and stayed for two years — there were no Lions yet, and I was too young to move up. Leadership was not even a concept I understood at that point, but it has come to define who I am, the way I look at the world, and my goals in life.</p>
    <p>It was not until I was around eleven and joined Boy Scouts that I got my first glimpse of what youth leadership actually meant. For the most part, it looked like one person doing everything: planning meetings, organizing campouts, and managing patrols on their own. That began to change when I was elected Senior Patrol Leader at fifteen. The role made me realize that leadership is genuinely hard, and that it is far easier to simply do things yourself than to delegate and trust others. Positions like SPL often went nearly uncontested — people wanted to lead, but few understood what leading actually required.</p>
    <p>Halfway through my tenure, a new Scoutmaster was appointed. Before our state jamboree, he told me to "keep my hands in my pockets." I resented the advice in the moment: we fell behind schedule, I had to track people down, and work was getting done sloppily. But in hindsight, it was one of the clearest illustrations I have ever seen of the difference between management and leadership. Management means organizing people to complete tasks. Leadership means providing a vision and earning genuine buy-in — and without buy-in, people do the bare minimum.</p>
    <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
      <Image src={scouts} alt="Scouting Photo" fill style={{ objectFit: "cover", borderRadius: "0.75rem" }} />
    </div>
    <h3>Camp Counselor and Climbing Instructor</h3>
    <p>It was only after earning Eagle Scout that I began to actually practice leadership rather than just hold a title. I found my stride toward the end of my second summer as a counselor, but it truly clicked in my third. That year I was assigned the ten- and eleven-year-olds — a group that, left unchecked, can be among the most chaotic at any camp. What saved me was discovering C.O.P.E. (Challenging Outdoor Personal Experience). While other counselors gave their campers free time in the mornings, I ran structured activities alongside mine. They connected with me because they could see I was invested in them. By the end of the summer, we had built a cohesive enough group to construct a Roman-style standard together — and to our leadership, we were the standout group at the campfire.</p>
    <p>Over the following fall, winter, and spring, I began working with the climbing staff at camp, running weekend programming for troops and visiting groups. This is where I started to understand what it truly means to teach and guide. Explaining and demonstrating a skill is straightforward; enabling someone else to internalize and use it is something else entirely. C.O.P.E. gave me a framework for that — it is built around soft leadership skills like trust, group dynamics, and, most importantly, how to fail productively. Treating every failure as a learning opportunity sounds obvious, but it is genuinely difficult in practice. The instinct is to get frustrated, deflect blame, or reach for an excuse. Learning to do the opposite is what separates good leaders from great ones.</p>
    <p>I was also fortunate to be surrounded by other instructors who wanted to pass those same values on to me. They gave me a platform to experiment, take ownership, and build a vision. At my first instructor course, I was asked to teach adults — people two and three times my age — how to tie knots, inspect gear, and follow standard operating procedures. Standing up in front of that room at sixteen was daunting, but it taught me something I have never forgotten: everyone has a voice worth hearing, and everyone deserves a chance to be heard.</p>
    <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
      <Image src={cope} alt="COPE Photo" fill style={{ objectFit: "cover", borderRadius: "0.75rem" }} />
    </div>
    <h3>Formal Leadership Education and Outdoor Adventures</h3>
    <p>I joined Outdoor Adventures the day I arrived at Boston College. I walked straight to the office and asked the director for a job. She hired me almost immediately, and through that program I met some of the best people I know. It was my first real community — something people had built with genuine care, and something I was fully bought into from the start.</p>
    <p>At the beginning of sophomore year, our lead route setter stepped down. I had only been setting for a year, but my climbing background gave me the confidence to step up. I was also the only returning route setter, which was both daunting and, in retrospect, a gift. It meant I got to build the team from scratch — teaching everything I knew and shaping a culture around safety and continuous self-improvement.</p>
    <p>At the same time, I was taking my first formal leadership courses. I was introduced to concepts like psychological safety, emotional intelligence, and influence tactics, and I had a live environment in which to practice all of them. Through that process I developed my leadership style deliberately: servant leadership, in the tradition of Pope Francis. That choice was not arbitrary. It grew directly from my Jesuit education at BC High and the habit of reflection that both the scouts and that school had instilled in me over the years.</p>
    <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
      <Image src={oa} alt="OA Photo" fill style={{ objectFit: "cover", borderRadius: "0.75rem" }} />
    </div>
    <h3>So What?</h3>
    <p>After one particularly stressful route-setting session, we sat down for our weekly debrief. One of the members began to voice his frustrations. The rest of us listened, responded honestly but kindly, and adjusted how we worked together. That small moment means more to me than almost anything else from that time. It started a pattern: we learned to give and receive criticism with respect, to push each other's work without damaging each other's confidence. We had become a real team — one where everyone brought their best because we had built the trust to be honest with one another.</p>
    <p>Leadership has shaped how I approach everything. It has taught me to look at any system — any team, any process, any room I walk into — and ask where I can make it better, not just for myself but for everyone in it. Existing within a system has never felt like enough. I want to improve it.</p>
    <br></br>
    <p>There have been so many great leaders in my life, and I cannot thank them enough. They have helped make me who I am today, and so I want to end by thanking them: Chuck Blanchette, Nick Kerpan, Dave Humphreys, Ron Gauld, Karl DeBisschop, Mike Jones, John Iler, Stephanie MacFarland, Ricky Savage, Allison Batey, Gabby Munger, and Frances Steelquist.</p>
  </main>
);
}
