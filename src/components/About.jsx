import aboutImg from "../assets/assets/aboutme.jpg";
import { ABOUT_TEXT, EDUCATION } from "../constants/indexm";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 px-4 md:px-8">
      {/* Main Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl mt-16 mb-20 font-light tracking-tight"
      >
        About <span className="text-cyan-500">Me</span>
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
        
        {/* LEFT SIDE: About Description */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <div className="bg-neutral-900/30 p-8 rounded-2xl border border-neutral-800 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-white border-b border-neutral-800 pb-4">
              My Profile
            </h3>
            <p className="text-neutral-400 leading-relaxed text-lg lg:text-left text-center">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Education */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <h3 className="text-2xl font-semibold mb-10 text-white flex items-center justify-center lg:justify-start gap-4">
            <span className="h-1 w-12 bg-cyan-500 hidden lg:block"></span>
            Education
          </h3>

          <div className="space-y-8 relative">
            {/* Subtle Vertical Line for Education */}
            <div className="absolute left-2 top-0 h-full w-[1px] bg-neutral-800 hidden lg:block"></div>

            {EDUCATION.map((edu, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-2 lg:gap-10 lg:pl-8 relative">
                
                {/* Year Bubble */}
                <div className="text-cyan-500 font-mono text-sm font-bold uppercase tracking-widest whitespace-nowrap">
                  {edu.year}
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h6 className="text-lg font-bold text-neutral-100 mb-1">
                    {edu.exam}
                  </h6>
                  <p className="text-neutral-400 italic text-sm">
                    {edu.college}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;