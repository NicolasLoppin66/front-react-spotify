import React from 'react'
import { useLocation } from 'react-router-dom'
import DetailAlbum from '../components/DetailAlbum';

const Detail = () => {
  // On appelle le hook de react-router-dom
  const location = useLocation();
  
  // On récupére les data depuis la route
  // Les ? servent a vérifier si la valeur existe
  const data = location?.state?.params;

  return (
    <DetailAlbum dataAlbum={data} />
  )
}

export default Detail