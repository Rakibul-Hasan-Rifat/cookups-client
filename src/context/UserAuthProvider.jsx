import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { githubProvider, googleProvider } from '../firebase/firebaseProviders';
import auth from '../firebase/firebaseConfig'

export const UserAuthContext = createContext();

const UserAuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
     }
    const githubLogin = () => { 
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currectUser) => {
            setUser(currectUser);
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }
    }, [])

    const userAuthValues = {user, loading, signUp, logIn, googleLogin, githubLogin, logOut}

    return (
        <UserAuthContext.Provider value={userAuthValues}>
            {children}
        </UserAuthContext.Provider>
    );
};

export default UserAuthProvider;