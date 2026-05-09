import { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Technologies", href: "#tech" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative flex items-center justify-end py-6 px-8 gap-10 border-b border-neutral-900">
      
      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="relative group transition-colors duration-300 hover:text-cyan-400"
          >
            {link.name}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Social Icons (Hidden on very small screens, visible on md) */}
      <div className="hidden sm:flex items-center gap-5 text-2xl border-l border-neutral-700 pl-8">
        <a href="https://www.linkedin.com/..." target="_blank" className="hover:text-blue-600 transition-transform hover:scale-110">
          <FaLinkedin />
        </a>
        <a href="https://github.com/..." target="_blank" className="hover:text-gray-400 transition-transform hover:scale-110">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/..." target="_blank" className="hover:text-pink-500 transition-transform hover:scale-110">
          <FaInstagram />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl text-white focus:outline-none z-50">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-neutral-950 z-50 p-10 flex flex-col shadow-2xl"
            >
              <div className="flex flex-col gap-8 mt-20 text-xl uppercase tracking-widest">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={toggleMenu}
                    className="hover:text-cyan-400 transition-colors border-b border-neutral-900 pb-2"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Socials inside drawer for mobile */}
              <div className="mt-auto flex justify-center gap-8 text-3xl pb-10">
                <a href="#" className="hover:text-cyan-400"><FaLinkedin /></a>
                <a href="#" className="hover:text-cyan-400"><FaGithub /></a>
                <a href="#" className="hover:text-cyan-400"><FaInstagram /></a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;