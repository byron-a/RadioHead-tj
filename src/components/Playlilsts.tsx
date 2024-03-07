//Image
import AlbumCover from "../assets/playlistArtboard@3x.png";
import AlbumCover2 from "../assets/playlistArtboard@3xa.png";
import rightArrow from "../assets/interface.png";

const Playlists = () => {
  return (
    <section className="bg-color4 py-2 w-full h-fit">
        <div className="bg-color3 flex px-16 py-10 justify-between items-center sm:flex-col-reverse md:flex-row">
            <div className="w-1/3">
                <h2 className="text-white text-xl font-medium mb-4">Hand-picked playlists</h2>
                <p className="text-sm text-slate-400 mb-1">Stream guest playlists curated by artists you love. Also check out our original playlists
                    hand-picked by our team of experts.
                </p>
                <div className="flex space-x-4 items-center">
                  <img src={rightArrow} alt="arrow" className="w-2"/>
                  <a href="#" className="text-indigo-400 text-sm font-extrabold mt-0.5">Discover Radioheat</a>
                </div>
            </div>
            <div className="w-1/2 grid grid-cols-2">
                <img src={AlbumCover} alt="playlist cover" />
                <img src={AlbumCover2} alt="playlist cover" />
            </div>
        </div>
    </section>
  )
}

export default Playlists;
