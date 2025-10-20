"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-pink-700">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Mariem Moula
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            A recent Computer Science graduate from the Faculty of Sciences of Tunis, specializing in Software Engineering. passionate about building{" "}
            <span className="font-semibold text-pink-600">
              scalable solutions
            </span>{" "}
            and efficient systems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600"
          >
            I specialize in full-stack development, DevOps, and data science,
            with experience in Rust, TypeScript, Java, Python, and modern web
            frameworks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="group"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/MoulaMariem.pdf";
                link.download = "MoulaMariem_Resume.pdf";
                link.click();
              }}
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 pt-4"
          >
            <motion.a
              href="https://github.com/mariemmoula"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Github className="w-6 h-6 text-pink-600" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/mariemmoula"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Linkedin className="w-6 h-6 text-pink-600" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur-2xl opacity-50"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/proImage.png"
                alt="Mariem Moula"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute top-10 -left-4 bg-white px-4 py-2 rounded-full shadow-lg"
          >
            <p className="text-sm font-semibold text-pink-600">
              🚀 Full Stack Dev
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute bottom-10 -right-4 bg-white px-4 py-2 rounded-full shadow-lg"
          >
            <p className="text-sm font-semibold text-purple-600">
              ⚙️ Passionate about AI
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
