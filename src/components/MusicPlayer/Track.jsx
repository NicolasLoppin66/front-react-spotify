import React from 'react'
import { apiImage } from '../../constants/apiConstant'

// Va donner les infos du titre en cours de lecture
const Track = ({ isPlaying, isActive, activeSong, currentAlbum }) => {
    return (
        <div className='flex-1 flex items-center justify-start'>
            {/* On recupere l'image de l'album */}
            <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
                <img
                    src={`${apiImage}/${currentAlbum?.imagePath}`}
                    alt={currentAlbum?.title}
                    className='rounded-full'
                />
            </div>
            <div className='w-1/2'>
                <p className='truncate text-white font-bold text-lg'>
                    {/* On recupere le titre de la chanson */}
                    {activeSong?.title ? activeSong.title : 'Musique sans titre'}
                </p>
                <p className='truncate text-gray-300'>
                    {/* On recupere le nom de l'artiste */}
                    {currentAlbum?.artist?.name ? currentAlbum.artist.name : 'Artiste inconnue'}
                </p>
            </div>
        </div>
    )
}

export default Track