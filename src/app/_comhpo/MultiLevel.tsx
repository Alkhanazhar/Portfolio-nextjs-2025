"use client";
import { motion } from "framer-motion";
import React from "react";

const MultiLevel = () => {
  return (
    <div className="container-div">
      <div className=" p-2 max-w-[200px] max-h-[300px] bg-amber-600 origin-top-left overflow-hidden">
        <motion.h1
          animate={{ scaleX: [2, 1, 3, 8], opacity: [0, 1, 0.5, 1] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="text-3xl origin-top-left"
        >
          responsive ness ki es tesi sadsdssd
        </motion.h1>
      </div>
    </div>
  );
};

export default MultiLevel;
