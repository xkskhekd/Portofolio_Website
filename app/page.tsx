import Navbar from "@/components/Navbar";
import DotNav from "@/components/DotNav";
import Hero from "@/sections/Hero";
import Approach from "@/sections/Approach";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import About from "@/sections/About";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <DotNav />
      <main>
        <Hero />
        {/* <Approach /> */}
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-muted text-sm font-body">
            © 2026 Fathi Annaqi · Built with Next.js & Tailwind
          </p>
          <p className="text-muted text-xs font-mono">
            Electrical Engineer + Machine Learning
          </p>
        </div>
      </footer>
    </>
  );
}