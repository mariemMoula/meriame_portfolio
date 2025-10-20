"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Fullstack Intern",
    company: "Guepard",
    period: "February 2025 - August 2025",
    location: "Tunisia",
    description: [
      "Contributed to CLI development in Rust with authentication management using RBAC",
      "Designed and implemented Lambda functions for PAT lifecycle management",
      "Enhanced authentication layer to integrate PAT authorization with RBAC policies",
      "Implemented schema extraction feature as production-ready solution",
      "Developed Docker image to validate preconditions for schema extraction",
    ],
    technologies: [
      "Rust",
      "AWS Lambda",
      "Docker",
      "Nomad",
      "Supabase",
      "RBAC",
      "React",
      "Tailwind",
      "Next.js",
    ],
    color: "from-pink-400 to-rose-400",
  },
  {
    role: "Data Science Intern",
    company: "Tabaani",
    period: "June 2024 - August 2024",
    location: "Tunisia",
    description: [
      "Leveraged YouTube’s API to extract relevant travel vlogs based on user-input destinations.",
      "Integrated DeepGram (speech-to-text API) to automatically transcribe vlog audio into clean text data.",
      "Applied Natural Language Processing (NLP) and Named Entity Recognition (NER) to extract essential information from transcripts, including cities, activities, categories, durations, and budgets, enabling structured travel data generation.",
      "Conducted data analysis and visualization to explore activity distributions across countries, cities, budgets, and traveler types, providing meaningful insights for personalized travel planning.",
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Pandas",
      "Huggingface",
      "Deepgram",
      "NLTK",
    ],
    color: "from-purple-400 to-pink-400",
  },
  {
    role: "Web Developer Intern",
    company: "Karriery",
    period: "June 2023 - August 2023",
    location: "Tunisia",
    description: [
      "Built a Retrieval-Augmented Generation system for intelligent Q&A over technical documentation using LangChain, FAISS, Llama3, and Streamlit. Implemented semantic search with vector embeddings and local LLM inference for accurate, source-cited responses.",
      "Implemented secure and scalable APIs and supported web platform features with robust backend solutions",
    ],
    technologies: [
      "Spring Boot",
      "Java",
      "REST API",
      "PostgreSQL",
      "Git",
      "Postman",
    ],
    color: "from-rose-400 to-purple-400",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real-world experience building impactful solutions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 via-purple-300 to-rose-300 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative ${
                  index % 2 === 0 ? "md:pr-[50%]" : "md:pl-[50%] md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full border-4 border-white shadow-lg z-10"></div>

                <Card className="hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">
                          {exp.role}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-pink-600 font-semibold text-lg mb-3">
                          <Briefcase className="w-5 h-5" />
                          {exp.company}
                        </div>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <span className="text-pink-500 mt-1">▸</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-pink-100">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="default">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
