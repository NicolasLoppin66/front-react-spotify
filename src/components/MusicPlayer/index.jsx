import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextSong, playPause, prevSong } from '../../redux/player/playerSlice'
import Track from './Track'
import Controls from './Controls'
import Seekbar from './SeekBar'
import Player from './Player'
import VolumeBar from './VolumeBar'

const MusicPlayer = () => {
    const {
        activeSong,
        currentSongs,
        currentAlbum,
        currentIndex,
        isActive,
        isPlaying
    } = useSelector((state) => state.player)

    const [duration, setDuration] = useState(0) // Durée du titre
    const [seekTime, setSeekTime] = useState(0) // Position de la barre de lecture
    const [appTime, setAppTime] = useState(0) // Position réel de la barre de lecture
    const [volume, setVolume] = useState(0.3) // Pour gérer le volume
    const [repeat, setRepeat] = useState(false) // Pour gérer la fonction "boucle"
    const [shuffle, setShuffle] = useState(false) // Pour gérer la fonction de lecture "aléatoire"

    // On appelle le hook de reduc
    const dispatch = useDispatch()

    useEffect(() => {
        //   Si le store contient un tableau de chanson on passe a true
        if (currentSongs.length) dispatch(playPause(true))
    }, [currentIndex]) // Si currentIndex change, on "met a jours" le composant

    // On gere le play / pause
    const handlePlayPause = () => {
        // Si aucune chanson active, on return
        if (!isActive) return

        // Si une chanson est active
        if (isPlaying) {
            // Il doit mettre pause
            dispatch(playPause(false))
        } else {
            // On met sur play
            dispatch(playPause(true))
        }
    }

    // On gere pour avancer d'un piste
    const handleNextSong = () => {
        // Si on n'est pas en mode aléatoire
        if (!shuffle) {
            // On utilise la technique du module pour toujour etre dans le tableau
            // Si chiffre de gauche < chiffre de droit ca retourne la valeur du chiffre de gauche.
            dispatch(nextSong((currentIndex + 1) % currentSongs.length))
        } else {
            // Sinon on recupere un index aleatoire dans le tableau de chanson
            dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)))
        }
    }

    // On gere le recul d'un piste
    const handlePrevSong = () => {
        if (currentIndex === 0) {
            // Si l'index est a 0 on récupere le dernier index du tableau
            dispatch(prevSong(currentSongs.length - 1))
        } else if (shuffle) {
            dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)))
        } else {
            // On enleve 1 a l'index
            dispatch(prevSong(currentIndex - 1))
        }
    }

    return (
        <div className='relative sm:px-12 px-8 w-full flex items-center justify-between'>
            <Track
                isPlaying={isPlaying}
                isActive={isActive}
                activeSong={activeSong}
                currentAlbum={currentAlbum}
            />
            <div className='flex flex-1 flex-col items-center justify-center'>
                <Controls
                    isPlaying={isPlaying}
                    isActive={isActive}
                    repeat={repeat}
                    setRepeat={setRepeat}
                    shuffle={shuffle}
                    setShuffle={setShuffle}
                    currentSongs={currentSongs}
                    handlePlayPause={handlePlayPause}
                    handleNextSong={handleNextSong}
                    handlePrevSong={handlePrevSong}
                />

                <Seekbar
                    value={appTime}
                    min='0'
                    max={duration}
                    onInput={(evt) => setSeekTime(evt.target.value)}
                    appTime={appTime}
                    setSeekTime={setSeekTime}
                />

                <Player
                    activeSong={activeSong}
                    volume={volume}
                    isPlaying={isPlaying}
                    seekTime={seekTime}
                    repeat={repeat}
                    currentIndex={currentIndex}
                    onEnded={handleNextSong}
                    onTimeUpdate={(evt) => setAppTime(evt.target.currentTime)}
                    onLoadedData={(evt) => setDuration(evt.target.duration)}
                />
            </div>


            <VolumeBar
                value={volume}
                min='0'
                max='1'
                onChange={(evt) => setVolume(evt.target.value)}
                setVolume={setVolume}
            />
        </div>
    )
}

export default MusicPlayer