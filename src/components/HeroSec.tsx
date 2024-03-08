import iphoneCover from "../assets/iphone_cover.png";
import applePlay from "../assets/App Store Badge US Black.png";
import googlePlay from "../assets/Google Play Badge US.png";
import { IoClose } from "react-icons/io5";

const HeroSec = ({closeMenu, handleCall}:{closeMenu:boolean, handleCall:()=>void}) => {

  return (
    <section className=" bg-heroMask p-4 ">
        <div className='relative w-full md:h-[80vh] sm:h-[60vh]'>
            <img src={iphoneCover} alt="phone image" className="w-full h-full"/>
            <div className='absolute top-[16%] left-14 w-1/2 sm:left-[25%] md:left-14'>
                <h1 className="text-[3.5vw] text-white font-extrabold leading-normal mb-10 lg:text-4xl lg:leading-normal">Discover, search, and play any song featuring voice control.</h1>
                <a href="#" className="text-white font-bold border border-indigo-500 px-10 py-3 rounded bg-indigo-500 hover:bg-slate-100 hover:text-indigo-600" >Try it free</a>
                <div className="flex space-x-3 mt-8">
                    <a href=""><img src={applePlay} alt="Apple play" className="rounded-lg"/></a>
                    <a href=""><img src={googlePlay} alt="Google play" className="rounded-lg"/></a>
                </div>
            </div>
            {/* MOBILE VIEW EXTENTION*/}
            <div className={closeMenu? "absolute hidden -right-3.5 -top-4 border border-slate-500 bg-color1 px-10 pb-8 pt-4 md:hidden":"absolute -right-4 -top-4 border border-slate-500 bg-color1 px-10 pb-8 pt-4 md:hidden"}>
            <   div className='flex flex-col items-start space-y-4 text-slate-100 mb-8'>
                    <a href="/" className='font-extrabold text-sm hover:text-indigo-600 mt-3'>Contact</a>
                    <a href="/" className='font-extrabold text-sm hover:text-indigo-600'>Plans</a>
                    <a href="/" className='font-extrabold text-sm hover:text-indigo-600'>Blog</a>
                    <IoClose onClick={handleCall} className="absolute top-0 right-4 hover:cursor-pointer"/>
                </div>
                <div className='flex flex-col items-start space-y-4 text-slate-100 text-sm'>
                    <a href="/" className='border px-4 py-1.5 rounded border-indigo-500 bg-indigo-500 hover:bg-slate-100 hover:text-indigo-600'>Sign in</a>
                    <a href="/" className='border px-4 py-1.5 rounded border-indigo-500 text-indigo-500 hover:bg-slate-600 hover:text-slate-100 hover:border-slate-100'>Sign Up</a>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default HeroSec;
