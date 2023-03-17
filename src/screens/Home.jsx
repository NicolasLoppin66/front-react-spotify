import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlbums } from '../redux/album/albumSlice';
import { selectAlbumsData } from '../redux/album/albumSelector';
import Loader from '../components/Loader';
import AlbumCard from '../components/AlbumCard';

const Home = () => {

	// Constante qui récupére le hook de react-redux
	const dispatch = useDispatch();

	//  On utilise le hook useEffect pour "dispatcher" lors du montage du composant
	useEffect(() => {
		// On dispatch fetchAlbumn des que l'on monte le composent
		dispatch(fetchAlbums())

	}, [dispatch]) // Dans l'update on appelle le dispach pour mettre a jour les info

	const { albums, loading } = useSelector(selectAlbumsData)

	// console.log('ALBUM', albums['hydra:member']);
	const dataAlbum = albums['hydra:member'];

	return (
		loading ? <Loader /> :

			<div className='flex flex-col '>
				<h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
					Tous les albums
				</h2>
				{/* Card */}
				<div className='px-5 flex flex-wrap md:justify-start justify-center gap-8'>
					{/* On vas mapper sur dataAlbum des que les infos sont chargées */}
					{dataAlbum && dataAlbum.map((data, index) => {
						return (
							// On appelle le composant albumCard
							<AlbumCard
								// On passe key en parametre pour que chaque card est une clé unique
								key={index}
								// On passe data pour envoyer les infos de chaque album au composant 
								data={data}
							/>
						)
					})}
				</div>
			</div>
	)
}

export default Home