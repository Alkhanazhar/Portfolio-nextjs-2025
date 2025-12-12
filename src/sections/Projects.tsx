"use client";
import image1 from "@/assets/images/project-1.jpg";
import image2 from "@/assets/images/project-2.jpg";
import image3 from "@/assets/images/project-3.jpg";
import image4 from "@/assets/images/project-4.jpg";
import image5 from "@/assets/images/project-5.jpg";
import Title from "./Title";
import { TimelineDemo } from "@/app/_comhpo/timelineComhponent";
import { motion } from "framer-motion";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const projects = [
  {
    name: "E-Tutorio - learning management System Co.",
    image: image1,
  },
  {
    name: "What a recruiter",
    image: image2,
  },
  {
    name: "Tarhaab-ecommerce",
    image: image3,
  },
  {
    name: "Quiz Mobile Game",
    image: image4,
  },
  {
    name: "Community Builder",
    image: image5,
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.1 }}
      className="my-12 overflow-hidden"
      id="projects"
    >
      <Title title="projects" />
      <TimelineDemo />
    </motion.div>
  );
};

export default Projects;
