import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
    userId: "",
    isGuest: "",
    email: "",

    setUserId: () => { },
    setIsGuest: () => { },
    setEmail: () => { },

    signIn: async () => { },
    signOut: async () => { }
})

const AuthContextProvider = ({ children }) => {
    const [userId, setUserId] = useState('')
    const [isGuest, setIsGuest] = useState('')
    const [email, setEmail] = useState('')

    const signIn = async user => {
        try {
            setUserId(user.userId)
            setIsGuest(user.isGuest)
            setEmail(user.email)
            localStorage.setItem("userInfos", JSON.stringify(user))
        } catch (err) {
            throw new Error(`error : ${err}`)
        }
    }

    const signOut = () => {
        try {
            setUserId("")
            setIsGuest("")
            setEmail("")
            localStorage.removeItem("userInfos")
        } catch (err) {
            throw new Error(`error : ${err}`)
        }
    }

    const value = {
        userId,
        isGuest,
        email,
        setUserId,
        setIsGuest,
        setEmail,
        signIn,
        signOut
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuthContext = () => useContext(AuthContext)

export { AuthContext, useAuthContext, AuthContextProvider }