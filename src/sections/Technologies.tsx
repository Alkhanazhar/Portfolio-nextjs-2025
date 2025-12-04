"use client";
import React from "react";
import Title from "./Title";
import SkillsCard from "@/components/components/SkillCard";
import { motion } from "framer-motion";

import {
  SiCss3,
  SiHtml5,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJs } from "react-icons/fa";

export interface Skill {
  title: string;
  icon: React.JSX.Element;
  text: string;
}

const skills: Skill[] = [
  {
    title: "TypeScript",
    icon: <SiTypescript className="h-16 w-16 mx-auto text-blue-600" />,
    text: "Strong experience with TypeScript, writing type-safe and maintainable code for scalable applications.",
  },
  {
    title: "JavaScript",
    icon: <FaJs className="h-16 w-16 mx-auto text-yellow-500" />,
    text: "Building dynamic, interactive web applications with modern ES6+ JavaScript.",
  },
  {
    title: "React.js",
    icon: <SiReact className="h-16 w-16 mx-auto text-blue-500" />,
    text: "Creating fast, responsive, and component-based UIs using React and modern frontend patterns.",
  },
  {
    title: "Next.js",
    icon: (
      <SiNextdotjs className="h-16 w-16 mx-auto text-black dark:text-white" />
    ),
    text: "Building powerful, SEO-friendly full-stack applications using Next.js with SSR & API routes.",
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="h-16 w-16 mx-auto text-blue-400" />,
    text: "Styling modern, responsive UIs with utility-first Tailwind CSS.",
  },
  {
    title: "Redux Toolkit",
    icon: <SiRedux className="h-16 w-16 mx-auto text-purple-600" />,
    text: "Global state management using Redux Toolkit for clean and scalable architecture.",
  },
  {
    title: "HTML",
    icon: <SiHtml5 className="h-16 w-16 mx-auto text-orange-500" />,
    text: "Building semantic, accessible, and structured layouts using HTML5.",
  },
  {
    title: "CSS",
    icon: <SiCss3 className="h-16 w-16 mx-auto text-blue-600" />,
    text: "Crafting responsive layouts & animations using CSS, Flexbox, and Grid.",
  },
  {
    title: "Node.js",
    icon: <SiNodedotjs className="h-16 w-16 mx-auto text-green-600" />,
    text: "Developing scalable backend services and REST APIs using Node.js & Express.",
  },
  {
    title: "MongoDB",
    icon: <SiMongodb className="h-16 w-16 mx-auto text-green-500" />,
    text: "Designing and optimizing NoSQL schemas for MERN applications.",
  },
  {
    title: "MySQL / PostgreSQL",
    icon: <SiMysql className="h-16 w-16 mx-auto text-blue-600" />,
    text: "Working with relational databases, queries, joins, indexing, and schemas.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, ease: "easeOut" },
  },
};

const Technologies = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ amount: 0.2 }}
      id="skills"
      className="min-h-screen w-full relative font-sans md:px-10"
    >
      {/* Background Glow */}
      <div className="w-72 h-72 absolute top-1/3 left-1/2 -translate-x-1/2 bg-blue-600/20 dark:bg-blue-400/10 blur-3xl rounded-full"></div>

      <Title title="Technologies" />

      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4 }}
          className="py-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <SkillsCard key={index} {...skill} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Technologies;
