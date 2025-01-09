"use client";
import { motion } from "framer-motion";
import React from "react";
import Title from "./Title";

const AboutMe = () => {
  return (
    <motion.section
      className="my-12 flex w-full scroll-mt-28 flex-col items-center py-12"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      viewport={{ amount: 0.5 }}
    >
      <Title title="About Me" />
      <div className="max-w-2xl text-center leading-7 py-10 ">
        <p className="mb-4 text-white/70">
          I&apos;m Azhar Khan, I&apos;m a front-end full stack developer from
          India. I&apos;ve been learning programming for over 3 years. After I
          started high school, I decided to pursue my passion for programming.
          My favorite part of programming is the problem-solving aspect. I love
          the feeling of finally figuring out a solution to a problem. I&apos;ve
          had the opportunity to work on several exciting projects during my
          learning journey, ranging from personal projects to collaborative
          ventures. My core stack is React, Next.js, TypeScript, and Tailwind
          CSS. I am also familiar with Postgresql and Prisma. I am always
          looking to learn new technologies.
        </p>
        <p>
          I&apos;m open to Job opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don&apos;t hesitate to contact me.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutMe;
