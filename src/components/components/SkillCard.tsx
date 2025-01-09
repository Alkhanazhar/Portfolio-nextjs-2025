"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const SkillsCard = ({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        // y: 100,
      }}
      whileHover={{
        rotate: 3,
        scale: 1.1,
        zIndex: 1000,
        shadow: "4rem 4rem white",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.05,
        },
      }}
      viewport={{
        amount: .3,
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
      <h4 className="mt-6 font-semibold md:font-bold ">{title}</h4>
      <p className="mt-2 text-slate-500 hidden md:flex text-sm">{text}</p>
    </motion.article>
  );
};
export default SkillsCard;
