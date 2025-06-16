import React from "react";
import Contact from "@/components/Contact";

const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="footer-copywright text-center md:text-left">
            <h3>
              Made with <span className="text-red-500 heart">❤️</span> @{" "}
              <span className="font-serif">Nikhil Raj</span>
            </h3>
          </div>

          <div className="text-center">
            <a
              href="https://drive.google.com/file/d/1Qo4JH5mDBOBcYAsn2w4kaVWFcmpseTTx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 underline hover:text-purple-300"
            >
              View My Resume
            </a>
            <h3 className="mt-1">Copyright © {year}</h3>
          </div>

          <Contact />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
