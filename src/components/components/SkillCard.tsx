"use client";

import { motion } from "framer-motion";

const SkillsCard = ({ icon, title, text }) => {
  return (
    <motion.article
      whileHover={{
        rotate: 3,
        scale: 1.1,
        zIndex: 1000,
        shadow: "4rem 4rem white",
      }}
      whileTap={{
        rotate: -3,
        scale: 0.9,
        zIndex: 1000,
        shadow: "4rem 4rem white",
      }}
      className="text-center backdrop-blur-xl border-white/10 border rounded-md p-3 "
    >
      <span className="">{icon}</span>
      <h4 className="mt-6 font-semibold md:font-bold">{title}</h4>
      <p className="mt-2 text-slate-500 hidden md:flex">{text}</p>
    </motion.article>
  );
};
export default SkillsCard;
