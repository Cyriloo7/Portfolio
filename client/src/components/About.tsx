import { useIntersectionObserver } from "../hooks/use-intersection-observer";
import mypic from "../assets/hero-bg.jpg";

export function About() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 section-enter ${isIntersecting ? "visible" : ""}`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI and ML enthusiast with a passion for creating intelligent
            solutions that make a real difference in the world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <img
              src={mypic}
              alt="Professional developer workspace"
              className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>

          <div className="animate-slide-in-right">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-6 text-primary">
                AI Engineer & Machine Learning Enthusiast
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pursued BTech in Computer Science at Vellore Institute of
                Technology (2020-2024). Skilled in developing and deploying
                machine learning models with experience in TensorFlow, PyTorch,
                AWS, and Azure.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-calendar-alt text-primary mr-3" />
                    <span>
                      <strong>Age:</strong> 22
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-graduation-cap text-primary mr-3" />
                    <span>
                      <strong>Degree:</strong> BTech CSE
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-primary mr-3" />
                    <span>
                      <strong>Location:</strong> Palakkad, Kerala
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-primary mr-3" />
                    <span>
                      <strong>Email:</strong> cyriljosecky@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-code text-primary mr-3" />
                    <span>
                      <strong>Focus:</strong> Deep Learning, NLP
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-cloud text-primary mr-3" />
                    <span>
                      <strong>Cloud:</strong> AWS, Azure
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mt-6 leading-relaxed">
                My projects include developing deepfake detection systems and
                real-time collision detection models. I have a strong interest
                in generative AI and its applications in healthcare and finance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
