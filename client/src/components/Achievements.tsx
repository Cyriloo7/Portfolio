import { useIntersectionObserver } from "../hooks/use-intersection-observer";
import { useCounter } from "../hooks/use-counter";

const stats = [
  { icon: "fas fa-award", value: 7, label: "Certifications", color: "text-primary" },
  { icon: "fas fa-trophy", value: 3, label: "Achievements", color: "text-secondary" },
  { icon: "fab fa-github", value: 16, label: "Repositories", color: "text-accent" },
  { icon: "fas fa-graduation-cap", value: 4, label: "Years Education", color: "text-primary" },
];

const achievements = [
  {
    icon: "fas fa-medal",
    title: "Academic Excellence",
    description: "Maintained consistently high grades throughout BTech program with focus on AI/ML coursework.",
    color: "text-primary",
  },
  {
    icon: "fas fa-code-branch",
    title: "Open Source Contributor",
    description: "Active contributor to machine learning projects on GitHub with multiple repositories and collaborations.",
    color: "text-secondary",
  },
  {
    icon: "fas fa-users",
    title: "Community Volunteer",
    description: "Volunteered in tech community events and mentored junior students in AI/ML concepts.",
    color: "text-accent",
  },
];

export function Achievements() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      id="achievements"
      ref={ref}
      className={`py-20 section-enter ${isIntersecting ? "visible" : ""}`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-300">Recognition and contributions to the AI community</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => {
            const count = useCounter({
              end: stat.value,
              duration: 2000,
              startCounting: isIntersecting,
            });

            return (
              <div key={stat.label} className="glass rounded-3xl p-8 text-center hover-tilt">
                <i className={`${stat.icon} text-4xl ${stat.color} mb-4`} />
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{count}</div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div key={achievement.title} className="glass rounded-3xl p-6 hover-tilt">
              <div className="flex items-center mb-4">
                <i className={`${achievement.icon} text-2xl ${achievement.color} mr-4`} />
                <h3 className="text-xl font-bold">{achievement.title}</h3>
              </div>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
