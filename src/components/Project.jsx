import { PROJECTS } from "../constants/indexm";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 px-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-light tracking-tight"
      >
        Featured <span className="text-cyan-500">Projects</span>
      </motion.h2>

      <div className="max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="mb-16 flex flex-col lg:flex-row items-center gap-10 p-6 rounded-3xl bg-neutral-900/20 border border-neutral-800/50 hover:bg-neutral-900/40 transition-all duration-500 group"
          >
            {/* Project Image Wrapper */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3 flex justify-center"
            >
              <div className="relative overflow-hidden rounded-2xl border border-neutral-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            {/* Project Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-2/3"
            >
              <div className="flex flex-col h-full justify-center">
                <h6 className="mb-3 text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h6>
                <p className="mb-6 text-neutral-400 leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-cyan-900/20 text-cyan-400 border border-cyan-800/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Optional CTA Button */}
                <div className="mt-2">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm font-semibold text-white hover:text-cyan-400 transition-colors gap-2 group/link"
                  >
                    View Project Details
                    <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;