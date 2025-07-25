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
          <p className="text-xl text-gray-300">
            My journey in AI and Machine Learning
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full" />

          <div className="space-y-12">
            {/* Junior Python Developer Experience */}
            <div className="relative flex items-center justify-between">
              <div className="w-5/12 text-right animate-slide-in-left">
                <div className="glass rounded-2xl p-6 hover-tilt">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Junior Python Developer
                  </h3>
                  <p className="text-gray-300 mb-2">
                    Webfolks, Mannarkkad, India
                  </p>
                  <p className="text-sm text-gray-400">Feb 2025 - Present</p>
                  <p className="text-gray-300 mt-3">
                    Developed pipelines to preprocess, validate, and transform
                    large-scale AI/ML datasets for object detection,
                    segmentation, and keypoint labeling; built automation tools
                    and lightweight AI models to accelerate annotation review
                    and correction; integrated custom pretrained models into
                    CVAT and Label-Studio; and deployed Dockerized utilities to
                    boost labeling speed, accuracy, and consistency.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg" />
              <div className="w-5/12" />
            </div>

            {/* Research Internship Experience */}
            <div className="relative flex items-center justify-between">
              <div className="w-5/12" />
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-secondary rounded-full border-4 border-white shadow-lg" />
              <div className="w-5/12 animate-slide-in-right">
                <div className="glass rounded-2xl p-6 hover-tilt">
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    Research Intern
                  </h3>
                  <p className="text-gray-300 mb-2">
                    National University of Singapore (NUS), Singapore
                  </p>
                  <p className="text-sm text-gray-400">Feb 2024 - Aug 2024</p>
                  <p className="text-gray-300 mt-3">
                    Developed VR therapy using music and immersive environments,
                    enhancing stress reduction by 20%. Achieved a 30% relaxation
                    rate for patients using AI-driven approaches with multimodal
                    sensor data.
                  </p>
                </div>
              </div>
            </div>

            {/* Big Data Analysis Using Deep Learning */}
            <div className="relative flex items-center justify-between">
              <div className="w-5/12 text-right animate-slide-in-left">
                <div className="glass rounded-2xl p-6 hover-tilt">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Big Data Analysis Using Deep Learning Intern
                  </h3>
                  <p className="text-gray-300 mb-2">
                    National University of Singapore (NUS), Singapore
                  </p>
                  <p className="text-sm text-gray-400">Dec 2023 - Jan 2024</p>
                  <p className="text-gray-300 mt-3">
                    Utilized T5-small and Pegasus models to generate legal
                    verdicts efficiently. Focused on data processing, feature
                    engineering, and machine learning algorithms.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg" />
              <div className="w-5/12" />
            </div>

            {/* Research Internship Experience */}
            <div className="relative flex items-center justify-between">
              <div className="w-5/12" />
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-secondary rounded-full border-4 border-white shadow-lg" />
              <div className="w-5/12 animate-slide-in-right">
                <div className="glass rounded-2xl p-6 hover-tilt">
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    Artificial Intelligence Extern
                  </h3>
                  <p className="text-gray-300 mb-2">
                    Smart Bridge, Chennai, India
                  </p>
                  <p className="text-sm text-gray-400">Feb 2024 - Aug 2024</p>
                  <p className="text-gray-300 mt-3">
                    Built a ship classification model using VGG16 with transfer
                    learning techniques. Achieved 78.1% accuracy on the training
                    set and 76.67% on the test set.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="relative flex items-center justify-between">
              <div className="w-5/12 text-right animate-slide-in-left">
                <div className="glass rounded-2xl p-6 hover-tilt">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    BTech Computer Science
                  </h3>
                  <p className="text-gray-300 mb-2">
                    Vellore Institute of Technology
                  </p>
                  <p className="text-sm text-gray-400">2020 - 2024</p>
                  <p className="text-gray-300 mt-3">
                    BTech CSE Core with strong interest in AI/ML which focuses
                    on deep learning, computer vision, and natural language
                    processing.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg" />
              <div className="w-5/12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
