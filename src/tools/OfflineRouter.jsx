// Import du module
import { createBrowserRouter } from "react-router-dom";

// Import des screens
import HomeOffline from "../screens/Offline/HomeOffline";
import Login from "../screens/Offline/Login";
import Registration from "../screens/Offline/Registration";
import ErrorPage from "../screens/ErrorPage";

const Router = createBrowserRouter([
    {
        element: (
            <>
                {/* On appelle l'élément qu'on affichera sur toutes nos vues */}
                <HomeOffline />
            </>
        ),

        // On appelle la vue ErrorPage en cas de route inconnue ou d'erreur
        errorElement: <ErrorPage />,

        // On déclare en suite toute les vues avec leur route
        children: [
            {
                path: '/',
                element: <Login />,
                errorElement: <ErrorPage />
            },
            {
                path: '/register',
                element: <Registration />,
            },
        ]
    }
])

export default Router;