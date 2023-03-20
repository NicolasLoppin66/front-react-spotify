// Import du module
import React from 'react'

// Constante de style
const styleIcon = {
    width: '25px',
    height: '25px'
}

const InfoIconLabel = ({ dataAlbum, icon, label, value }) => {
    return (
        <>
            {/* Titre album */}
            <div className='flex items-center p-1 m-1 pb-5'>
                <icon.icon className='mr-1' style={styleIcon} />
                <span className='font-bold mr-1'>
                    {label} : {value}
                </span>
            </div>
        </>
    )
}

export default InfoIconLabel