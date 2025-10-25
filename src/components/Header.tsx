import { motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        delay: 0.5,
        duration: 1,
        stiffness: 150,
        damping: 15
      }}
      className="flex justify-between items-center py-2 h-14"
    >
      <h1 className="lg:text-3xl md:text-2xl font-bold text-xl px-2">
        <a href="/">React Website</a>
      </h1>

      <nav className="hidden md:block">
        <ul className="flex gap-4 font-medium">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#ourmission">Ourmission</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* hamburger menu button */}
      <button
        className="md:hidden flex flex-col justify-center items-center gap-1 z-50"
        onClick={toggleMenu}
      >
        <span
          className={`bg-black block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm ${
            isOpen ? "rotate-45 translate-y-2" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-black block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* mobile menu */}
      <div
        className={`fixed top-0 right-0 w-4/5 bg-slate-100 shadow-md transition-all duration-300 ease-in-out z-30 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <nav className="h-screen flex items-center justify-center">
          <ul className="flex flex-col gap-2">
            <li
              className={`transform transition-all duration-300 ease-in-out delay-100 ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <a
                href="#home"
                className="block py-2 hover:bg-gray-100 text-3xl font-medium"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li
              className={`transform transition-all duration-300 ease-in-out delay-200 ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <a
                href="#about"
                className="block py-2 hover:bg-gray-100 text-3xl font-medium"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li
              className={`transform transition-all duration-300 ease-in-out delay-300 ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <a
                href="#service"
                className="block py-2 hover:bg-gray-100 text-3xl font-medium"
                onClick={toggleMenu}
              >
                Service
              </a>
            </li>
            <li
              className={`transform transition-all duration-300 ease-in-out delay-400 ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <a
                href="#ourmission"
                className="block py-2 hover:bg-gray-100 text-3xl font-medium"
                onClick={toggleMenu}
              >
                Our Mission
              </a>
            </li>
            <li
              className={`transform transition-all duration-300 ease-in-out delay-500 ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <a
                href="#contact"
                className="block py-2 hover:bg-gray-100 text-3xl font-medium"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

    </motion.header>
  )
}

export default Header