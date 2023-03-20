// Import du module
import React from 'react'

// Import du composant
import HeaderDetail from './HeaderDetail';
import ToolBarDetail from './ToolBarDetail';
import ListAlbumSong from './ListAlbumSong';

const DetailAlbum = ({ dataAlbum }) => {
    return (
        <>
            <HeaderDetail dataAlbum={dataAlbum} />
            <ToolBarDetail dataAlbum={dataAlbum} />
            <ListAlbumSong dataAlbum={dataAlbum} />
        </>
    )
}

export default DetailAlbum