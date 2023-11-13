/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import login from '../../../assets/login.png';
import google from '../../../assets/google.png';
import github from '../../../assets/github.png';
import '../../../App.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { useForm } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signInUser, passwordReset, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const [resetEmail, setResetEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()


    const handleShow = () => {
        setShow(!show);
    }
    const handleSignIn = (data) => {
        setLoading(true)
        const email = data?.email;
        const password = data?.password;
        signInUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                if(user){
                    navigate('/dashboard')
                }
                setLoading(false)
                reset()
            }).catch((err) => {
                setError(err?.message)
                setLoading(false)
            })
    }
    const handlePasswordReset = (e) => {
        e.preventDefault();
        if (resetEmail === '') {
            return toast.error('Please Submit Your Email')
        }
        passwordReset(resetEmail)
            .then((result) => {
                toast.success('Please Check Your Email')
            })
            .catch((err) => { console.log(err.message) })
    }

    // --- SignIn with Google ---
    const handleGoogleSignIn = (Provider) => {
        signInWithGoogle(googleProvider)
            .then((result) => { console.log(result?.user) })
            .catch((err) => { console.log(err?.message) })
    }
    // --- SignIn with Google ---
    const handleGithubSignIn = (Provider) => {
        signInWithGithub(githubProvider)
            .then((result) => { console.log(result?.user) })
            .catch((err) => { console.log(err?.message) })
    }
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
                    <form onSubmit={handleSubmit(handleSignIn)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                {...register('email', { required: "Email is Required" })}
                                onChange={(e) => setResetEmail(e.target.value)}
                            />
                        </div>
                        {errors.email && <span role="alert" className='text-red-400'>{errors.email.message}</span>}
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={show ? 'text' : 'password'}
                                placeholder="password"
                                className="input input-bordered"
                                {...register('password', {
                                    required: "Please Enter Your Password",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be 6 Character"
                                    }
                                })}
                            />
                            <span onClick={handleShow} className='absolute right-[18px] bottom-[17%] cursor-pointer'>{show ? <FiEye /> : <FiEyeOff />}</span>
                            {error && <span role="alert" className='text-red-400'>{error}</span>}

                        </div>
                        <label className="label">
                            <a
                                href="#"
                                onClick={handlePasswordReset}
                                className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF725E] text-white hover:bg-[#ff6956]">{loading ? <span>Loading...</span> : <span>Login</span>}</button>
                        </div>
                    </form>
                    <div className='text-center -mt-4'>
                        <Link to='sign-up'><p>Don`t have an account?</p></Link>
                    </div>
                    <div className='text-center flex justify-around items-center w-[260px] m-auto py-[25px] max-w-full'>
                        <button onClick={handleGoogleSignIn} className='flex justify-center items-center border w-[115px] border-[#DB4437] rounded py-2'>
                            <img className='google-img w-[20%] mr-2' src={google} alt='google' />Google
                        </button>
                        <button onClick={handleGithubSignIn} className='flex justify-center items-center border w-[115px] border-[#171515] rounded py-2'>
                            <img className='github-img w-[14%] mr-2' src={github} alt='github' />Github
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;