// Import module
import React from 'react'

// Import de l'api
import { apiImage } from '../../constants/apiConstant'

const InfoHeader = ({ dataAlbum }) => {
	// Crée la constante pour l'image.
	const imgPath = `${apiImage}/${dataAlbum?.imagePath}`
	// On formate la date de sortie.
	const year = new Date(dataAlbum.releaseDate)
	const dateSortie = year.getFullYear();

	// On utilise une double ternaire pour afficher le nombre de titre.
	const nbrTitle = dataAlbum.songs ? dataAlbum.songs.length > 1
		? dataAlbum.songs.length + ' titres'
		: dataAlbum.songs.length + ' titre'
		: 'Aucun titre pour cet album';

	// Créer un point séparateur.
	const Dot = () => (
		<p className='p-1 text-xl'>&#8226;</p>
	)

	// Traitement de la durée total de l'album
	const durationAlbum = () => {
		const totalSeconds = dataAlbum.songs.map(function (num) {
			return num.duration
		}).reduce(function (a, b) {
			return a + b
		});

		const hours = Math.floor(totalSeconds / 3600);

		// Définition des minutes
		// Si totalSeconds est inferieur a 10 
		// Alors on ajoute un 0 au minute.
		const minutes = Math.floor((totalSeconds % 3600) / 60) < 10
			? '0' + Math.floor((totalSeconds % 3600) / 60)
			: Math.floor((totalSeconds % 3600) / 60);

		// Définition des secondes
		// Si totalSeconds est inferieur a 10 
		// Alors on ajoute un 0 au seconde.
		const secondes = totalSeconds % 60 < 10
			? '0' + totalSeconds % 60
			: totalSeconds % 60;

		return hours > 0 ? (hours + ' h' + minutes + ' min ' + secondes + 's')
			: (minutes + ' min ' + secondes + 's');
	}

	return (
		<div className='flex items-center'>
			<img src={imgPath} alt={dataAlbum.title} className='w-5 h-5 rounded-full' />
			<p className='font-bold text-base p-1'>{dataAlbum.artist.name}</p>
			<Dot />
			<p className='font-bold text-base p-1'>{dateSortie}</p>
			<Dot />
			<p className='font-bold text-base p-1'>{nbrTitle}</p>
			<Dot />
			<p className='text-base p-1'>{durationAlbum()}</p>
		</div>
	)
}

export default InfoHeader