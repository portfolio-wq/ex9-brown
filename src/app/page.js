import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Bottombare from "@/components/sideCompo/Bottombare";
import Separate from "@/components/sideCompo/Separate";
import TopBare from "@/components/sideCompo/Topbare";

export default function Home() {
  return (
    <main className="">
      <TopBare />
      <Hero />
      <Separate name={"About"} />
      <About />
      <Separate name={"Projects"} />
      <Projects />
      <Separate name={"Experience"} />
      <Experience />
      <Separate name={"Contact"} />
      <Contact />
      <Bottombare />
    </main>
  );
}
