

const Features = () => {
  return (
    <section className="bg-color3 px-16 py-9">
         <div>
            <h2 className="text-white text-xl font-medium mb-6">Why radiohead?</h2>
         </div>
         <div className="flex space-x-16 sm:flex-col sm:space-x-0 sm:space-y-14 md:flex-row md:space-y-0 md:space-x-16">
            <div>
                <h4 className="text-md font-bold text-slate-300 mb-4 flex place-items-center "><span className=" inline-block border-r-4 rounded h-7 border-indigo-700 mr-1.5"></span> A world of music in your pocket.</h4>
                <p className="text-sm text-slate-400 mb-1 ml-4">Find new loves and old favorities from over 56 million tracks.</p>
                <br/>
                <h4 className="text-md font-bold text-slate-300 mb-4 flex place-items-center "><span className=" inline-block border-r-4 rounded h-7 border-indigo-700 mr-1.5"></span> No Wifi? No problem.</h4>
                <p className="text-sm text-slate-400 mb-1 ml-4">With Deezer Premium, you don't need to be connected to enjoy your favourite tracks.</p>
            </div>
            <div>
                <h4 className="text-md font-bold text-slate-300 mb-4 flex place-items-center "><span className=" inline-block border-r-4 rounded h-7 border-indigo-700 mr-1.5"></span> Craft your collection.</h4>
                <p className="text-sm text-slate-400 mb-1 ml-4">Create playlists from millions of tracks and take them with you wherever you go.</p>
                <br />
                <h4 className="text-md font-bold text-slate-300 mb-4 flex place-items-center "><span className=" inline-block border-r-4 rounded h-7 border-indigo-700 mr-1.5"></span> Made for you.</h4>
                <p className="text-sm text-slate-400 mb-1 ml-4">Flow gets to know what you like and what you don't. Discover your personal soundtrack.</p>
            </div>
         </div>
    </section>
  )
}

export default Features;
