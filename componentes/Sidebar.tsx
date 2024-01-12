import React from 'react'

import LibraryIcon from '../Iconos/Library'
import HomeIcon from '../Iconos/Home'
import SearchIcon from '../Iconos/Search'

function Sidebar() {
  return (
    <div>
      
      
      <nav className=" flex-col flex-1 gap-2">
    <div className="">
        <ul>
            <div className="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300 fill-current">
                <HomeIcon/>
                Inicio
            </div>
            <div className="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300 fill-current">
                <SearchIcon/>
                Buscar
            </div>
        </ul>
        </div>
        <div className="bg-zinc-900 rounded-lg p-2 flex-1">
            <ul>
            <div className="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300 fill-current">
                <LibraryIcon/>
                Tu biblioteca
            </div>                
            </ul>
            <p className="cursor-pointer flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300 fill-current">Playlist name....</p>
            <p className="cursor-pointer flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300 fill-current">Playlist name....</p>
            <p className="cursor-pointer flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300 fill-current">Playlist name....</p>
            <p className="cursor-pointer flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300 fill-current">Playlist name....</p>
        </div>
</nav>




    </div>
  )
}

export default Sidebar



