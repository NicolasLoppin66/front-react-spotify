// Import du module
import React, { useState } from 'react'

// Import des icons
import {
    Collapse
} from 'react-collapse'
import {
    FiPlayCircle
} from 'react-icons/fi'
import {
    MdFavorite,
    MdOutlineFavoriteBorder
} from 'react-icons/md'
import {
    MdOutlineInfo,
    MdInfo
} from 'react-icons/md'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
// Import du composant
import { playPause, setActiveAlbum, setActiveSong } from '../../redux/player/playerSlice.js'
import InfoAlbum from './InfoAlbum'
import PlayPause from '../PlayPause'

const ToolBarDetail = ({ dataAlbum }) => {
    // Redefinir des variable pour le playPause
    const data = dataAlbum
    const songs = dataAlbum?.songs

    const [index, setIndex] = useState(0)
    const [isInList, setIsInList] = useState(false) // TODO : récupéré la vrai valeur en BDD 
    const [isCollapse, setIsCollapse] = useState(true)

    const { isPlaying, activeSong } = useSelector((state) => state.player)
    // console.log(isPlaying)
    // console.log(activeSong)

    // On récupére le hook de react redux
    // Pour pouvoir interagir avec la slide
    const dispatch = useDispatch()

    // Méthode lorsqu'on met pause
    const handlePauseClick = () => {
        dispatch(playPause(false))
    }

    // Methode lorsqu'on met play
    const handlePlayClick = () => {
        // On met a jours le slice du player
        dispatch(setActiveSong({ songs, data, index }))
        dispatch(setActiveAlbum({ data }))
        dispatch(playPause(true))
    }

    const toggleFavorite = () => {
        setIsInList(!isInList);
        // TODO : Mettre a jours la BDD pour ajouter ou enlever de la liste des favories 
    }

    const handleCollapseClick = () => {
        setIsCollapse(!isCollapse)
    }

    return (
        <>
            <div className='flex items-center ml-5'>
                {/* Bouton Play */}
                <div className='cursor-pointer mr-3'>
                    {/* Add real PlayPause component */}
                    <PlayPause
                        songs={songs}
                        handlePause={handlePauseClick}
                        handlePlay={handlePlayClick}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        index={index}
                        data={data}
                    />
                </div>
                {/* Bouton pour Favorie */}
                <div className='cursor-pointer mr-3' onClick={() => toggleFavorite()}>
                    {/* Add real PlayPause component */}
                    {
                        isInList ?
                            <MdFavorite size='45' className='text-green' style={{ fontSize: '30px' }} />
                            :
                            <MdOutlineFavoriteBorder size='45' className='text-green' style={{ fontSize: '30px' }} />
                    }
                </div>
                {/* Bouton d'information */}
                <div className='cursor-pointer mr-3' onClick={handleCollapseClick}>
                    {
                        !isCollapse ?
                            <MdInfo size='45' className='text-green' style={{ fontSize: '30px' }} />
                            :
                            <MdOutlineInfo size='45' className='text-green' style={{ fontSize: '30px' }} />
                    }
                </div>
            </div>
            {/* On va récupérer les info du collapse */}
            <div>
                <Collapse isOpened={!isCollapse}>
                    {/* <h2 className='text-white'>Hello la collapse</h2> */}
                    {/* On import le composant InfoAlbum */}
                    <InfoAlbum dataAlbum={dataAlbum} />
                </Collapse>
            </div>
        </>
    )
}

export default ToolBarDetail