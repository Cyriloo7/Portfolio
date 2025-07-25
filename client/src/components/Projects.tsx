import { useState } from "react";
import { useIntersectionObserver } from "../hooks/use-intersection-observer";

const projects = [
  {
    title: "Deepfake Detection System",
    description: "Advanced neural network model for detecting manipulated videos using computer vision techniques.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    tags: ["Python", "TensorFlow", "Computer Vision"],
    github: "#",
    demo: "#",
  },
  {
    title: "Collision Detection AI",
    description: "Real-time collision detection system for autonomous vehicles using deep learning algorithms.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    tags: ["PyTorch", "OpenCV", "Real-time AI"],
    github: "#",
    demo: "#",
  },
  {
    title: "NLP Sentiment Analyzer",
    description: "Advanced natural language processing model for sentiment analysis with 95% accuracy.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    tags: ["NLP", "BERT", "Transformers"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (hoveredProject !== index) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    e.currentTarget.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) rotateX(${y * 0.1}deg) rotateY(${x * 0.1}deg)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "translate(0, 0) rotateX(0) rotateY(0)";
    setHoveredProject(null);
  };

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 section-enter ${isIntersecting ? "visible" : ""}`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Innovative AI solutions that push the boundaries of technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass rounded-3xl p-6 hover-tilt magnetic transition-transform duration-300"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.github}
                  className="text-primary hover:text-secondary transition-colors"
                >
                  <i className="fab fa-github mr-2" />
                  View Code
                </a>
                <a
                  href={project.demo}
                  className="text-primary hover:text-secondary transition-colors"
                >
                  <i className="fas fa-external-link-alt mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Cyriloo7?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button glass rounded-full px-8 py-4 text-white hover:bg-primary/20 transition-all ripple"
          >
            <i className="fab fa-github mr-2" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
