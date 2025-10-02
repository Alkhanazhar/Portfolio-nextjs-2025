"use client";

import Button from "@/app/_comhpo/Button";
import { motion } from "framer-motion";
import React from "react";

export function Hero() {
  return (
    <div className="flex items-center  justify-center w-full flex-col px-4 md:my-20 min-h-screen md:min-h-min -z-10 space-y-8 md:space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,

          duration: 0.5,
          bounce: 1000,
          mass: 100,
          damping: 30,
        }}
        className="text-sm md:text-xl border-white/10 px-3 py-2 backdrop-blur-xl bg-slate-900/20 rounded shadow-lg border flex items-center gap-3"
      >
        <div className="w-4 h-4 rounded-full bg-[#6abe5e]"></div>
        <span className="text-xs">Available for opportunities</span>
      </motion.div>
      <div className="overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, bounce: 1000, mass: -100, damping: 30 }}
          className=" bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-400 dark:to-white text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight"
        >
          Hello {"i'm"} Azhar Khan. <br />
          Full Stack Developer.
          <br />
          {/* Based in India */}
        </motion.h2>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          bounce: 1000,
          mass: -100,
          damping: 30,
        }}
        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center"
      >
        Crafting Seamless and Scalable Web and Mobile Applications with Modern
        Full-Stack Technologies, Including MERN, Next.js, and React Native.
      </motion.p>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          bounce: 1000,
          mass: -100,
          damping: 30,
        }}
        href="Resume.pdf"
        target="_blank"
        rel="noreferrer"
        download={true}
      >
        <Button>
          <span>Download resume</span>
        </Button>
      </motion.a>
    </div>
  );
}
