/* eslint-disable no-unused-vars */
import React from 'react';

const Profile = () => {
    return (
        <div>
            <aside className="flex flex-col  h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
                <div className="flex flex-col items-center mt-6 -mx-2">
                    <img className="object-cover w-[110px] h-[110px] mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                </div>

                <div className="mt-10">
                    <p className='p-5 text-center '>
                        If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.
                    </p>
                    <ul className='text-center'>
                        <li><strong>Name:</strong> <span>Abul Kasem</span></li>
                        <li><strong>Email:</strong> <span>Abulkasem@gmail.com</span></li>
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default Profile;