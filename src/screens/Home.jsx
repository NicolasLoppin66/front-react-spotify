import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlbums } from '../redux/album/albumSlice';
import { selectAlbumsData } from '../redux/album/albumSelector';

const Home = () => {

    // Constante qui récupére le hook de react-redux
    const dispatch = useDispatch();

    //  On utilise le hook useEffect pour "dispatcher" lors du montage du composant
    useEffect(() => {
        dispatch(fetchAlbums())

    }, [])

    const { albums, loading } = useSelector(selectAlbumsData)

    console.log('ALBUM', albums['hydra:member']);


    return (
        <div>Home</div>
    )
}

export default Home