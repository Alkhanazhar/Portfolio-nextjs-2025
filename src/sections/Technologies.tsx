"use client";
import React from "react";
import Title from "./Title";
import SkillsCard from "@/components/components/SkillCard";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SiDocker,
  SiFramer,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiSpring,
  SiSvgtrace,
  SiTypescript,
} from "react-icons/si";

const Technologies = () => {
  interface Skill {
    title: string;
    icon: React.JSX.Element;
    text: string;
  }
  const skills: Skill[] = [
   
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
      title: "Mongo DB",
      icon: <SiMongodb className="h-16 w-16  mx-auto text-blue-600" />,
      text: "Comprehensive expertise in the MERN stack (MongoDB, Express.js, React, Node.js), creating robust full-stack applications for scalable and secure solutions.",
    },
    {
      title: "PostgreSQL",
      icon: <SiPostgresql className="h-16 w-16  mx-auto text-blue-600" />,
      text: "Comprehensive expertise in the MERN stack (MongoDB, Express.js, React, Node.js), creating robust full-stack applications for scalable and secure solutions.",
    }, {
      title: "MySQL",
      icon: <SiMysql className="h-16 w-16 mx-auto text-blue-600" />,
      text: "Strong experience with MySQL, designing and managing relational databases with a focus on performance, data integrity, and complex query optimization for scalable applications.",
    }
   ,
    {
      title: "Java",
      icon: <SiJavascript className="h-16 w-16 mx-auto text-blue-600" />,
      text: "Proficient in Java for building object-oriented, secure, and high-performance backend systems.",
    },
    {
      title: "Spring Boot",
      icon: <SiSpring className="h-16 w-16 mx-auto text-blue-600" />,
      text: "Experienced with Spring Boot for developing production-grade RESTful APIs, microservices, and backend logic.",
    },
    {
      title: "NestJS",
      icon: <SiNestjs className="h-16 w-16 mx-auto text-blue-600" />,
      text: "Proficient in NestJS, leveraging its modular architecture and TypeScript support to build scalable, maintainable, and efficient server-side applications.",
    }
,
{
  title: "Microservices",
  icon: <SiDocker className="h-16 w-16 mx-auto text-blue-600" />, // or SiKubernetes
  text: "Skilled in designing and deploying microservices-based architectures, ensuring high scalability, independent deployment, and fault isolation using modern tools like Docker and RESTful communication patterns.",
}
,
   
  

  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      viewport={{ amount: 0.1 }}
      className="min-h-screen w-full relative  font-sans md:px-10  "
    >
      <div className="w-60 h-60 absolute top-1/2 left-1/2 bg-blue-600/20 blur-3xl"></div>
      <Title title={"Technologie's"} />
      <div className="max-w-7xl mx-auto px-8 ">
        <motion.div
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
            hidden: {
              transition: {
                staggerChildren: 0.2,
                staggerDirection: -1,
              },
            },
          }}
          whileInView="visible"
          initial="hidden"
          animate="hidden"
          viewport={{ amount: 0.5 }}
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
