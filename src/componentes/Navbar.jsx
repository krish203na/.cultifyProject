import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -40 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="bg-white z-50 shadow-md sticky top-0"
    >
      <div className="container mx-auto flex justify-between items-center px-2 py-2 md:px-4 md:py-4">
        {/* Logo */}
        <div className="flex items-center">
          <span className="ml-2 text-xl font-bold">
            <i className="fa-brands fa-figma text-3xl font-bold"></i>
          </span>
        </div>

        {/* Navigation Links */}
        <div
          className={`hidden md:flex ${
            isOpen ? "flex" : "hidden"
          } items-center space-x-8`}
        >
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#pricing" className="text-gray-600 hover:text-blue-500">
              Pricing
            </a>
            <a href="#solutions" className="text-gray-600 hover:text-blue-500">
              Solutions
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500">
              Community
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500">
              Resources
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500">
              Pricing
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500">
              Contact
            </a>
          </div>

          {/* Sign In and Register Buttons */}
          <div className="space-x-4">
            <button className="bg-gray-300 items-center text-black hover:text-white border border-black px-4 py-1 rounded-lg hover:bg-[#27272a] duration-300">
              Sign In
            </button>
            <button className="hover:bg-gray-300 hover:text-black text-white border border-black px-4 py-1 rounded-lg bg-[#27272a] duration-300">
              Register
            </button>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden bg-black ${
            isOpen ? "block" : "hidden"
          } text-xl  absolute top-0 right-0 z-[500] h-screen shadow-sm bg-black w-[60%] flex justify-center transition-all duration-1000`}
        >
          <div
            onClick={toggleMenu}
            className="text-white text-5xl absolute left-5 top-5 "
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="flex  flex-col justify-evenly items-center p-4">
            <a href="#pricing" className="py-2 text-white hover:text-gray-300">
              Pricing
            </a>
            <a
              href="#solutions"
              className="py-2 text-white hover:text-gray-300"
            >
              Solutions
            </a>
            <a href="#contact" className="py-2 text-white hover:text-gray-300">
              Community
            </a>
            <a
              href="#resources"
              className="py-2 text-white hover:text-gray-300"
            >
              Resources
            </a>
            <a href="#contact" className="py-2 text-white hover:text-gray-300">
              Contact
            </a>

            {/* Mobile Sign In and Register Buttons */}
            <button className="md:hidden bg-gray-300 hover:bg-black text-black hover:text-white border border-black px-4 py-2 rounded-lg mb-2">
              Sign In
            </button>
            <button className="md:hidden hover:bg-gray-300 hover:text-black text-white border border-black px-4 py-2 rounded-lg bg-[#27272a]">
              Register
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
