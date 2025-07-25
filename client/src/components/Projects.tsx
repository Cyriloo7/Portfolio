import { useState } from "react";
import { useIntersectionObserver } from "../hooks/use-intersection-observer";
import deepfaceimg from "../assets/portfolio/deepfake-detection.jpg";
import collisionimg from "../assets/portfolio/collision-detection.jpg";
import fakenewsimg from "../assets/portfolio/fake-news-classifier.jpg";
import stressimg from "../assets/portfolio/stress-therapy.jpg";
import genaiimg from "../assets/portfolio/gen-ai-assignment.jpg";
import firstmlopsimg from "../assets/portfolio/mlops-project.jpg";

// Define a list of accent colors for each project
const colorPalette = [
  { primary: "#ff6b6b", secondary: "#ff8787" }, // red hues
  { primary: "#51cf66", secondary: "#69db7c" }, // green hues
  { primary: "#339af0", secondary: "#74c0fc" }, // blue hues
  { primary: "#fcc419", secondary: "#ffe066" }, // yellow hues
  { primary: "#845ef7", secondary: "#b197fc" }, // purple hues
  { primary: "#ff922b", secondary: "#ffb142" }, // orange hues
];

const projects = [
  {
    title: "Stress Therapy with Music and Images device",
    description:
      "A research project at NUS focusing on music and images for stress therapy.",
    image: stressimg,
    tags: ["NLP", "Gen AI", "Transformers"],
    github: "https://github.com/Cyriloo7/Stress-Therapy-using-Music-and-Images",
  },
  {
    title: "Gen AI Assistant",
    description:
      "Developed a Retrieval-Augmented Generation (RAG) model for QA bots and an interactive interface.",
    image: genaiimg,
    tags: ["NLP", "Gen AI", "Transformers"],
    github:
      "https://github.com/Cyriloo7/Gen-AI-Engineer-Machine-Learning-Engineer-Assignment",
  },
  {
    title: "Deepfake Detection System",
    description:
      "Advanced neural network model for detecting manipulated videos using computer vision techniques.",
    image: deepfaceimg,
    tags: ["Python", "TensorFlow", "Computer Vision"],
    github:
      "https://github.com/Cyriloo7/DeepFake-Detection-Using-Vision-and-Wav2Vec2-Transformer-Models",
  },
  {
    title: "Collision Detection AI",
    description:
      "Real-time collision detection system for autonomous vehicles using deep learning algorithms.",
    image: collisionimg,
    tags: ["PyTorch", "OpenCV", "Real-time AI"],
    github: "https://github.com/Cyriloo7/Collision-Detection-Using-Yolov7",
  },
  {
    title: "Fake News Analyzer",
    description:
      "Advanced natural language processing model for sentiment analysis with 95% accuracy.",
    image: fakenewsimg,
    tags: ["NLP", "BERT", "Transformers"],
    github: "https://github.com/gokul-h/fake-news-detector",
  },
  {
    title: "First MLOps Project",
    description:
      "Implemented CI/CD pipelines for machine learning models, ensuring smooth deployment and monitoring.",
    image: firstmlopsimg,
    tags: ["MLOps", "CI/CD", "Docker", "git", "DVC", "mlruns"],
    github: "https://github.com/Cyriloo7/First_MLOps_Project",
  },
];

export function Projects() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    if (hoveredProject !== index) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    e.currentTarget.style.transform = `translate(${x * 0.1}px, ${
      y * 0.1
    }px) rotateX(${y * 0.1}deg) rotateY(${x * 0.1}deg)`;
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
          {projects.map((project, index) => {
            const { primary, secondary } =
              colorPalette[index % colorPalette.length];
            return (
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
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: primary }}
                >
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full"
                      style={{
                        color: primary,
                        backgroundColor: "#ffffff10",
                        border: `1px solid ${primary}`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    className="transition-colors text-primary"
                  >
                    <i className="fab fa-github mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Cyriloo7?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button glass rounded-full px-8 py-4 text-white hover:bg-primary/20 transition-all ripple"
            style={{
              backgroundColor: "#4c6ef5",
              boxShadow: "0 4px 10px #4c6ef533",
            }}
          >
            <i className="fab fa-github mr-2" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
