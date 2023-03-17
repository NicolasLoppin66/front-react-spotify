import React, { useState } from 'react'
import { Collapse } from 'react-collapse'
import { FiPlayCircle } from 'react-icons/fi'
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md'
import { MdOutlineInfo, MdInfo } from 'react-icons/md'

const ToolBarDetail = ({ dataAlbum }) => {
    const [isInList, setIsInList] = useState(false) // TODO : récupéré la vrai valeur en BDD 
    const [isCollapse, setIsCollapse] = useState(false)

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
                    <FiPlayCircle size='60' className='text-green' />
                </div>
                {/* Bouton pour Favorie */}
                <div className='cursor-pointer mr-3' onClick={() => toggleFavorite()}>
                    {/* Add real PlayPause component */}
                    {
                        isInList ?
                            <MdFavorite size='60' className='text-green' style={{ fontSize: '30px' }} />
                            :
                            <MdOutlineFavoriteBorder size='60' className='text-green' style={{ fontSize: '30px' }} />
                    }
                </div>
                {/* Bouton d'information */}
                <div className='cursor-pointer mr-3' onClick={handleCollapseClick}>
                    {
                        !isCollapse ?
                            <MdInfo size='60' className='text-green' style={{ fontSize: '30px' }} />
                            :
                            <MdOutlineInfo size='60' className='text-green' style={{ fontSize: '30px' }} />
                    }
                </div>
            </div>
            {/* On va récupérer les info du collapse */}
            <div>
                <Collapse isOpened={!isCollapse}>
                    <h2 className='text-white'>Hello la collapse</h2>
                    {/* TODO importer composant infoAlbum */}
                </Collapse>
            </div>
        </>
    )
}

export default ToolBarDetail