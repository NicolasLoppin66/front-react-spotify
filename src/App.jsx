// rafce
import React, { useEffect, useState } from 'react'
import Home from './screens/Home'
import { Route, Routes } from 'react-router-dom'
import Library from './screens/Library'
import Playlist from './screens/Playlist'
import Search from './screens/Search'
import Wishlist from './screens/Wishlist'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <>
      <Sidebar />
      {/* // Routes qui sert d'aiguillage des différentes routes */}
      <Routes>
        {/* On va déclarer notre première route */}
        <Route path='/' element={<Home />} />
        <Route path='/library' element={<Library />} />
        <Route path='/add-playlist' element={<Playlist />} />
        <Route path='/search' element={<Search />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>
    </>
  )
}

export default App