import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Tools from "@/components/sections/Tools"; // <-- Tambahkan import ini
import Navbar from "@/components/Layout/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Tools />
    </main>
  );
}