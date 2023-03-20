import React from 'react'

import {
    FiPlayCircle,
    FiPauseCircle
} from 'react-icons/fi'


const PlayPause = ({
    // Toute les propriéte appeler
    size = '60px', // On donne une taille d'icon par defaut de 60px, on peut surcharger si besoin
    isPlaying, // Gere l'état si on est en mode play ou pause
    songs, // Tableau de chansons
    activeSong, // Chanson en cours de lecture
    handlePause, // Méthode qui permet de mettre en pause
    handlePlay, // Methode qui permet de mettre play
    index // Index du tableau de la chanson en cours de lecture
}) => {
    return (
        // On va checker si on est en mode "play" &&  
        // Si le titre de la chanson == au titre de la chanson du tableau à l'index donnée 
        isPlaying && activeSong?.title === songs[index]?.title
            ? // Si vrai on retourne l'icone pause avec la méthode handlePause 
            <FiPauseCircle
                size={size}
                className='text-green shadow-md cursor-pointer'
                onClick={handlePause} />
            :
            <FiPlayCircle
                size={size}
                className='text-green shadow-md cursor-pointer'
                onClick={handlePlay} />
    )
}

export default PlayPause