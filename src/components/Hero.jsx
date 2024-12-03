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
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-row flex-col">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="flex flex-col items-center lg:items-start p-10">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight text-center lg:text-left 
            lg:text-8xl"
            >
              Kushani Mandira
            </motion.h2>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent text-center lg:text-left"
            >
              QA Engineer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="w-2/4"
              src={profilePic}
              alt="Kushani Mandira"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
