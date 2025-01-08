import Button from "@/app/_comhpo/Button";
import { FC } from "react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  return (
    <header
      className="py-4 md:py-6  px-4 sm:px-6 md:px-8 xl:px-0 "
      style={{ zIndex: 1000 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between z-10">
        <div className="font-bold text-xl md:text-3xl">Azhar Khan</div>
        <ul className="md:flex items-center gap-4 hidden z-10">
          {navItems.map((item) => {
            return <li key={item.label}>{item.label}</li>;
          })}
        </ul>
        <Button >
          <span>Resume</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
