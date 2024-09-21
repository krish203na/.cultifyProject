import React from "react";
import { motion } from "framer-motion";

const ImgSection = () => {
  return (
    <div className="w-full bg-white flex z-10 justify-evenly items-center md:flex-row gap-5 flex-col px-6 py-14">
      <motion.img
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        src="./image.png"
        className="md:w-[45%] flex-grow flex-shrink"
        alt=""
      />
      <motion.img
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        src="./image.png"
        className="md:w-[45%] flex-grow flex-shrink"
        alt=""
      />
    </div>
  );
};

export default ImgSection;
