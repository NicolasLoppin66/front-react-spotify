import React from 'react'

import { TiMediaFastForwardOutline, TiMediaRewindOutline } from 'react-icons/ti'

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
    // On convertie la durée de lecture au format 0:00
    const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`

    return (
        <div className='hidden sm:flex items-center'>
            {/* Bouton pour reculer de 5s */}
            <button
                type='button'
                onClick={() => setSeekTime(appTime - 5)}
                className='hidden lg:mr-4 lg:block text-white'
            >
                <TiMediaRewindOutline />
            </button>
            {/* Temps réel écoule de la chanson */}
            <p className='text-white'>{value === 0 ? '0:00' : getTime(value)}</p>
            {/* Barre de progression de lecture */}
            <input
                type='range'
                step='any'
                value={value}
                min={min}
                max={max}
                onInput={onInput}
                className='md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg'
            />
            {/* temps total de la chanson formaté */}
            <p className='text-white'>{max === 0 ? '0:00' : getTime(max)}</p>
            {/* Bouton pour avancer de 5s */}
            <button
                type='button'
                onClick={() => setSeekTime(appTime + 5)}
                className='hidden lg:ml-4 lg:block text-white'
            >
                <TiMediaFastForwardOutline />
            </button>
        </div>
    )
}

export default Seekbar