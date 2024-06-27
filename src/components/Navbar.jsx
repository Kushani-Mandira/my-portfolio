//import logo from "@/";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 item-center">
            
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
           <a href="https://www.linkedin.com/in/kushani-mandira-21645530a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            </a>

            <a href="https://github.com/Kushani-Mandira" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            </a>

            <a href="https://www.instagram.com/.m.a.n.d.i.r.a.?igsh=NmRscGNlNjQwOHE2" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
