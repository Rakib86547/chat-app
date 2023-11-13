/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut().then((result) => {
            console.log(result)
        }).catch((err) => { console.log(err.message) })
    } 

    return (
        <div>
            {user?.uid ? <button onClick={handleLogOut}>Logout</button> : <h1>Login</h1>}
            
        </div>
    );
};

export default Navbar;