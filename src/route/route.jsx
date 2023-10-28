/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import Error from '../pages/Share/Error/Error';
import SignUp from '../pages/Home/SignUp/SignUp';
import Login from '../pages/Home/Login/Login';

const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
        {
            path: '/',
            element: <Home />,            
        },
        {
            path: '/sign-up',
            element: <SignUp />
        },
        {
            path: '/login',
            element: <Login />
        }
    ]
}]);
export default router;