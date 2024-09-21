import React from "react";
import { motion } from "framer-motion";

const CardGridContentList = () => {
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
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
      </div>
    </div>
  );
};

export default CardGridContentList;

const GridCard = () => {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, type: "spring" }}
      className="w-full bg-white flex md:flex-row flex-col items-center md:items-start justify-start border border-gray-400 px-5 py-5 rounded-lg gap-5"
    >
      <img src="./image1.png" className="md:w-[15%] w-[80%] " alt="" />
      <div className="h-full flex md:items-start items-center flex-col gap-5">
        <h1 className="text-3xl  font-semibold text-black">Title</h1>
        <p className="text-gray-500 text-lg ">
          Body text for whatever you’d like to say. Add main takeaway points,
          quotes, anecdotes, or even a very very short story.{" "}
        </p>
        <button className="bg-gray-300 text-lg items-center max-w-[100px] text-black hover:text-white border border-gray-700 px-4 py-2 rounded-lg hover:bg-[#27272a] duration-300">
          Button
        </button>
      </div>
    </motion.div>
  );
};

export { GridCard };
