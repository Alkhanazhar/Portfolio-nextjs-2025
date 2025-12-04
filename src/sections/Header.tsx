"use client";

import { useEffect, useState, useRef } from "react";
import { animate } from "framer-motion";
import Button from "@/app/_comhpo/Button";

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Works", id: "projects" },
  { label: "Testimonials", id: "testimonials" },
  { label: "FAQs", id: "faqs" },
  { label: "Contact", id: "contact" },
];

const smoothScrollTo = (id: string) => {
  const target = document.getElementById(id);
  if (!target) return;

  const targetPosition = target.offsetTop;
  const startPosition = window.scrollY || window.pageYOffset;

  animate(startPosition, targetPosition, {
    duration: 0.8,
    ease: "easeInOut",
    onUpdate(value) {
      window.scrollTo(0, value);
    },
  });
};

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
            // Scrolling up or near top, show header
            setShowHeader(true);
          } else {
            // Scrolling down, hide header
            setShowHeader(false);
          }
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-blue-700/15 backdrop-blur transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="py-4 md:py-6 px-4 sm:px-6 md:px-8 xl:px-0 max-w-7xl mx-auto flex items-center justify-between">
        <div className="font-bold text-xl md:text-3xl cursor-pointer">
          Azhar Khan
        </div>
        <ul className="md:flex items-center gap-4 hidden">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => smoothScrollTo(item.id)}
                className="text-white hover:text-blue-400 transition"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <a href="Resume.pdf" target="_blank" rel="noreferrer" download>
          <Button>
            <span>Resume</span>
          </Button>
        </a>
      </div>
    </header>
  );
}
