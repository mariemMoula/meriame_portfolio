"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";

const education = [
  {
    degree: "Engineering Degree in Computer Science",
    institution: "Faculty of Science of Tunis (FST)",
    period: "2022 - Present",
    description:
      "Comprehensive engineering program focusing on advanced computer science concepts and practical applications.",
    courses: [
      "Statistics",
      "Object-Oriented Programming",
      "Algorithms and Data Structures",
      "Operating Systems",
      "Databases",
      "Software Conception",
      "Mathematical Foundations",
    ],
    icon: "🎓",
  },
  {
    degree: "Integrated Preparatory Cycle for Engineering Studies",
    institution: "Faculty of Science of Tunis (FST)",
    period: "2020 - 2022",
    description:
      "Intensive two-year preparatory program providing strong foundations in mathematics, physics, and engineering fundamentals.",
    courses: [
      "Advanced Mathematics",
      "Physics",
      "Computer Science Fundamentals",
      "Engineering Principles",
    ],
    icon: "📚",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 bg-white">
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
              Education
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Academic foundation building technical excellence
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="hover:shadow-2xl transition-all duration-300 border-pink-100">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center shadow-lg text-3xl flex-shrink-0">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        {edu.degree}
                      </CardTitle>
                      <div className="flex flex-col gap-2 text-gray-600">
                        <div className="flex items-center gap-2 font-semibold text-pink-600">
                          <GraduationCap className="w-5 h-5" />
                          {edu.institution}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    {edu.description}
                  </p>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-5 h-5 text-pink-500" />
                      <h4 className="font-semibold text-gray-800">
                        Relevant Courses:
                      </h4>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {edu.courses.map((course, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center gap-2 text-sm text-gray-700 bg-pink-50 px-3 py-2 rounded-lg hover:bg-pink-100 transition-colors"
                        >
                          <span className="text-pink-500">▸</span>
                          {course}
                        </motion.div>
                      ))}
                    </div>
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
