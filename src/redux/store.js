import { configureStore } from '@reduxjs/toolkit'
import albumsReducer from './album/albumSlice'

const store = configureStore({
    reducer: {
        // On déclarera ici nos futur reducers
        albums: albumsReducer,
    }
})

export default store