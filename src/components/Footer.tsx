import logo from "../assets/radioheadlogo (2).png";
import instagram from "../assets/instagramPath.png";
import facebook from "../assets/facebookPath.png";
import twitter from "../assets/twitterPath.png";

const Footer = () => {
  return (
    <footer>
        <div className="bg-color1 flex px-16 py-10 justify-between place-items-center sm:flex-col sm:space-y-11 md:flex-row md:space-y-0">
            <div className="w-1/3 -mt-16">
                <img src={logo} alt="logo copy" className="w-[170px] mb-8"/>
                <p className="text-slate-400 text-[11px]">Radiohead is the first global music streaming service with high
                fidelity sound , hi-def video quality, along with expertly curated playlists and original
                content making it a trusted source for music and culture.
                </p>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-1 sm:space-y-4 md:grid-cols-4 md:space-y-0">
                <div>
                    <h4 className="text-slate-400 font-bold mb-3">Get Started</h4>
                    <ul>
                        <li className="text-[13px] text-slate-300 mb-2"><a href="#">Get Started</a></li>
                        <li className="text-[13px] text-slate-300 mb-2"><a href="#">Playlist import</a></li>
                        <li className="text-[13px] text-slate-300 mb-2"><a href="#">Supported Devices</a></li>
                        <li className="text-[13px] text-slate-300 mb-2"><a href="#">Get Support</a></li>
                    </ul>
                </div>
                <div>
                <h4 className="text-slate-400 font-bold mb-3">Discover</h4>
                    <ul>
                        <li className="text-[13px] text-slate-300 mb-2"><a href="#">About</a></li>
                        <li className="text-[13px] text-slate-300 mb-2"><a href="#">Magazine</a></li>
                    </ul>
                </div>
                <div>
                <h4 className="text-slate-400 font-bold mb-3">Account</h4>
                    <ul>
                        <li className="text-[13px] text-slate-300 mb-2"><a href="#">Sign Up</a></li>
                        <li className="text-[13px] text-slate-300 mb-2"><a href="#">Redeem Vouche</a></li>
                        <li className="text-[13px] text-slate-300 mb-2"><a href="#">Redeem GiftCard</a></li>
                        <li className="text-[13px] text-slate-300 mb-2"><a href="#">Manage Account</a></li>
                        <li className="text-[13px] text-slate-300 mb-2"><a href="#">Store</a></li>
                    </ul>
                </div>
                <div>
                <h4 className="text-slate-400 font-bold mb-3">Company</h4>
                    <ul>
                        <li className="text-[13px] text-slate-300 mb-2"><a href="#">Partners</a></li>
                        <li className="text-[13px] text-slate-300 mb-2"><a href="#">Careers</a></li>
                        <li className="text-[13px] text-slate-300 mb-2"><a href="#">Press</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="bg-color3 py-3 flex justify-center space-x-10">
            <img src={instagram} alt="instagram logo" className="w-[15px] h-[15px]"/>
            <img src={facebook} alt="facebook logo" className="w-[15px] h-[15px]"/>
            <img src={twitter} alt="twitter loge" className="w-[15px] h-[15px]"/>
        </div>
    </footer>
  )
}

export default Footer;
