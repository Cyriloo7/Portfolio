import { ParticleBackground } from "./ParticleBackground";
import { useTypewriter } from "../hooks/use-typewriter";
import heroimg from "../assets/my-profile-img-2.jpg";

export function Hero() {
  const typewriterText = useTypewriter({
    texts: ["AI Engineer", "ML Engineer", "Data Scientist", "AI/ML Enthusiast"],
    typeSpeed: 100,
    deleteSpeed: 50,
    delayBetweenTexts: 2000,
  });

  const handleScrollDown = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Background Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"
        style={{ zIndex: 2 }}
      />

      {/* Background Image */}
      <img
        src="https://tse2.mm.bing.net/th/id/OIP.qSmTf5Qni6_L9l1cRpv35QHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="Modern AI technology workspace"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        style={{ zIndex: 0 }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="glass rounded-3xl p-12 animate-float">
          {/* Profile Image */}
          <img
            src={heroimg}
            alt="Professional developer"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-primary shadow-2xl"
          />

          <h1
            className="text-6xl font-bold mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Cyril Jose
            </span>
          </h1>

          <div
            className="text-2xl mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-gray-300">I'm a </span>
            <span className="typewriter text-primary font-semibold">
              {typewriterText}
            </span>
          </div>

          <p
            className="text-xl text-gray-300 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Passionate about leveraging machine learning to solve real-world
            problems with experience in deep learning, NLP, and data analytics.
          </p>

          <div
            className="flex justify-center space-x-6 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="#contact"
              className="glow-button glass rounded-full px-8 py-4 text-white hover:bg-primary/20 transition-all ripple"
            >
              <i className="fas fa-envelope mr-2" />
              Get In Touch
            </a>
            <a
              href="#projects"
              className="glow-button glass rounded-full px-8 py-4 text-white hover:bg-secondary/20 transition-all ripple"
            >
              <i className="fas fa-code mr-2" />
              View Work
            </a>
          </div>

          <div
            className="flex justify-center space-x-8 mt-12 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
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

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </button>
    </section>
  );
}
