import React from "react";
import { motion } from "framer-motion";

const CardGridImage = () => {
  return (
    <div className="w-full h-full bg-white md:px-20 px-10 py-14">
      <motion.div
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h1 className="text-2xl font-semibold text-black">Heading</h1>
        <h1 className="text-2xl text-gray-500">subheading</h1>
      </motion.div>
      <div className="flex justify-between items-center mt-8 flex-wrap flex-grow flex-shrink gap-10">
        <GridImage />
        <GridImage />
        <GridImage />
        <GridImage />
        <GridImage />
        <GridImage />
      </div>
    </div>
  );
};

export default CardGridImage;

const GridImage = () => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: "spring" }}
      className="bg-white md:max-w-[45%] lg:max-w-[30%] px-7 py-7 border md:block flex flex-col items-center justify-start rounded-lg border-gray-300"
    >
      <img src="./image1.png" className="w-[70%] mb-4" alt="" />
      <h1 className="text-3xl font-semibold text-black mb-2">Title</h1>
      <p className="text-gray-500 text-lg">
        Body text for whatever you’d like to say. Add main takeaway points,
        quotes, anecdotes, or even a very very short story.
      </p>
    </motion.div>
  );
};

export { GridImage };
