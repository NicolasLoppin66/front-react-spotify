import { createSelector } from "@reduxjs/toolkit";

// On récupére les données du slice qu'on stock dans des constantes
const selectAlbums = state => state.albums.albums;
const selectLoading = state => state.albums.loading;

// On crée le selector
export const selectAlbumsData = createSelector(
    [selectAlbums, selectLoading],
    // On effectue un destructuration d'objet
    (
        albums, loading
    ) => ({
        albums, loading
    })
)