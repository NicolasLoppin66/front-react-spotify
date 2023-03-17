// rafce
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'

const App = () => {
  return (

    <div className='relative flex'>
      <Sidebar />
      <div className='flex-1 flex flex-col bg-gradient-to-b from-[#1d1d1d] to-[#121212]'>
        {/* Ici on aura la futur topbar */}
        <Topbar />
        <div className='px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scollbar flex xl:flex-row flex-col-reverse'>
          <div className='flex-1 h-fit pb-40 text-white'>
            <Outlet />
            {/* // Routes qui sert d'aiguillage des différentes routes */}
            {/* <Routes> */}
            {/* On va déclarer notre première route */}
            {/* <Route path='/' element={<Home />} /> */}
            {/* <Route path='/library' element={<Library />} /> */}
            {/* <Route path='/add-playlist' element={<Playlist />} /> */}
            {/* <Route path='/search' element={<Search />} /> */}
            {/* <Route path='/wishlist' element={<Wishlist />} /> */}
            {/* </Routes> */}
          </div>
          <div className='xl:sticky relative top-0 h-fit'>
            {/* TODO ici les player */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App