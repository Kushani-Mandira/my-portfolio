import { HERO_CONTENT } from "../constants/indexm"
import profilePic from "../assets/assets/proPic.jpg";


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start p-10">
            <h2 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16
            lg:text-8xl">Kushani Mandira
            </h2>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                QA Engineer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                {HERO_CONTENT}
            </p>        
          </div> 
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <img src={profilePic} alt="Kushani Mandira" />

            </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
