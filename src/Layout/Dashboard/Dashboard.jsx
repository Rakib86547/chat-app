// eslint-disable-next-line no-unused-vars
import React from 'react';
import DashboardNavbar from './DashboardSidebar/DashboardNavbar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            <DashboardNavbar />
            <div className='w-[400px]'><Outlet /></div>
        </div>
    );
};

export default Dashboard;