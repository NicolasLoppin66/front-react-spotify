// Import module
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

// Import composant
import store from '../redux/store'
import { AuthContextProvider, useAuthContext } from './AuthContext'
import Router from './Router'
import OfflineRouter from './OfflineRouter'

const AppRoot = () => {
    const [inSession, setInSession] = useState(null)
    const { setUserId, setIsGuest, setEmail } = useAuthContext()
    const getUserInfos = async () => {
        const user = JSON.parse(localStorage.getItem("userInfos"))
        if (user) {
            setUserId(user.userId)
            setIsGuest(user.isGuest)
            setEmail(user.email)
            setInSession(true)
        } else {
            setInSession(false)
        }
    }

    useEffect(() => {
        getUserInfos()
    }, [])

    return (
        <AuthContextProvider>
            {/* On appelle notre store */}
            <Provider store={store}>
                {/* On appelle le router pour gérer les Url */}
                <RouterProvider router={inSession ? Router : OfflineRouter} />
            </Provider>
        </AuthContextProvider>
    )
}

export default AppRoot