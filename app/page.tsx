import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Tools from "@/components/sections/Tools";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer"; // <-- Tambahkan import ini
import Navbar from "@/components/Layout/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Tools />
      <About />
      <Footer /> {/* <-- Letakkan di sini, paling bawah */}
    </main>
  );
}