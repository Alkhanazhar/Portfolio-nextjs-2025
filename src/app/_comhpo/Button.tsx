"use client";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <motion.button
      whileTap={{ scale: 1.2 }}
      whileHover={{ scale: 0.9 }}
      className="flex  items-center animate-bounce  gap-2 z-10 px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
    >
      {children}
    </motion.button>
  );
};

export default Button;
