/* eslint-disable no-unused-vars */
import React from 'react';
import google from '../../../assets/google.png';
import github from '../../../assets/github.png';
import signUp from '../../../assets/Sign up.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">
                    <img src={signUp} alt='login' />
                </div>


                <div className="card login-card flex-shrink-0 w-1/2 max-w-[500px] ">
                    <div className='py-6 text-center'>
                        <h1 className='text-[30px] font-semibold'>Sign Up</h1>
                        <p className='text-[15px] text-[#5e5e5e]'>Sign Up a New Account</p>
                    </div>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div>
                            <label htmlFor="image" className="block text-sm text-gray-500 dark:text-gray-300">Image</label>

                            <input type="file" className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF725E] text-white hover:bg-[#ff6956]">Sign Up</button>
                        </div>
                    </form>
                    <div className='text-center -mt-4'>
                        <Link to='/'><p>Already have an account?</p></Link>
                    </div>
                    <div className='text-center flex justify-around items-center w-[260px] m-auto py-[25px] max-w-full'>
                        <button className='flex justify-center items-center border w-[115px] border-[#DB4437] rounded py-2'>
                            <img className='google-img w-[20%] mr-2' src={google} alt='google' />Google
                        </button>
                        <button className='flex justify-center items-center border w-[115px] border-[#171515] rounded py-2'>
                            <img className='github-img w-[14%] mr-2' src={github} alt='github' />Github
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;