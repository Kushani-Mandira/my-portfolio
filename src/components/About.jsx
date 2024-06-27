import aboutImg from"../assets/assets/aboutme.jpg";
import { ABOUT_TEXT, EDUCATION } from "../constants/indexm";
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{ opacity: 1, y:0}}
      initial={{ opacity: 0, y: -100}}
      transition={{ duration: 1.5}}
      className="my-20 text-center text-4xl">
         About <span className="text-neutral-500"> Me</span>
      </motion.h2>
      <div className="flex flex-wrap">

 
      <motion.div 
      whileInView={{ opacity: 1, x: 0}}
      initial={{ opacity: 0, x: -100}}
      transition={{ duration: 0.5}}
      className="w-full lg:w-1/2 lg:p-8">
              <div className="mb-2 flex items-center justify-center">
                 <motion.h4 whileInView={{ opacity: 1, x: 0}}
                  initial={{ opacity: 0, x: -100}}
                  transition={{ duration: 1}}
                  className="mb-10 my-4 lg:w-2/4 ">Education
                  </motion.h4>

              </div>
              <div>
            {EDUCATION.map((education, index) =>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center p-5">
                    
                 <motion.div 
                 
                 whileInView={{ opacity: 1, x: 0}}
                 initial={{ opacity: 0, x: -100}}
                 transition={{ duration: 1}}
                 className="w-full lg:w-1/4">
                     <p className="mb-10 text-sm text-neutral-400">{education.year}</p>

                     </motion.div>




                     <motion.div 
                     whileInView={{ opacity: 1, x: 0}}
                     initial={{ opacity: 0, x: 100}}
                     transition={{ duration: 1}}
                     
                     className="w-full max-w-xl lg:w-2/4">

                     <h6 className="mb-2 font-semibold">{education.exam}
                        </h6>
                        <p className="mb-4 text-neutral-400">
                            {education.college}
                        </p>
                      
                     </motion.div> 

                     {/* <motion.div 
                 
                 whileInView={{ opacity: 1, x: 0}}
                 initial={{ opacity: 0, x: -100}}
                 transition={{ duration: 1}}
                 className="w-full lg:w-1/4">
                 <p className="mb-2 text-sm text-neutral-400">{education.exam}</p>

                     </motion.div> */}






                     
                </div>
            )
        )}
        </div>





      </motion.div>

        
        {/* <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: -100}}
        transition={{ duration: 0.5}}
        className="w-full lg:w-1/2 lg:p-8">
              <div className="flex items-center justify-center">
                <img className="rounded-2xl" src={aboutImg} alt="about" />
              </div>    
        </motion.div> */}

        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: 100}}
        transition={{ duration: 0.5}}
        className="w-full lg:w-1/2 p-8">
            <div className="flex justify-center lg:justify-start">

                <p className="my-2 max-w-xl py-6">
                        {ABOUT_TEXT}
                </p>

            </div>
          </motion.div>
      </div>
    </div>
  )
}

export default About

