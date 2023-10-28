/* eslint-disable no-unused-vars */
import React from 'react';
import login from '../../../assets/login.png';
import google from '../../../assets/google.png';
import github from '../../../assets/github.png';
import '../../../App.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="log-img text-center lg:text-left w-1/2 sm:hidden md:hidden lg:block">
                    <img src={login} alt='login' />
                </div>


                <div className="card login-card flex-shrink-0 w-1/2 max-w-[500px] ">
                    <div className='py-6 text-center'>
                        <h1 className='text-[30px] font-semibold'>Login</h1>
                        <p className='text-[15px] text-[#5e5e5e]'>Login Your Account</p>
                    </div>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
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
                            <button className="btn bg-[#FF725E] text-white hover:bg-[#ff6956]">Login</button>
                        </div>
                    </form>
                    <div className='text-center -mt-4'>
                        <Link to='sign-up'><p>Don`t have an account?</p></Link>
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

export default Login;