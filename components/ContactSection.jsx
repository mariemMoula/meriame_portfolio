"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Send, CheckCircle, Loader2, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("loading");

  try {
    const response = await fetch("https://formspree.io/f/mrbyvplo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  } catch (error) {
    console.error("Form submission error:", error);
    setStatus("error");
    setTimeout(() => setStatus("idle"), 3000);
  }
};

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-b from-white to-pink-50/50"
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
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I'm currently looking for job opportunities! Feel free to
            reach out if you'd like to collaborate or just say hi 👋
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-6 h-6 text-pink-500" />
                  Send Me a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as
                  possible!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={status === "loading"}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={status === "loading"}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hi..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={status === "loading"}
                      rows={5}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : status === "success" ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200">
              <CardHeader>
                <CardTitle>Let's Connect!</CardTitle>
                <CardDescription>
                  I'm always excited to discuss new opportunities and
                  collaborations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-400 to-rose-400 flex items-center justify-center shadow-md flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Email
                      </h4>
                      <a
                        href="mailto:moula.meriame@gmail.com"
                        className="text-pink-600 hover:underline"
                      >
                        moula.meriame@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center shadow-md flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Location
                      </h4>
                      <p className="text-gray-600">Tunis, Tunisia</p>
                    </div>
                  </motion.div>
                </div>

                <div className="pt-6 border-t border-pink-200">
                  <h4 className="font-semibold text-gray-800 mb-4">
                    Currently Seeking
                  </h4>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-gray-700 mb-2">
                      🎯{" "}
                      <span className="font-medium">
                        Job Opportunities
                      </span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Looking for opportunities to apply my skills in full-stack
                      development, DevOps, and data science in a hands-on
                      environment where I can contribute to impactful projects
                      and grow through real-world experience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
