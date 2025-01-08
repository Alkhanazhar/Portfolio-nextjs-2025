"use client";
import { motion } from "framer-motion";
import React from "react";

const Delay = () => {
  return (
    <div className="container-div">
      <motion.button
        className="rounded bg-red-500 px-4 py-2"
        animate={{ translateX: ["10rem", "-10rem"], translateY: [100, -200] }}
        transition={{
          delay: 1,
          repeatType: "reverse",
          repeat: Infinity,
          type: "spring",
          duration: 5,
        }}
      >
        delay
      </motion.button>
    </div>
  );
};

export default Delay;
