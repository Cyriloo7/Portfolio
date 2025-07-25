import React, { useState } from "react";
import { useIntersectionObserver } from "../hooks/use-intersection-observer";
// Certificates
import MLOpsFoundationsPdf from "../assets/certificates/MLOps Foundations.pdf";
import GenerativeAIllmPdf from "../assets/certificates/Generative AI with Large Language Models.pdf";
import BigDataNusImg from "../assets/certificates/Big Data Analysis using Deep Learning - nus.jpg";
import BigDataAwsImg from "../assets/certificates/Big Data Analysis using Deep Learning - aws.jpg";
import AzureAI900Pdf from "../assets/certificates/Azure AI900 Score Report.pdf";
import DataAnalyticsPythonPdf from "../assets/certificates/Data Analytics Real-World Projects in Python.pdf";
import AIGoogleDevelopersPdf from "../assets/certificates/Artificial Intelligence Powered by Google Developers.pdf";

// Define media item type
interface MediaItem {
  url: string;
  type: "image" | "pdf";
}

interface Cert {
  icon: string;
  title: string;
  date: string;
  issuer: string;
  description: string;
  color: string;
  file: string;
}

const certifications: Cert[] = [
  {
    icon: "fas fa-cogs",
    title: "MLOps Foundations",
    date: "Jul 2024",
    issuer: "iNeuron.ai",
    description:
      "Gained expertise in git, GitHub, Docker, CI/CD, DVC, and MLflow.",
    color: "text-yellow-400",
    file: MLOpsFoundationsPdf,
  },
  {
    icon: "fas fa-brain",
    title: "Generative AI with Large Language Models",
    date: "May 2024",
    issuer: "DeepLearning.AI, AWS",
    description:
      "Specialized in LLM training, fine‑tuning, PEFT configuration, and RLHF.",
    color: "text-purple-500",
    file: GenerativeAIllmPdf,
  },
  {
    icon: "fas fa-database",
    title: "Big Data Analysis Using Deep Learning (NUS)",
    date: "Dec 2023 – Jan 2024",
    issuer: "NUS",
    description:
      "Internship – Used T5‑small and Pegasus models to generate legal verdicts.",
    color: "text-teal-400",
    file: BigDataNusImg,
  },
  {
    icon: "fab fa-aws",
    title: "Big Data Analysis Using Deep Learning (AWS)",
    date: "Dec 2023 – Jan 2024",
    issuer: "AWS",
    description: "Optimized model performance by 20% using Amazon SageMaker.",
    color: "text-orange-500",
    file: BigDataAwsImg,
  },
  {
    icon: "fab fa-microsoft",
    title: "Microsoft Azure Fundamentals",
    date: "May 2023",
    issuer: "Microsoft",
    description: "Comprehensive understanding of cloud computing concepts.",
    color: "text-blue-500",
    file: AzureAI900Pdf,
  },
  {
    icon: "fas fa-chart-line",
    title: "Data Analytics Real‑World Projects in Python",
    date: "Sept 2023",
    issuer: "Udemy",
    description:
      "Mastered data cleaning, manipulation, and visualization using Pandas, Seaborn, and Plotly.",
    color: "text-green-400",
    file: DataAnalyticsPythonPdf,
  },
  {
    icon: "fab fa-google",
    title: "Artificial Intelligence Powered by Google Developers",
    date: "Mar 2023 – Jul 2023",
    issuer: "Smart Bridge",
    description:
      "Practical experience in AI, cloud technologies, TensorFlow models, and NLP.",
    color: "text-red-500",
    file: AIGoogleDevelopersPdf,
  },
];

export function Certifications() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [modalData, setModalData] = useState<{
    url: string;
    type: string;
    open: boolean;
  }>({
    url: "",
    type: "",
    open: false,
  });

  const openModal = (url: string, type: string) =>
    setModalData({ url, type, open: true });
  const closeModal = () => setModalData({ url: "", type: "", open: false });

  return (
    <>
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
            <p className="text-xl text-gray-300">
              Professional certifications in AI and Machine Learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="glass rounded-3xl p-6 hover-tilt magnetic relative"
              >
                <div className="text-center mb-4">
                  <i className={`${cert.icon} text-4xl ${cert.color} mb-4`} />
                  <h3 className={`text-xl font-bold ${cert.color} mb-1`}>
                    {cert.title}
                  </h3>
                  <h5 className="text-sm text-gray-400 mb-2">{cert.date}</h5>
                  <p className="italic text-gray-300 mb-2">{cert.issuer}</p>
                  <p className="text-gray-300">{cert.description}</p>
                </div>

                {/* View button */}
                <button
                  onClick={() =>
                    openModal(
                      cert.file,
                      cert.file.toLowerCase().endsWith(".pdf") ? "pdf" : "image"
                    )
                  }
                  className="mt-4 text-sm underline"
                >
                  View Certificate
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalData.open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl overflow-auto max-h-full max-w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              ✕
            </button>
            {modalData.type === "image" ? (
              <img
                src={modalData.url}
                alt="Certificate Preview"
                className="max-h-[80vh]"
              />
            ) : (
              <iframe
                src={modalData.url}
                className="w-[80vw] h-[80vh]"
                title="Certificate Preview"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
