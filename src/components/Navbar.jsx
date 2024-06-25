//import logo from "@/";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import { FaI, FaL } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 item-center">
            {/* {<img src={logo} alt="logo" /> } */}
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
