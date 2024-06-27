import aboutImg from"../assets/assets/aboutme.jpg";
import { ABOUT_TEXT, EDUCATION } from "../constants/indexm";
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{ opacity: 1, y:0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center text-4xl mt-10">
         About <span className="text-neutral-500"> Me</span>
      </motion.h2>
      <div className="flex  justify-center">
        

        {/* Text Section */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 p-8 flex justify-center items-center">
            <div className="flex justify-center ">
                <p className="my-2 max-w-xl ">
                        {ABOUT_TEXT}
                </p>
            </div>
        </motion.div>
      </div>

      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="w-full  lg:p-8 flex flex-col items-center">
              <div className="mb-2 flex items-center justify-center">
           <motion.h2 
              whileInView={{ opacity: 1, y:0 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center text-3xl mt-10 pb-10">
              Education 
            </motion.h2>
                  
              </div>
              <div>
                {EDUCATION.map((education, index) =>(
                  <div key={index} className="mb-8 flex flex-wrap justify-center items-center p-1">
                     <motion.div 
                       whileInView={{ opacity: 1, x: 0 }}
                       initial={{ opacity: 0, x: -150 }}
                       transition={{ duration: 1 }}
                       className=" lg:w-1/4 text-center">
                         <p className="mb-10 text-sm text-neutral-400 mr-5">{education.year}</p>
                     </motion.div>
                     <motion.div 
                       whileInView={{ opacity: 1, x: 0 }}
                       initial={{ opacity: 0, x: 150 }}
                       transition={{ duration: 1 }}
                       className="w-full max-w-xl lg:w-3/4 ">
                         <h6 className="mb-2 font-semibold">{education.exam}</h6>
                         <p className="mb-4 text-neutral-400">{education.college}</p>
                     </motion.div>
                  </div>
                ))}
              </div>
      </motion.div>
    </div>
  )
}

export default About
