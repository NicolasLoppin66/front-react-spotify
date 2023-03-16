import {
    AiOutlineHome,
    AiOutlineSearch,
    AiOutlineAppstoreAdd
} from 'react-icons/ai'

import {
    BiLibrary
} from 'react-icons/bi'

import {
    MdFavoriteBorder
} from 'react-icons/md'

import { apiRoute } from './apiConstant'

// Ici on construit 2 tableau avec les donnée pour la navbar

// le 1er pour la gestion des albums
export const dataAlbumNav = [
    {
        title: 'Accueil',
        path: '/',
        icon: AiOutlineHome
    },
    {
        title: 'Recherche',
        path: '/search',
        icon: AiOutlineSearch
    },
    {
        title: 'Bibliotèque',
        path: '/library',
        icon: BiLibrary
    },
]

// le 2eme pour les options utilisateur
export const dataUserNav = [
    {
        title: 'Crée une playlist',
        path: '/add-playlist',
        icon: AiOutlineAppstoreAdd
    },
    {
        title: 'Album liké',
        path: '/wishlist',
        icon: MdFavoriteBorder
    },
]

// On récupère le logo de l'appli
export const imgLogo = `${apiRoute}/image/logo.png`