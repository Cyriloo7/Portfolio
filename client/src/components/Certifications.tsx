import { useIntersectionObserver } from "../hooks/use-intersection-observer";

const certifications = [
  {
    icon: "fab fa-aws",
    title: "AWS Certified",
    description: "Machine Learning Specialty",
    color: "text-orange-500",
  },
  {
    icon: "fab fa-microsoft",
    title: "Azure AI Engineer",
    description: "Associate Certification",
    color: "text-blue-500",
  },
  {
    icon: "fab fa-google",
    title: "TensorFlow Developer",
    description: "Professional Certificate",
    color: "text-red-500",
  },
  {
    icon: "fas fa-brain",
    title: "Deep Learning",
    description: "Specialization Certificate",
    color: "text-purple-500",
  },
  {
    icon: "fas fa-chart-line",
    title: "Data Science",
    description: "Professional Certificate",
    color: "text-green-500",
  },
  {
    icon: "fas fa-robot",
    title: "AI Ethics",
    description: "Certification Course",
    color: "text-cyan-500",
  },
];

export function Certifications() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      id="certifications"
      ref={ref}
      className={`py-20 section-enter ${isIntersecting ? "visible" : ""}`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-xl text-gray-300">Professional certifications in AI and Machine Learning</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div key={cert.title} className="glass rounded-3xl p-6 hover-tilt magnetic">
              <div className="text-center mb-4">
                <i className={`${cert.icon} text-4xl ${cert.color} mb-4`} />
                <h3 className="text-xl font-bold text-primary mb-2">{cert.title}</h3>
                <p className="text-gray-300">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
