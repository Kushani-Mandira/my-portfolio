import { HERO_CONTENT } from "../constants/indexm";
import profilePic from "../assets/assets/proPic.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-16 lg:mb-35 px-4 md:px-12">
      <div className="flex flex-wrap lg:flex-row items-center">
        
        {/* Left Section: Text Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-5xl font-extralight tracking-tight lg:mt-16 lg:text-8xl text-white"
            >
              Kushani Mandira
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-3xl font-medium tracking-tight text-transparent"
            >
              QA Engineer & Automation Enthusiast
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl py-6 font-light leading-relaxed text-neutral-400 text-lg"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Added CTA Buttons */}
            <motion.div
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="flex gap-4 mt-4"
            >
              <a
                href="#projects"
                className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-cyan-400 transition-colors duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-neutral-700 text-white px-8 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors duration-300"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right Section: Profile Image with Glow */}
        <div className="w-full lg:w-1/2 lg:p-8 mt-16 lg:mt-0">
          <div className="flex justify-center relative">
            {/* Background Glow Effect */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] -z-10"
            />
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="relative p-2 rounded-3xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm"
            >
              <img
                className="rounded-2xl w-72 lg:w-96 shadow-2xl"
                src={profilePic}
                alt="Kushani Mandira"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;