import { DiMysql } from "react-icons/di"
import { FaCss3, FaHtml5, FaJava, FaNodeJs, FaPhp, FaPython } from "react-icons/fa"
import { FaC } from "react-icons/fa6"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { TbBrandKotlin } from "react-icons/tb"




const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">
           Technologies
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <SiMongodb className="text-7xl text-green-400" />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <DiMysql className="text-7xl text-blue-400" />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <FaNodeJs className="text-7xl text-green-500" />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <FaHtml5 className="text-7xl text-red-400" />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <FaCss3 className="text-7xl text-blue-600" />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <FaPython className="text-7xl text-blue-400" />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <FaJava className="text-7xl text-blue-800" />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <TbBrandKotlin className="text-7xl text-orange-700" />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <FaPhp className="text-7xl text-blue-700" />
            </div>
            


        </div>
      
    </div>
  )
}

export default Technologies
