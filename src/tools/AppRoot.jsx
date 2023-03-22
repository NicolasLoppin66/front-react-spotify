import React from 'react'

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import store from '../redux/store'
import { AuthContextProvider, useAuthContext } from './AuthContext'
import Router from './Router'
import OfflineRouter from './OfflineRouter'

const AppRoot = () => {
    const { email, userId } = useAuthContext;
    console.log(email);

    return (
        <AuthContextProvider>
            {/* On appelle notre store */}
            <Provider store={store}>
                {/* On appelle le router pour gérer les Url */}
                <RouterProvider router={email ? Router : OfflineRouter} />
            </Provider>
        </AuthContextProvider>
    )
}

export default AppRoot