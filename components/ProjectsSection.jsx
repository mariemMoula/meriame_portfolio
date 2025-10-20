"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "RAG-Based Documentation Assistant",
    description:
      "Built a Retrieval-Augmented Generation system for intelligent Q&A over technical documentation. Implemented semantic search with vector embeddings and local LLM inference for accurate, source-cited responses.",
    technologies: [
      "LangChain",
      "FAISS",
      "Llama3",
      "Streamlit",
      "Python",
      "Vector Embeddings",
    ],
    highlights: [
      "Semantic search with vector embeddings",
      "Local LLM inference with Llama3",
      "Source-cited responses",
      "Interactive Streamlit UI",
    ],
    color: "from-pink-400 to-rose-400",
  },
  {
    title: "DevOps Pipeline for Spring Boot",
    description:
      "Comprehensive DevOps pipeline for Spring Boot application with containerization, monitoring, and automated deployment on AWS EKS using Terraform.",
    technologies: [
      "Docker",
      "Kubernetes",
      "AWS EKS",
      "Terraform",
      "Jenkins",
      "Prometheus",
      "Grafana",
      "SonarQube",
    ],
    highlights: [
      "Multi-container orchestration with Docker Compose",
      "Automated deployment on AWS EKS",
      "Monitoring with Prometheus & Grafana",
      "CI/CD with Jenkins automation",
    ],
    color: "from-purple-400 to-pink-400",
  },
  {
    title: "Authenticated MCP Server",
    description:
      "TypeScript-based Model Context Protocol server featuring passwordless authentication via Stytch, PostgreSQL with Prisma ORM, and AI-powered user generation using Google Gemini.",
    technologies: [
      "TypeScript",
      "Stytch",
      "PostgreSQL",
      "Prisma",
      "Express.js",
      "JWT",
      "Google Gemini",
      "Zod",
    ],
    highlights: [
      "Passwordless authentication with Stytch",
      "Comprehensive security with JWT & RBAC",
      "AI-powered user generation",
      "Interactive CLI with Inquirer.js",
    ],
    color: "from-rose-400 to-purple-400",
  },
  {
    title: "Housing Price Analysis",
    description:
      "Performed exploratory data analysis on housing dataset with correlation analysis and regression modeling to identify key variables impacting housing prices.",
    technologies: [
      "Python",
      "R",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "Statistical Analysis",
    ],
    highlights: [
      "Comprehensive EDA and visualization",
      "Regression modeling",
      "Addressed statistical biases",
      "Stratified analysis approach",
    ],
    color: "from-pink-400 to-purple-400",
  },
  {
    title: "Scolarity Management System",
    description:
      "Spring Boot web application streamlining educational institution administration with robust authentication, authorization, and comprehensive course management.",
    technologies: ["Spring Boot", "Java", "Maven", "MySQL", "Spring Security"],
    highlights: [
      "User role-based access control",
      "Course creation and enrollment",
      "Secure authentication system",
      "Scalable architecture",
    ],
    color: "from-purple-400 to-rose-400",
  },
  {
    title: "Power BI Dashboard",
    description:
      "Designed interactive dashboards with KPI visualizations to provide actionable insights and enhance data-driven decision-making.",
    technologies: [
      "Power BI",
      "Data Modeling",
      "DAX",
      "SQL",
      "Data Visualization",
    ],
    highlights: [
      "Pre-processed and cleaned datasets",
      "Established table relationships",
      "Interactive visualizations",
      "Actionable KPI insights",
    ],
    color: "from-rose-400 to-pink-400",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-b from-pink-50/30 to-white"
    >
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
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of innovative solutions and technical implementations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-2xl">🚀</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-pink-600 mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span className="text-pink-500 mt-0.5">✦</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-pink-100">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="default" className="text-xs">
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
    </section>
  );
}
