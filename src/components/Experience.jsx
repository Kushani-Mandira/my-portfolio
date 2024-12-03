import { EXPERIENCES } from "../constants/indexm";
import { animate, motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:p-8 flex flex-col items-center"
      >
        {/* Title Section */}
        <div className="mb-2 flex items-center justify-center">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-20 text-center text-4xl"
          >
            Experience
          </motion.h2>
        </div>

        {/* Experience List */}
        <div>
          {EXPERIENCES.map((experience, index) => (
            <div
              key={index}
              className="mb-8 flex flex-col lg:flex-row justify-center items-center lg:items-start p-1"
            >
              {/* Year Section */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -150 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4 text-center lg:text-right lg:pr-5"
              >
                <p className="mb-10 text-sm text-neutral-400">{experience.year}</p>
              </motion.div>

              {/* Description Section */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 150 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-3/4 max-w-3xl text-center lg:text-left"
              >
                <h6 className="mb-2 font-semibold">{experience.company}</h6>
                <p className="mb-4 text-neutral-400">{experience.description}</p>
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
