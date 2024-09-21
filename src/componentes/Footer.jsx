import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ y: 300 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1, type: "spring" }}
      className="w-full h-full leading-8 flex flex-wrap md:bg-white bg-black md:text-black text-white justify-between md:px-20 px-10 py-14"
    >
      <div className="md:w-[25%] w-[100%] text-center md:text-start md:mb-0 mb-6">
        <div className="ml-2 text-xl font-bold mb-4 ">
          <i className="fa-brands fa-figma text-4xl font-bold"></i>
        </div>
        <div className="flex gap-4 text-4xl justify-center md:justify-start">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>
      </div>
      <div className="md:w-[25%] w-[45%]">
        <ul>
          <li className="text-xl md:text-black text-white font-semibold mb-4">
            Use cases
          </li>
          <li>UI Design</li>
          <li>UX design</li>
          <li>Wireframing</li>
          <li>Diagramming</li>
          <li>Brainstorming</li>
          <li>Online whiteboard</li>
          <li>Team collaboration</li>
        </ul>
      </div>
      <div className="md:w-[25%] w-[45%]">
        <ul>
          <li className="text-xl md:text-black text-white font-semibold mb-4">
            Explore
          </li>
          <li>Design</li>
          <li>Prototyping</li>
          <li>Development features</li>
          <li>Design systems</li>
          <li>Collaboration features</li>
          <li>Design process</li>
          <li>FigJam</li>
        </ul>
      </div>
      <div className="md:w-[25%] w-[45%]">
        <ul>
          <li className="text-xl md:text-black text-white font-semibold mb-4">
            Resources
          </li>
          <li>Blog</li>
          <li>Best practices</li>
          <li>Colors</li>
          <li>Color wheel</li>
          <li>Support</li>
          <li>Developers</li>
          <li>Resource library</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Footer;
