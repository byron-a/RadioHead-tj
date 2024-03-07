import albumCover1 from "../assets/albumCover1.png";
import albumCover2 from "../assets/albumCover2.png";
import albumCover3 from "../assets/albumCover3.png";
import albumCover4 from "../assets/albumCover4.png";
import albumCover5 from "../assets/albumCover5.png";
import albumCover6 from "../assets/albumCover6.png";
import rightArrow from "../assets/interface.png";

const TheMusic = () => {
  return (
    <section className="p-16 bg-color3">
        <div className="flex justify-center sm:flex-col sm:items-center md:flex-row">
            <div className="w-[60%] grid grid-cols-3 gap-3 sm:w-full md:w-[55%]">
              <img src={albumCover6} alt="album cover" className="w-fit"/>
              <img src={albumCover5} alt="album cover" className="w-fit"/>
              <img src={albumCover4} alt="album cover" className="w-fit"/>
              <img src={albumCover3} alt="album cover" className="w-fit"/>
              <img src={albumCover2} alt="album cover" className="w-fit"/>
              <img src={albumCover1} alt="album cover" className="w-fit"/>
            </div>
            <div className="w-[40%] p-10 flex items-center sm:w-full md:w-[45%]">
              <div>
                <h2 className="text-white text-xl font-medium mb-4">The music you love</h2>
                <p className="text-sm text-slate-400 mb-1">With over 60 million tracks and tons of exclusive interviews and videos, 
                TIDAL is here to bring you closer to the artists you listen to.</p>
                <div className="flex space-x-4 items-center">
                  <img src={rightArrow} alt="arrow" className="w-2"/>
                  <a href="#" className="text-indigo-400 text-sm font-extrabold mt-0.5">More Featured</a>
                </div>
              </div>
              
            </div>
        </div>
    </section>
  )
}

export default TheMusic;
