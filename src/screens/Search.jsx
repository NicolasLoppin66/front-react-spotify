import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Searchbar from '../components/SearchBar'
import { selectAlbumsData } from '../redux/album/albumSelector'

const Search = () => {

  const { searchTitle, searchBiography, loading } = useSelector(selectAlbumsData)
  // console.log('title', searchTitle)
  // console.log('bio', searchBiography)

  useEffect(() => {
    // console.log(searchTitle)

  }, [searchTitle])


  // console.log(searchTitle)
  return (
    <Searchbar />
  )
}

export default Search