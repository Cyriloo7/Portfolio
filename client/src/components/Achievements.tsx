import { useIntersectionObserver } from "../hooks/use-intersection-observer";
import { useCounter } from "../hooks/use-counter";
import { useState } from "react";
import clubimg from "../assets/achievements/aiml-bionary-club-achievement.jpg";
import topPerformerImg from "../assets/achievements/ResoluteAI-Software-Private-Limitedachievement-1.jpg";
import graduationImg from "../assets/achievements/btech-graduation-achievement-2.jpg";

// Define media item type
interface MediaItem {
  url: string;
  type: "image" | "pdf";
}

// Extend Stat with optional media
interface Stat {
  icon: string;
  value: number;
  label: string;
  color: string;
  media?: MediaItem;
}

// Extend Achievement with optional media
interface AchievementItem {
  icon: string;
  title: string;
  description: string;
  color: string;
  media?: MediaItem;
}

const stats: Stat[] = [
  {
    icon: "fas fa-award",
    value: 7,
    label: "Certifications",
    color: "text-primary",
  },
  {
    icon: "fas fa-trophy",
    value: 3,
    label: "Achievements",
    color: "text-secondary",
  },
  {
    icon: "fab fa-github",
    value: 21,
    label: "Repositories",
    color: "text-accent",
    media: {
      url: "https://github.com/Cyriloo7?tab=repositories",
      type: "image",
    },
  },
  {
    icon: "fas fa-graduation-cap",
    value: 4,
    label: "Years Education",
    color: "text-primary",
    media: { url: graduationImg, type: "image" },
  },
];

const achievements: AchievementItem[] = [
  {
    icon: "fas fa-medal",
    title: "Top Performer in AI Solutioning",
    description:
      "Recognized as one of the top 6-15 performers out of 800+ applicants in the AI Solutioning assignment with ResoluteAI Software Private Limited.",
    color: "text-primary",
    media: { url: topPerformerImg, type: "image" },
  },
  {
    icon: "fas fa-code-branch",
    title: "Open Source Contributor",
    description:
      "Active contributor to machine learning projects on GitHub with multiple repositories and collaborations.",
    color: "text-secondary",
    media: {
      url: "https://github.com/Cyriloo7?tab=repositories",
      type: "image",
    },
  },
  {
    icon: "fas fa-graduation-cap",
    title: "B.Tech Graduation",
    description:
      "Proud to graduate from Vellore Institute of Technology (VIT) with a B.Tech in Computer Science and Engineering.",
    color: "text-accent",
    media: { url: graduationImg, type: "image" },
  },
  {
    icon: "fas fa-users",
    title: "AIML Member, Bionary Club, VIT Chennai",
    description:
      "Contributed to AI/ML initiatives at VIT's Bionary Club, collaborating with peers on innovative projects and workshops.",
    color: "text-accent",
    media: { url: clubimg, type: "image" },
  },
];

export function Achievements() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [modalData, setModalData] = useState<{
    url: string;
    type: string;
    open: boolean;
  }>({ url: "", type: "", open: false });

  const openModal = (url: string, type: string) =>
    setModalData({ url, type, open: true });
  const closeModal = () => setModalData({ url: "", type: "", open: false });

  return (
    <>
      <section
        id="achievements"
        ref={ref}
        className={`py-20 section-enter ${isIntersecting ? "visible" : ""}`}
      >
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Recognition and contributions to the AI community
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat) => {
              const count = useCounter({
                end: stat.value,
                duration: 2000,
                startCounting: isIntersecting,
              });
              return (
                <div
                  key={stat.label}
                  className="glass rounded-3xl p-8 text-center hover-tilt"
                >
                  <i className={`${stat.icon} text-4xl ${stat.color} mb-4`} />
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                    {count}
                  </div>
                  <p className="text-gray-300 mb-4">{stat.label}</p>
                  {stat.media && (
                    <button
                      onClick={() =>
                        stat.media!.url.startsWith("http")
                          ? window.open(stat.media!.url, "_blank", "noopener")
                          : openModal(stat.media!.url, stat.media!.type)
                      }
                      className="mt-2 text-sm underline"
                    >
                      View
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Achievements */}
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="glass rounded-3xl p-6 hover-tilt"
              >
                <div className="flex items-center mb-4">
                  <i
                    className={`${achievement.icon} text-2xl ${achievement.color} mr-4`}
                  />
                  <h3 className={`text-xl font-bold ${achievement.color}`}>
                    {achievement.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">{achievement.description}</p>
                {achievement.media && (
                  <button
                    onClick={() =>
                      achievement.media!.url.startsWith("http")
                        ? window.open(
                            achievement.media!.url,
                            "_blank",
                            "noopener"
                          )
                        : openModal(
                            achievement.media!.url,
                            achievement.media!.type
                          )
                    }
                    className="mt-2 text-sm underline"
                  >
                    View
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal overlay */}
      {modalData.open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div className="relative bg-white rounded-2xl overflow-auto max-h-full max-w-full p-4">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              ✕
            </button>
            {modalData.type === "image" ? (
              <img
                src={modalData.url}
                alt="Media Preview"
                className="max-h-[80vh]"
              />
            ) : (
              <iframe
                src={modalData.url}
                className="w-[80vw] h-[80vh]"
                title="Document Viewer"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
