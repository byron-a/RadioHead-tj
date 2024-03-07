import radioLogo from "../assets/Shape.png";
import { TiThMenuOutline } from "react-icons/ti";

const LandingPage = ({menuShow, handleCall}:{menuShow:boolean, handleCall:()=>void}) => {

  return (
    <header className="relative">
        <nav className=' bg-color1 flex items-center justify-between px-20 py-5'>
            <img src={radioLogo} alt="radio logo" className='h-fit'/>
            <div className='flex justify-end w-2/3 space-x-10 sm:hidden md:flex'>
                <div className='flex items-center space-x-6 text-slate-100'>
                    <a href="/" className='font-extrabold text-lg hover:text-indigo-600'>Contact</a>
                    <a href="/" className='font-extrabold text-lg hover:text-indigo-600'>Plans</a>
                    <a href="/" className='font-extrabold text-lg hover:text-indigo-600'>Blog</a>
                </div>
                <div className='flex items-center space-x-4 text-slate-100 text-sm'>
                    <a href="/" className='border px-4 py-1.5 rounded border-indigo-500 bg-indigo-500 hover:bg-slate-100 hover:text-indigo-600'>Sign in</a>
                    <a href="/" className='border px-4 py-1.5 rounded border-indigo-500 text-indigo-500 hover:bg-slate-600 hover:text-slate-100 hover:border-slate-100'>Sign Up</a>
                </div>
            </div>
            <TiThMenuOutline onClick={handleCall} className={menuShow? "text-white w-7 h-7 md:hidden absolute right-7 hover:cursor-pointer":"text-white w-7 h-7 md:hidden absolute right-7 hover:cursor-pointer hidden"}/>
        </nav>

        
    </header>
  )
}

export default LandingPage;
