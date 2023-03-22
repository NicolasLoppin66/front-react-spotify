// Import module
import axios from "axios";

// Import composant
import { createSlice } from "@reduxjs/toolkit";

// Import constant api
import { api } from "../../constants/apiConstant"

const slice = createSlice({
    // On lui donne un nom
    name: 'albums',
    // On initialise les valeurs par default
    initialState: {
        loading: false,
        albums: [],
        search: [],
    },
    // Reducer permet de remplir les valeur des states
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setAlbums: (state, action) => {
            state.albums = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },

    }
})

// On export sous forme de constante les "setter" à l'application
export const {
    setLoading, setAlbums, setSearch
} = slice.actions;

// On crée la méthode qui permet de récupérer les infos en BDD
export const fetchAlbums = () => async dispatch => {
    try {
        // On passe setLoading a true pour gérer les chargements des données
        dispatch(setLoading(true));

        // On vas chercher les infos en BDD
        const response = await axios.get(`${api}/albums?isActive=true`);

        // On set les données recu dans notre slice grace à setAlbums
        dispatch(setAlbums(response.data))

        // On passe setLoading a false car on n'a chargée les données
        dispatch(setLoading(false));

    } catch (error) {
        console.error(error);
        dispatch(setLoading(false));
    }
}

// On crée la méthode qui permet de récupérer les infos en BDD
export const fetchSearch = (word) => async dispatch => {
    // console.log(word);
    try {
        // On passe setLoading a true pour gérer les chargements des données
        dispatch(setLoading(true));

        // On vas chercher les infos en BDD
        const response = await axios.get(`${api}/albums?isActive=true?title=${word}`);

        // On set les données recu dans notre slice grace à setAlbums
        dispatch(setSearch(response.data))

        // On passe setLoading a false car on n'a chargée les données
        dispatch(setLoading(false));

    } catch (error) {
        console.error(error);
        dispatch(setLoading(false));
    }
}

// On export notre reducer
export default slice.reducer;