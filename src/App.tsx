//COMPONENTS
import LandingPage from "./components/LandingPage";
import HeroSec from "./components/HeroSec";
import Brand from "./components/Brand";
import TheMusic from "./components/ThMusic";
import Playlists from "./components/Playlilsts";
import Features from "./components/Feature";
import Footer from "./components/Footer";

//hook
import { useState } from "react";

function App() {
  const [menu,setMenu] = useState(true);

  function menuBehaviour(){
    setMenu(!menu)
  }

  return (
    <div>
      <LandingPage menuShow={menu} handleCall={menuBehaviour}/>
      <HeroSec closeMenu={menu} handleCall={menuBehaviour}/>
      <Brand />
      <TheMusic />
      <Playlists />
      <Features />
      <Footer />
    </div>
  )
}

export default App
