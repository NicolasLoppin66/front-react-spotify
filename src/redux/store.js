import { configureStore } from '@reduxjs/toolkit'
import albumsReducer from './album/albumSlice'
import playerReducer from './album/playerSlice'

const store = configureStore({
    reducer: {
        // On déclarera ici nos futur reducers
        albums: albumsReducer,
        player: playerReducer,
    }
})

export default store