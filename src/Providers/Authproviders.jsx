
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase-init';


export const AuthContext = createContext(null)

const Authproviders = ({children}) => {

    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email,password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('currently login user',currentUser)
            setUser(currentUser)
            setLoding(false)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        loding,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authproviders;