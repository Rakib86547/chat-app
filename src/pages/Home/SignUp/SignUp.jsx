/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import google from '../../../assets/google.png';
import github from '../../../assets/github.png';
import signUp from '../../../assets/Sign up.png';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { toast } from 'react-hot-toast'
import '../../../App.css'
import { AuthContext } from '../../../context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [show, setShow] = useState(false);
    const [lowerValidate, setLowerValidate] = useState(false);
    const [upperValidate, setUpperValidate] = useState(false);
    const [numberValidate, setNumberValidate] = useState(false);
    const [specialValidate, setSpecialValidate] = useState(false);
    const [lengthValidate, setLengthValidate] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState('');
    const [imageFile, setImageFile] = useState();
    const [loading, setLoading] = useState(false);
    const { createUser, updateUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    const handleImageFile = (e) => {
        e.preventDefault();
        setImageFile(URL.createObjectURL(e.target.files[0]))
    }

    const handlePassword = (value) => {
        setIsShowPassword(value);
        const lower = new RegExp("(?=.*[a-z])");
        const upper = new RegExp("(?=.*[A-Z])");
        const number = new RegExp("(?=.*[0-9])");
        const special = new RegExp("(?=.*[!@#$%^&*])");
        const length = new RegExp("(?=.{6,})");

        if (lower.test(value)) {
            setLowerValidate(true);
        } else {
            setLowerValidate(false)
        }

        if (upper.test(value)) {
            setUpperValidate(true);
        } else {
            setUpperValidate(false)
        }

        if (number.test(value)) {
            setNumberValidate(true);
        } else {
            setNumberValidate(false)
        }

        if (special.test(value)) {
            setSpecialValidate(true);
        } else {
            setSpecialValidate(false)
        }

        if (length.test(value)) {
            setLengthValidate(true);
        } else {
            setLengthValidate(false)
        }
    }

    const handleShow = () => {
        setShow(!show);
    }

    const handleSignUp = (data) => {
        setLoading(true)
        const name = data?.name;
        const email = data?.email;
        const password = data?.password;
        const image = data?.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_API_KEY}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data?.success === true) {
                    createUser(email, password)
                        .then((result) => {
                            const user = result?.user;
                            const photoUrl = data?.data?.url
                            updateUser(name, photoUrl)
                                .then(() => {
                                    toast.success('Thank You For Sign Up');
                                    reset();
                                    navigate('/')
                                    setLoading(false)
                                })
                                .catch((err) => { console.log(err.message); setLoading(false) })
                        })
                        .catch((err) => { console.error(err); setLoading(false) })
                }
            }).catch((err) => { console.log(err.message), setLoading(false) })
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

        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="log-img text-center lg:text-left w-1/2 sm:hidden md:hidden lg:block">
                    <img src={signUp} alt='login' />
                </div>


                <div className="card login-card flex-shrink-0 w-1/2 max-w-[500px] ">
                    <div className='py-6 text-center'>
                        <h1 className='text-[30px] font-semibold'>Sign Up</h1>
                        <p className='text-[15px] text-[#5e5e5e]'>Sign Up a New Account</p>
                    </div>
                    <form onSubmit={handleSubmit(handleSignUp)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="name"
                                placeholder="name"
                                className="input input-bordered"
                                {...register('name', { required: "Name is Required" })}
                            />
                        </div>
                        {errors.name && <span role="alert" className='text-red-400'>{errors.name.message}</span>}

                        <div className="form-control">
                            <label className="label">
                                <p className="label-text">Email</p>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                {...register('email', { required: "Email is Required" })}
                            />
                        </div>
                        {errors.email && <span role="alert" className='text-red-400'>{errors.email.message}</span>}

                        <div className='img-box sm:flex-col md:flex-col lg:flex lg:flex-row  justify-between '>
                            <div>
                                <label htmlFor="image" className="block text-sm text-gray-500 dark:text-gray-300">Image</label>
                                <input type="file"
                                    accept='image/'
                                    className="block img-input w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full"
                                    {...register('image', { required: "Image is Required" })}
                                    onChange={handleImageFile}
                                />
                            </div>
                            {imageFile && <img className='image w-[100px] h-[100px] rounded-full' src={imageFile} />}
                        </div>
                        {errors.image && <span role="alert" className='text-red-400'>{errors.image.message}</span>}

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
                                    },
                                    pattern: {
                                        value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/,
                                    }
                                })}
                                onChange={(e) => handlePassword(e.target.value)}
                            />
                            <span onClick={handleShow} className='absolute right-[18px] bottom-[20%] cursor-pointer'>{show ? <FiEye /> : <FiEyeOff />}</span>
                        </div>

                        {isShowPassword && (
                            <p className='text-[14px]'>
                                <><span className={lowerValidate ? 'text-green-400' : 'text-red-400'}>Lowercase,</span> </>
                                <><span className={upperValidate ? 'text-green-400' : 'text-red-400'}>Uppercase,</span> </>
                                <><span className={numberValidate ? 'text-green-400' : 'text-red-400'}>Number,</span> </>
                                <><span className={specialValidate ? 'text-green-400' : 'text-red-400'}>Special Character,</span> </>
                                <><span className={lengthValidate ? 'text-green-400' : 'text-red-400'}>6 Character</span></>
                            </p>
                        )}
                        {errors.password && <span role="alert" className='text-red-400'>{errors.password.message}</span>}

                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF725E] text-white hover:bg-[#ff6956]">{loading ? <span>Loading...</span> : <span>Sign Up</span>}</button>
                        </div>
                    </form>
                    <div className='text-center -mt-4'>
                        <Link to='/'><p>Already have an account?</p></Link>
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

export default SignUp;