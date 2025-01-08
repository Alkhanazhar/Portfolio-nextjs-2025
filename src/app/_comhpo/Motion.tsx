"use client";
import React from "react";
import { motion } from "framer-motion";
const Motiondiv = () => {
  return (
    <div className="container-div">
      <motion.button
        animate={{ background: "red", scale: 2, padding: "0 1rem" }}
        whileTap={{ scale: 1.7 }}
        className="rounded"
      >
        hello world
      </motion.button>
    </div>
  );
};

export default Motiondiv;
