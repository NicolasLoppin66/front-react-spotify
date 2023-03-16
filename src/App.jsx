// rafce
import React, { useEffect, useState } from 'react'
import Home from './screens/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    // Routes qui sert d'aiguillage des différentes routes
    <Routes>
      {/* On va déclarer notre première route */}
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App