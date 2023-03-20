// Import module
import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Import des constant
import { apiImage } from '../constants/apiConstant';
import { playPause, setActiveAlbum, setActiveSong } from '../redux/player/playerSlice';
import PlayPause from './PlayPause';

const AlbumCard = ({ data, index, songs, isPlaying, activeSong }) => {
    console.log({ data, index, songs, isPlaying, activeSong });
    // On recupere l'image de l'album
    const imgPath = `${apiImage}/${data.imagePath}`
    // console.log(data);

    // Appelle du hook useDispatch
    const dispatch = useDispatch()

    // Méthode lorsqu'on met pause
    const handlePauseClick = () => {
        dispatch(playPause(false))
    }

    // Methode lorsqu'on met play
    const handlePlayClick = (index) => {
        // On met a jours le slice du player
        dispatch(setActiveSong({ songs, data, index }))
        dispatch(setActiveAlbum({ data }))
        dispatch(playPause(true))
    }

    return (
        // Ici on ce crée notre <div> principal de la card
        // animate-slideup est définit dans tailwind.config
        <div className='
      flex flex-col w-[250px] p-4 
      bg-white_01 hover:bg-white_05
      transition-all ease-out duration-500 
      animate-slideup rounded-lg cursor-pointer group
    '>
            <div className='relative w-full h-56 flex flex-col'>
                {/* On passe les parametre a travres la route grace a "state" */}
                <Link to='/detail' state={{ params: data }}>
                    <img src={imgPath} className='card-sh rounded-lg object-cover' alt={data.title} />
                </Link>
                {/* Ici on place notre composant play / pause */}
                <div className={`absolute ${activeSong?.title === songs[index]?.title ? `flex` : `hidden`} group-hover:flex right-3 bottom-5`}>
                    <div className='group-hover:animate-slideup bg-black outline-none rounded-full group-hover:duration-75 overflow-hidden'>
                        <PlayPause
                            songs={songs}
                            handlePauseClick={handlePauseClick}
                            handlePlayClick={() => handlePlayClick(index)}
                            isPlaying={isPlaying}
                            activeSong={activeSong}
                            data={data}
                            index={index}
                        />
                    </div>
                </div>
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