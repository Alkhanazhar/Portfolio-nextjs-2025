"use client";
import { motion } from "framer-motion";
import React from "react";
import Title from "./Title";
import { TextGenerateEffect } from "../components/components/ui/text-generate-effect";

// stohp stohp stohp stohp stohp stohp stohp

const AboutMe = () => {
  const words = ` I'm Arbaz Khan, a Full Stack Developer based in India. 
    I've been learning programming for over 3 years. After I started high school, I decided to pursue my passion for programming. 
    My favorite part of programming is the problem-solving aspect. 
    I've had the opportunity to work on several exciting projects during my learning journey, ranging from personal projects to collaborative ventures. 
    My core stack is React, Next.js, TypeScript, and Tailwind CSS. I am also familiar with Postgresql and Prisma. 
    I am always looking to learn new technologies. 
    
    I'm open to job opportunities where I can contribute, learn, and grow.`;
  return (
    <motion.section
      className="my-12 flex w-full scroll-mt-28 flex-col items-center py-12 relative"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
      viewport={{ amount: 0.1, once: true }}
    >
      <Title title="About Me" />
      <div className="max-w-2xl text-center leading-7 py-10 ">
        <div className="w-96 h-96 bg-blue-500/10 blur-3xl absolute top-1/2 left-1/2"></div>
        <TextGenerateEffect className={"text-white/50"} words={words} />
      </div>
    </motion.section>
  );
};

export default AboutMe;
