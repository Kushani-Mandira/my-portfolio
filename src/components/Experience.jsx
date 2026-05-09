import { EXPERIENCES } from "../constants/indexm";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 px-4 md:px-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-light tracking-tight"
      >
        Experience
      </motion.h2>

      <div className="relative max-w-6xl mx-auto">
        {/* The Vertical Progress Line */}
        <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-[2px] bg-neutral-800" />

        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-12 flex flex-col lg:flex-row w-full relative">
            
            {/* The Dot Indicator */}
            <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-neutral-900 z-10 top-0 lg:top-2" />

            {/* Left Side: Year (On Desktop) */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 pl-10 lg:pl-0 lg:pr-16 text-left lg:text-right"
            >
              <p className="text-sm font-medium text-neutral-400 mb-1 lg:mb-0">
                {experience.year}
              </p>
            </motion.div>

            {/* Right Side: Content */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 pl-10 lg:pl-16"
            >
              <div className="bg-neutral-900/40 p-6 rounded-xl border border-neutral-800 hover:border-cyan-400/50 transition-colors duration-300">
                <h6 className="text-xl font-bold text-white mb-1">
                  {experience.role}
                </h6>
                <span className="text-sm text-cyan-400 font-medium mb-3 block italic">
                  {experience.company}
                </span>
                <p className="mb-5 text-neutral-400 text-sm leading-relaxed">
                  {experience.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded bg-neutral-800/50 px-3 py-1 text-xs font-semibold text-purple-400 border border-purple-900/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;