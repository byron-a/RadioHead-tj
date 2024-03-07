import playStation from "../assets/playstation-wordmark.png";
import blackberry from "../assets/BlackBerry.png";
import redBull from "../assets/redbull.png";
import tiktok from "../assets/tiktok-icon-white-1.png";
import sennheiser from "../assets/SENNHEISER_Basic_logo.png";

const Brand = () => {
    
  return (
    <section>
        <div className="bg-color2 py-10 flex justify-center space-x-[10%]">
            <img src={playStation} alt="playstation icon" className="w-[8%]"/>
            <img src={blackberry} alt="blackberry icon" className="w-[8%]"/>
            <img src={redBull} alt="red bull icon" className="w-[8%]"/>
            <img src={tiktok} alt="tiktok icon" className="w-[8%]"/>
            <img src={sennheiser} alt="sennheiser brand icon" className="w-[8%]"/>
        </div>
         
    </section>
  )
}

export default Brand;
