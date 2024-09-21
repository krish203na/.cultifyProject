import React from "react";
import { motion } from "framer-motion";

const CardGridTestimonial = () => {
  return (
    <motion.div className="w-full h-full bg-white md:px-20 px-10 py-14">
      <motion.div
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h1 className="text-2xl font-semibold text-black">Heading</h1>
        <h1 className="text-2xl text-gray-500">subheading</h1>
      </motion.div>
      <div className="flex justify-between items-center mt-8 flex-wrap flex-grow flex-shrink gap-10">
        <QuoteCard />
        <QuoteCard />
        <QuoteCard />
        <QuoteCard />
        <QuoteCard />
        <QuoteCard />
      </div>
    </motion.div>
  );
};

export default CardGridTestimonial;

const QuoteCard = () => {
  return (
    <motion.div
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1.5, type: "spring" }}
      className="border border-gray-400 px-5 py-3 rounded-lg min-w-[100%] sm:min-w-[45%] lg:min-w-[30%]"
    >
      <h1 className="text-2xl text-black font-semibold mb-3">{`"Quote"`}</h1>
      <div className="flex gap-4">
        <img src="avatar.png" className="w-16 h-16 rounded-full" alt="" />

        <div>
          <h1 className="text-black text-xl">Title</h1>
          <h1 className="text-gray-400 text-xl">Description</h1>
        </div>
      </div>
    </motion.div>
  );
};

export { QuoteCard };
