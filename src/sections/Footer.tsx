import Button from "@/app/_comhpo/Button";
import { FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="p-4 z-10 ">
          <div className="rounded-xl shadow-xl px-4 md:px-12 py-4 md:py-40 text-xl bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] backdrop-blur-xl md:max-w-2xl lg:max-w-7xl mx-auto  flex flex-col gap-20 justify-between items-center">
            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-semibold text-gray-200">
                Let’s Connect and Create Something Amazing!
              </h2>
              <p className="text-sm text-gray-400">
                Reach out to me for collaborations, inquiries, or just to say
                hello.
              </p>
            </div>

            <a href="tel:+919109093125" className="flex items-center gap-2">
              <Button>
                <span className="text-sm"> Call Me</span>
                <FaPhone size={12} className="rotate-90" />
              </Button>
            </a>
          </div>
        </div>
        <div className="z-10 md:p-6 mt-4 px-4 py-20 border-t border-white/10 flex justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Azhar Khan. All Rights Reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/azhar-khan-72144133a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/AzharMern64493"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 w-60 h-60 bg-blue-400/10 -z-20 blur-3xl left-1/2"></div>
      </div>
    </div>
  );
};

export default Footer;
