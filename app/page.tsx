import Image from 'next/image'
import './stilos/app.css'
import './globals.css'
import Sidebar from '@/componentes/Sidebar'

export default function Home() {
  return (
    <main id="app" className="relative h-screen p-2 gap-2">
      
			<aside className="[grid-area:aside] flex-col flex overflow-y-auto bg-zinc-900 rounded-lg">
				<Sidebar/>
			</aside>
      <main className="[grid-area-main]rounded-lg bg-zinc-900 overflow-y-auto ">
        MAIN
      </main>
      <footer className="[grid-area:player] bg-green-400 min-h-[100px]">
        PLAYER
      </footer>
    
    </main>
  )
}
