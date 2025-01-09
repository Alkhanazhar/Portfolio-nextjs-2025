"use client";
import React from "react";
import Title from "./Title";
import SkillsCard from "@/components/components/SkillCard";
import { MdAnimation, MdNextPlan, MdTsunami } from "react-icons/md";
import { FaDatabase, FaHtml5, FaJs, FaReact, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiFramer, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiSvgtrace, SiTypescript } from "react-icons/si";

const   Technologies = () => {
  interface Skill {
    title: string;
    icon: React.JSX.Element;
    text: string;
  }
  const skills: Skill[] = [
    {
      title: "HTML&CSS",
      icon: <FaHtml5 className="h-16 w-16  mx-auto text-blue-600" />,
      text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
    },
    {
      title: "Typescript",
      icon: <SiTypescript className="h-16 w-16  mx-auto text-blue-600" />,
      text: "Highly Typerscript, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
    },
    {
      title: "Javascript",
      icon: <FaJs className="h-16 w-16  mx-auto text-blue-600" />,
      text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.",
    },
    {
      title: "Node js",
      icon: <SiNodedotjs className="h-16 w-16  mx-auto text-blue-600" />,
      text: "Expertise in Node js, building interactive and dynamic web applications Server with a focus on seamless user interactions and functionality.",
    },
    {
      title: "React Js",
      icon: <FaReact className="h-16 w-16  mx-auto text-blue-600" />,
      text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
    },
    {
      title: "Mongo DB",
      icon: <SiMongodb className="h-16 w-16  mx-auto text-blue-600" />,
      text: "Comprehensive expertise in the MERN stack (MongoDB, Express.js, React, Node.js), creating robust full-stack applications for scalable and secure solutions.",
    },
    {
      title: "PostgreSQL",
      icon: <SiPostgresql className="h-16 w-16  mx-auto text-blue-600" />,
      text: "Comprehensive expertise in the MERN stack (MongoDB, Express.js, React, Node.js), creating robust full-stack applications for scalable and secure solutions.",
    },
    {
      title: "Next.js",
      icon: <SiNextdotjs className="h-16 w-16  mx-auto text-blue-600" />,
      text: "Specialized in Next.js for building high-performance server-side rendered applications with exceptional SEO and scalability.",
    },
    {
      title: "GSAP",
      icon: <SiSvgtrace className="h-16 w-16  mx-auto text-blue-600" />,
      text: "Proficient in GSAP (GreenSock Animation Platform), delivering smooth and captivating animations to enhance user engagement and experience.",
    },
    {
      title: "Framer Motion",
      icon: <SiFramer className="h-16 w-16  mx-auto text-blue-600 " />,
      text: "Skilled in Framer Motion, integrating fluid and expressive animations into React applications to create intuitive and delightful user interfaces.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      viewport={{ amount: 0.3 }}
      className="min-h-screen w-full relative  font-sans md:px-10  "
    >
      <div className="w-60 h-60 absolute top-1/2 left-1/2 bg-blue-600/30 blur-3xl"></div>
      <Title title={"Technologie's"} />
      <div className="max-w-7xl mx-auto px-8 ">
        <motion.div
          transition={{ staggerChildren: 1 }}
          className=" py-16 grid grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill: Skill, index) => {
            return <SkillsCard key={index} {...skill} />;
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Technologies;
