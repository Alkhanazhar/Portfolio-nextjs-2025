"use client";
import React from "react";
import Title from "./Title";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaPaintBrush,
  FaRocket,
  FaGlobe,
} from "react-icons/fa";

export interface Service {
  title: string;
  icon: React.JSX.Element;
  text: string;
}

const services: Service[] = [
  {
    title: "Website Development",
    icon: <FaLaptopCode className="h-16 w-16 mx-auto text-blue-600" />,
    text: "High-quality, responsive, and fast websites built with modern technologies like Next.js and React.",
  },
  {
    title: "Web App Development",
    icon: <FaGlobe className="h-16 w-16 mx-auto text-green-600" />,
    text: "Building scalable, secure, and feature-rich web applications tailored to your business needs.",
  },
  {
    title: "Mobile App UI Development",
    icon: <FaMobileAlt className="h-16 w-16 mx-auto text-purple-600" />,
    text: "Creating clean, modern, and interactive UI for mobile apps using React Native and modern design patterns.",
  },
  {
    title: "Backend & API Development",
    icon: <FaServer className="h-16 w-16 mx-auto text-yellow-500" />,
    text: "Building robust REST APIs, authentication systems, and scalable server logic using Node.js.",
  },
  {
    title: "UI/UX Designing",
    icon: <FaPaintBrush className="h-16 w-16 mx-auto text-pink-500" />,
    text: "Designing intuitive, user-friendly interfaces focused on smooth experience and business conversion.",
  },
  {
    title: "SEO & Optimization",
    icon: <FaRocket className="h-16 w-16 mx-auto text-red-500" />,
    text: "Improving performance, SEO ranking, and loading speed to help your site reach more customers.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ amount: 0.2 }}
      id="services"
      className="min-h-screen md:py-20 py-10 w-full relative font-sans md:px-10"
    >
      {/* Background Glow */}
      <div className="w-72 h-72 absolute top-1/3 left-1/2 -translate-x-1/2 bg-blue-600/20 dark:bg-blue-400/10 blur-3xl rounded-full"></div>

      <Title title="Services" />

      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4 }}
          className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/10 dark:bg-black/20 rounded-xl border border-white/10 shadow-md backdrop-blur-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mt-4">
                {service.title}
              </h3>
              <p className="text-sm text-center mt-2 opacity-80">
                {service.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
