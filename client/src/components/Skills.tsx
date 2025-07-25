import { useEffect, useState } from "react";
import { useIntersectionObserver } from "../hooks/use-intersection-observer";

const technicalSkills = [
  { name: "Python", percentage: 95 },
  { name: "Machine Learning", percentage: 90 },
  { name: "Deep Learning", percentage: 88 },
  { name: "TensorFlow/PyTorch", percentage: 85 },
  { name: "Natural Language Processing", percentage: 80 },
];

const cloudSkills = [
  { name: "AWS", percentage: 82 },
  { name: "Azure", percentage: 78 },
  { name: "Docker", percentage: 75 },
  { name: "Git/GitHub", percentage: 92 },
  { name: "Data Analysis", percentage: 87 },
];

export function Skills() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      const timer = setTimeout(() => setAnimateProgress(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isIntersecting]);

  const SkillBar = ({ skill, gradient }: { skill: typeof technicalSkills[0], gradient: string }) => (
    <div className="skill-item">
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-primary">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <div
          className={`progress-bar h-3 rounded-full bg-gradient-to-r ${gradient}`}
          style={{
            width: animateProgress ? `${skill.percentage}%` : "0%",
          }}
        />
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 section-enter ${isIntersecting ? "visible" : ""}`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Proficient in cutting-edge AI and Machine Learning technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-8">Programming & Frameworks</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  gradient="from-primary to-secondary"
                />
              ))}
            </div>
          </div>

          {/* Cloud & Tools */}
          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-secondary mb-8">Cloud & Development Tools</h3>
            <div className="space-y-6">
              {cloudSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  gradient="from-secondary to-accent"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
