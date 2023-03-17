import React from 'react'
import { apiImage } from '../constants/apiConstant';
import { Link } from 'react-router-dom';

const AlbumCard = ({ data }) => {
  const imgPath = `${apiImage}/${data.imagePath}`
  console.log(data);

  return (
    // Ici on ce crée notre <div> principal de la card
    // animate-slideup est définit dans tailwind.config
    <div className='
      flex flex-col w-[250px] p-4 
      bg-white_01 hover:bg-white_05
      transition-all ease-out duration-500 
      animate-slideup rounded-lg cursor-pointer
    '>
      <div className='relative w-full h-56 flex flex-col'>
        {/* On passe les parametre a travres la route grace a "state" */}
        <Link to='/detail' state={{ params: data }}>
          <img src={imgPath} className='card-sh rounded-lg object-cover' alt={data.title} />
        </Link>
      </div>
      <Link to='/detail' state={{ params: data }}>
        <div className='mt-4 flex flex-col'>
          <p className='text-white text-xl truncate font-bold'>
            {data.title}
          </p>
          <p className='text-white text-sm truncate'>
            {data.artist.name}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default AlbumCard