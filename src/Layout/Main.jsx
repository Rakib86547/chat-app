/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../pages/Share/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Share/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;