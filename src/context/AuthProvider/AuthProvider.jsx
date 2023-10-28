/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth } from 'firebase/auth';

const AuthContext = createContext();
const auth = getAuth(app)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, useLoading] = useState(true)
    
    const authInfo = {}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;