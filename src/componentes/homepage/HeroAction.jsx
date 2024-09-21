import React from "react";
import { motion } from "framer-motion";

const HeroAction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
      className="h-screen w-full bg-gray-200 flex flex-col items-center justify-center space-y-4"
    >
      <h1 className="text-7xl font-bold">Title</h1>
      <p className="text-3xl text-gray-500 font-bold">Subtile</p>
      <div>
        <div className="space-x-4">
          <button className="bg-gray-300 items-center text-black hover:text-white border border-black px-4 py-1 rounded-lg hover:bg-[#27272a] duration-300">
            button
          </button>
          <button className="hover:bg-gray-300 hover:text-black text-white border border-black px-4 py-1 rounded-lg bg-[#27272a] duration-300">
            button
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroAction;
