"use client";
import Services from "@/sections/Servicess";
import AboutMe from "../sections/Aboutme";
import ChatBtn from "../sections/ChatBtn";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import { Hero } from "../sections/Hero";
import Projects from "../sections/Projects";
import Technologies from "../sections/Technologies";

export default function Home() {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <div className="w-60 h-60 bg-blue-600 blur-3xl opacity-20 absolute top-10 left-1/4"></div>
      <div className="w-40 h-40 bg-pink-600/70 blur-3xl opacity-10 absolute top-60 right-0"></div>
      <Header />
      <Hero />
      <Technologies />
      <Services />
      <Projects />
      <AboutMe />
      <Footer />
      <ChatBtn />
    </div>
  );
}
