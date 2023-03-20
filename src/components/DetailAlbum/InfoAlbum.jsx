import React from 'react'

// Import des icon
import {
    RiArticleLine
} from 'react-icons/ri'
import {
    FaCompactDisc
} from 'react-icons/fa'
import {
    GiMicrophone
} from 'react-icons/gi'
import {
    BsCalendarWeekFill
} from 'react-icons/bs'

// Import module
import parse from 'html-react-parser'
import InfoIconLabel from './InfoIconLabel'

const InfoAlbum = ({ dataAlbum }) => {
    // Formatage de la date de sortie
    const date = new Date(dataAlbum.releaseDate)
    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }
    const dateFormat = date.toLocaleDateString('fr-FR', options)

    // Constante de style
    const styleIcon = {
        width: '25px',
        height: '25px'
    }

    return (
        <>
            <h2 className='text-xl my-5'>Information</h2>
            <div className='w-screen flex justify-start items-start bg-gradient-to-b from-transparent via-green_top to-transparent pt-5 pb-10'>
                {/* Container de gauche */}
                <div className='flex items-start justify-start' style={{ width: '60%' }}>
                    <div className='flex-col' style={{ maxWidth: '80%' }}>
                        <div className='p-1 m-1 flex'>
                            <RiArticleLine className='mr-1' style={styleIcon} />
                            <span className='font-bold mr-1'>
                                Biographie de l'artiste :
                            </span>
                        </div>
                        <div className='p-1 m-1 pb-5'>
                            {dataAlbum.artist.biography
                                ? parse(dataAlbum.artist.biography)
                                : 'Pas de biographie pour cet artiste'
                            }
                        </div>
                    </div>
                </div>
                {/* Container droit */}
                {/* Titre album */}
                {/* <div className='flex items-center p-1 m-1 pb-5'>
                    <GiMicrophone className='mr-1' style={styleIcon} />
                    <span className='font-bold mr-1'>
                        Artiste : {ataAlbum.artist.name}
                    </span>
                </div> */}
                {/* Container droit */}
                <div className='flex-col' style={{ minWidth: '20%' }}>
                    {/* Titre album */}
                    <InfoIconLabel icon={{ icon: FaCompactDisc }} label={'Artiste'} value={dataAlbum.title} />
                    {/* Artist */}
                    <InfoIconLabel icon={{ icon: GiMicrophone }} label={'Album'} value={dataAlbum.artist.name} />
                    {/* Date de sortie */}
                    <InfoIconLabel icon={{ icon: BsCalendarWeekFill }} label={'Sortie le'} value={dateFormat} />
                </div>
            </div>
        </>
    )
}

export default InfoAlbum