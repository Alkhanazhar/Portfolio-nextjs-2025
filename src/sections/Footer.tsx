import Button from "@/app/_comhpo/Button";
import { FaArrowRight, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="p-10 z-10 ">
          <div className="rounded-xl shadow-xl p-4 md:p-12 text-xl bg-blue-700/40 backdrop-blur-lg md:max-w-2xl lg:max-w-7xl mx-auto  flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-200">
                Let’s Connect and Create Something Amazing!
              </h2>
              <p className="text-sm text-gray-400">
                Reach out to me for collaborations, inquiries, or just to say
                hello.
              </p>
            </div>

            <Button>
              <span className="text-sm"> Contact Me</span>
              <FaArrowRight size={16} stroke="10" />
            </Button>
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
