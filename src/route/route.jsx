/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import Error from '../pages/Share/Error/Error';
import SignUp from '../pages/Home/SignUp/SignUp';
import Login from '../pages/Home/Login/Login';
import Dashboard from '../Layout/Dashboard/Dashboard';
import Settings from '../Layout/Dashboard/Settings/Settings';
import Chat from '../Layout/Dashboard/Chat/Chat';
import Profile from '../Layout/Dashboard/Profile/Profile';
import Users from '../Layout/Dashboard/Users/Users';

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
},
{
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <Error />,
    children: [
        {
            path: '/dashboard',
            element: <Chat />
        },
        {
            path: '/dashboard/chat',
            element: <Chat />
        },
        {
            path: '/dashboard/setting',
            element: <Settings />
        },
        {
            path: '/dashboard/profile',
            element: <Profile />
        },
        {
            path: '/dashboard/users',
            element: <Users />
        },
    ]
}]);
export default router;