/* eslint-disable no-unused-vars */
import React from 'react';
import '../../../App.css';
import { BsFillChatDotsFill } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { MdOutlineDarkMode } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineLogout } from 'react-icons/ai';
import logo from '../../../assets/chat.png';

const DashboardSidebar = () => {
    return (
        <div className='flex'>            
                <div className="flex flex-col items-center border-1 border-r w-16 h-screen py-8 space-y-8 bg-white dark:bg-gray-900 dark:border-gray-700">
                    <NavLink
                        to='/dashboard/chat'
                        className="text-[#878a92] hover:text-[#FF725E] hover:bg-gray-100 rounded px-[10px] py-2"
                        title='Chat'
                    >
                        <BsFillChatDotsFill className='text-[22px]' />
                    </NavLink>

                    <NavLink to='/dashboard/setting'
                        className="text-[#878a92] hover:text-[#FF725E] hover:bg-gray-100 rounded px-[10px] py-2"
                        title='Setting'
                    >
                        <FiSettings className='text-[22px]' />
                    </NavLink>

                    <NavLink to='/dashboard/profile'
                        className="text-[#878a92] hover:text-[#FF725E] hover:bg-gray-100 rounded px-[10px] py-2"
                        title='Profile'
                    >
                        <CgProfile className='text-[22px]' />
                    </NavLink>
                    <NavLink to=''
                        className="text-[#878a92] hover:text-[#FF725E] hover:bg-gray-100 rounded px-[10px] py-2"
                    >
                        <MdOutlineDarkMode className='text-[22px]' />
                    </NavLink>
                    <NavLink to=''
                        className="text-[#878a92] hover:text-[#FF725E] hover:bg-gray-100 rounded px-[10px] py-2"
                        title='Logout'
                    >
                        <AiOutlineLogout className='text-[22px]' />
                    </NavLink>
                </div>            
        </div>
    );
};

export default DashboardSidebar;