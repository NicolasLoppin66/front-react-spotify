// Import du module
import { createBrowserRouter } from "react-router-dom";

// Import de App
import App from "../App";

// Import des screens
import Home from "../screens/Home";
import Search from "../screens/Search";
import Detail from "../screens/Detail";
import Library from "../screens/Library";
import Wishlist from "../screens/Wishlist";
import Playlist from "../screens/Playlist";
import ErrorPage from "../screens/ErrorPage";

const Router = createBrowserRouter([
    {
        element: (
            <>
                {/* On appelle l'élément qu'on affichera sur toutes nos vues */}
                <App />
            </>
        ),

        // On appelle la vue ErrorPage en cas de route inconnue ou d'erreur
        errorElement: <ErrorPage />,

        // On déclare en suite toute les vues avec leur route
        children: [
            {
                path: '/',
                element: <Home />,
                errorElement: <ErrorPage />
            },
            {
                path: '/search',
                element: <Search />,
            },
            {
                path: '/library',
                element: <Library />,
            },
            {
                path: '/add-playlist',
                element: <Playlist />,
            },
            {
                path: '/wishlist',
                element: <Wishlist />,
            },
            {
                path: '/detail',
                element: <Detail />,
            },
        ]
    }
])

export default Router;