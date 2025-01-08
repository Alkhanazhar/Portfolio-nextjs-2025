"use client";
import { motion } from "framer-motion";
import React from "react";

const Initial = () => {
  return (
    <div className="container-div flex-col">
      initial state is use when you using external css file we pass the initial
      state object
      <motion.button
        initial={{ scale: 0.4 }}
        animate={{ scale: 1, background: "red", padding: "1rem",translate:"0 1rem" }}
      >
        initial state
      </motion.button>
    </div>
  );
};

export default Initial;
