/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // ------ Create User with Email & Password -------
    const createUser = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // ---- SignIn Users --------
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // ---- SignIn with Google ----
    const signInWithGoogle = (Provider) => {
        return signInWithPopup(auth, Provider)
    }
    // ---- SignIn with Github ----
    const signInWithGithub = (Provider) => {
        return signInWithPopup(auth, Provider)
    }

    // update user
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    // Sign Out User
    const logOut = () => {
        // setLoading(true)
        return signOut(auth);
    }
    // user observe
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log('current user on onAuthState: ', currentUser);
            const user = {
                name: currentUser?.displayName,
                email: currentUser?.email,
                image: currentUser?.photoURL
            }
            console.log(user)
            if(currentUser && currentUser.email){
                const url = `${import.meta.env.VITE_APP_URL}/user/${currentUser?.email}`;
                fetch(url, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => {
                    console.log('user data', data)
                })
            }
            // setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const authInfo = {
        createUser,
        user,
        signInUser,
        signInWithGoogle,
        signInWithGithub,
        updateUser,
        passwordReset,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;