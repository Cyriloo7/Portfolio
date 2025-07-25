import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Achievements } from "../components/Achievements";
import { Certifications } from "../components/Certifications";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Certifications />
      <Contact />
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
            <p className="text-gray-300 mb-4">
              &copy; 2024 Cyril Jose. Crafted with passion for AI and beautiful design.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Cyriloo7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary transition-all hover:scale-125"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="https://linkedin.com/in/cyril07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary transition-all hover:scale-125"
              >
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
