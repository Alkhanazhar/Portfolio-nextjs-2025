"use client";
import { motion } from "framer-motion";
import React from "react";
import Title from "./Title";
import { TextGenerateEffect } from "../components/components/ui/text-generate-effect";

// stohp stohp stohp stohp stohp stohp stohp

const AboutMe = () => {
  const words = `
I'm Azhar Khan, a Full Stack Developer from India with 3+ years of experience. 
I love solving problems and have built multiple projects using React, Next.js, TypeScript, and Tailwind CSS. 
I also have experience with PostgreSQL and Prisma. 
I'm always learning and open to opportunities where I can contribute and grow.
`;
  return (
    <motion.section
      id="about"
      className="md:py-40 flex w-full scroll-mt-28 flex-col items-center py-12 relative"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
      viewport={{ amount: 0.1, once: true }}
    >
      <Title title="About Me" />
      <div className="max-w-4xl mx-8 text-center !leading-relaxed py-10 ">
        <div className=" h-96 bg-blue-500/10 blur-3xl absolute top-1/2 left-1/2"></div>
        <TextGenerateEffect className={"text-white/50"} words={words} />
      </div>
    </motion.section>
  );
};

export default AboutMe;
