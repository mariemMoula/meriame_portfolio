"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-pink-50/50 to-purple-100/30 border-t border-pink-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <h3 className="font-bold text-lg bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Mariem Moula
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Software Engineer passionate about building scalable solutions and
              efficient systems.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            <h3 className="font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              {["Skills", "Experience", "Projects", "Education", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-600 hover:text-pink-500 transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            <h3 className="font-semibold text-gray-800">Connect With Me</h3>
            <div className="flex gap-3">
              <motion.a
                href="https://github.com/mariemmoula"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-shadow"
              >
                <Github className="w-5 h-5 text-pink-600" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/mariemmoula"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-shadow"
              >
                <Linkedin className="w-5 h-5 text-pink-600" />
              </motion.a>
              <motion.a
                href="mailto:mariem.moula@fst.utm.tn"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-shadow"
              >
                <Mail className="w-5 h-5 text-pink-600" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-pink-200 text-center"
        >
          <p className="text-gray-600 text-sm flex items-center justify-center gap-1 flex-wrap">
            © {currentYear} Mariem Moula. Made with{" "}
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />{" "}
            using Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
