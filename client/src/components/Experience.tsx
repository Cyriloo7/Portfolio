import { useIntersectionObserver } from "../hooks/use-intersection-observer";

export function Experience() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-20 section-enter ${isIntersecting ? "visible" : ""}`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300">My journey in AI and Machine Learning</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full" />

          <div className="space-y-12">
            {/* Education */}
            <div className="relative flex items-center justify-between">
              <div className="w-5/12 text-right animate-slide-in-left">
                <div className="glass rounded-2xl p-6 hover-tilt">
                  <h3 className="text-xl font-bold text-primary mb-2">BTech Computer Science</h3>
                  <p className="text-gray-300 mb-2">Vellore Institute of Technology</p>
                  <p className="text-sm text-gray-400">2020 - 2024</p>
                  <p className="text-gray-300 mt-3">
                    Specialized in AI/ML with focus on deep learning and natural language processing.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg" />
              <div className="w-5/12" />
            </div>

            {/* Projects Experience */}
            <div className="relative flex items-center justify-between">
              <div className="w-5/12" />
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-secondary rounded-full border-4 border-white shadow-lg" />
              <div className="w-5/12 animate-slide-in-right">
                <div className="glass rounded-2xl p-6 hover-tilt">
                  <h3 className="text-xl font-bold text-secondary mb-2">AI/ML Project Developer</h3>
                  <p className="text-gray-300 mb-2">Independent Projects</p>
                  <p className="text-sm text-gray-400">2022 - Present</p>
                  <p className="text-gray-300 mt-3">
                    Developed deepfake detection systems and collision detection models for autonomous vehicles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
