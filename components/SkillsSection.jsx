"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, Wrench, Globe, Brain } from "lucide-react";

const skills = {
  "Programming Languages": {
    icon: Code2,
    color: "from-pink-400 to-rose-400",
    items: ["Java", "Python", "JavaScript", "TypeScript", "Rust", "C/C++"],
  },
  "Frameworks & Libraries": {
    icon: Globe,
    color: "from-purple-400 to-pink-400",
    items: ["Spring Boot", "Express", "Next.js", "React"],
  },
  Databases: {
    icon: Database,
    color: "from-rose-400 to-pink-400",
    items: [
      "PostgreSQL",
      "Microsoft SQL Server",
      "MySQL",
      "Supabase",
      "Prisma",
    ],
  },
  "DevOps & Cloud": {
    icon: Cloud,
    color: "from-pink-400 to-purple-400",
    items: ["AWS", "Docker", "Jenkins", "Terraform", "Nomad"],
  },
  "Tools & Technologies": {
    icon: Wrench,
    color: "from-purple-400 to-rose-400",
    items: ["UML", "Power BI", "Stytch", "Streamlit", "HuggingFace"],
  },
  "AI & Data Science": {
    icon: Brain,
    color: "from-rose-400 to-purple-400",
    items: [
      "LangChain",
      "FAISS",
      "Llama3",
      "Machine Learning",
      "Data Analysis",
    ],
  },
};

const languages = [
  { name: "English", level: "Advanced", proficiency: 90 },
  { name: "French", level: "Advanced", proficiency: 90 },
  { name: "Arabic", level: "Native", proficiency: 100 },
];

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-b from-white to-pink-50/30"
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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A diverse tech stack built through hands-on experience and
            continuous learning
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {Object.entries(skills).map(([category, data]) => {
            const IconComponent = data.icon;
            return (
              <motion.div key={category} variants={itemVariants}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${data.color} shadow-lg`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {data.items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="default"
                          className="cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Globe className="w-7 h-7 text-pink-500" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-lg text-gray-800">
                        {lang.name}
                      </h4>
                      <Badge variant="secondary">{lang.level}</Badge>
                    </div>
                    <div className="relative h-3 bg-white rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
