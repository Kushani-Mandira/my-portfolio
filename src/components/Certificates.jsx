    import { CERTIFICATES } from "../constants/indexm";
import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi"; // Using react-icons for a clean look
import { PiCertificateFill } from "react-icons/pi";

const Certificates = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certificates
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8">
        {CERTIFICATES.map((cert, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-[45%] p-6 rounded-2xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-800/50 transition-colors duration-300 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Icon with hover color change */}
                <div className="text-4xl text-purple-800 group-hover:text-cyan-400 transition-colors duration-300">
                  <PiCertificateFill />
                </div>
                <div>
                  <h6 className="font-semibold text-lg">{cert.title}</h6>
                  <p className="text-sm text-neutral-400">{cert.issuer}</p>
                </div>
              </div>

              {/* View Button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded bg-neutral-900 px-4 py-2 text-sm font-medium text-purple-400 border border-purple-900 hover:bg-purple-800 hover:text-white transition-all duration-300"
              >
                View
                <HiOutlineExternalLink />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;