import { createSlice } from '@reduxjs/toolkit'

// Initialisation des variable
const initialState = {
    currentSongs: [], // Un tableau de chanson
    currentAlbum: [], // Album en cour de lecture
    currentIndex: [], // Index de la chanson en cour de lecture
    isActive: false, // Si le player est active 
    isPlaying: false, // Si on est en mode play
    activeSong: {}, // La chanson en cours de lecture
}

// Création du slice pour le player
const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        // Tout ce que l'on stock lorsque qu'on active un chanson
        setActiveSong: (state, action) => {
            // console.log(action);
            // Stokage de la chanson en lecture
            state.activeSong = action.payload.songs[action.payload.index]
            // Stokage entier du tableau de chanson
            state.currentSongs = action.payload?.data?.songs
            // Stokage de l'index
            state.currentIndex = action.payload.index
            // Stokage de l'état du player
            state.isActive = true
        },

        // Stokage des infos de l'Album
        setActiveAlbum: (state, action) => {
            state.currentAlbum = action.payload?.data
        },

        // Pour avancer la liste de lecture
        nextSong: (state, action) => {
            // Permet de récupérer la chanson dans le tableau a l'index donnée
            state.activeSong = state.currentSongs[action.payload]
            // Stok le nouvel index
            state.currentIndex = action.payload
            state.isActive = true
        },

        // Pour reculer la liste de lecture
        prevSong: (state, action) => {
            // Permet de récupérer la chanson dans le tableau a l'index donnée
            state.activeSong = state.currentSongs[action.payload]
            // Stok le nouvel index
            state.currentIndex = action.payload
            state.isActive = true
        },

        // Gestion du play/pause
        playPause: (state, action) => {
            // Change l'état de isPLaying suivant l'état d'origine
            state.isPlaying = action.payload
        }
    }
})

// Ici on export les "actions"
export const { setActiveSong, setActiveAlbum, nextSong, prevSong, playPause } = playerSlice.actions;

// On finit par exporter les "reducers"
export default playerSlice.reducer;