// Import module
import React from 'react'

// Import icon
// import {} from 'react-icons/'
import { BsFillPauseFill, BsFillPlayFill, BsRepeat, BsShuffle } from 'react-icons/bs'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md'

// Ici on aura tous les bouton de controle
// play, pause, next, prev, random ...
const Controls = ({
    isPlaying,
    repeat, setRepeat,
    shuffle, setShuffle,
    currentSongs,
    handlePlayPause,
    handleNextSong,
    handlePrevSong
}) => {
    return (
        <div className='flex items-center justify-around md:w-36 lg:w-52 2xl:w-80'>
            {/* On affiche le bouton repeat */}
            <BsRepeat
                size={20}
                color={repeat ? 'rgba(30, 215, 96, 1)' : '#fff'}
                className='cursor-pointer hidden sm:block'
                onClick={() => setRepeat((prev) => !prev)}
            />
            {/* Si on a un tableau de chanson on affiche l'icone reculer */}
            {currentSongs?.length &&
                <MdSkipPrevious
                    size={30}
                    color='#fff'
                    className='cursor-pointer'
                    onClick={handlePrevSong}
                />}
            {/* Si la chanson est en cours de lecture */}
            {isPlaying ? (
                // On affiche l'icone pause
                <BsFillPauseFill
                    size={45}
                    color='#fff'
                    className='cursor-pointer'
                    onClick={handlePlayPause}
                />
            ) : (
                <BsFillPlayFill
                    size={45}
                    color='#fff'
                    className='cursor-pointer'
                    onClick={handlePlayPause}
                />
            )}
            {/* Si on a un tableau de chanson on affiche l'icone avancer */}
            {currentSongs?.length &&
                <MdSkipNext
                    size={30}
                    color='#fff'
                    className='cursor-pointer'
                    onClick={handleNextSong}
                />}
            {/* On affiche le bouton shuffle */}
            <BsShuffle
                size={20}
                color={shuffle ? 'rgba(30, 215, 96, 1)' : '#fff'}
                className='cursor-pointer hidden sm:block'
                onClick={() => setShuffle((prev) => !prev)}
            />
        </div>
    )
}

export default Controls