import React, { useContext, useState } from 'react';
import { FaEnvelope, FaGoogle } from 'react-icons/fa';
import { BsFillKeyFill, } from "react-icons/bs";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { useForm } from 'react-hook-form';
const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const { loginUser, googleLogin } = useContext(AuthContext)
    const [er, setEr] = useState(null)


    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleSignIn = (data) => {
        setEr('')
        loginUser(data.email, data.password)
            .then(result => {
                reset()
                navigate(from, { replace: true })
            })
            .catch(err => {
                setEr(err.message)
            })
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                navigate(from, { replace: true })
            })
    }
    return (
        <section className='bg-[#F5F8FA]'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 min-h-screen   justify-center items-center">
                    <div className="w-96 mx-auto flex flex-col justify-center bg-[#3097D1] p-8 uppercase text-center">
                        <h4 className="text-2xl text-white">Login</h4>
                        <form onSubmit={handleSubmit(handleSignIn)}>
                            <div className="form-control my-6">
                                <label className="input-group">
                                    <span className='bg-base-100 border-r border-[#eee]'><FaEnvelope size={20} className='text-black' /> </span>
                                    <input {...register('email', { required: 'email required' })} type="email" placeholder="info@site.com" className="input w-full input-bordered focus:outline-none border-[#eee]" />
                                </label>
                                {errors.email && <span className='pt-2 text-rose-700 text-sm'> {errors.email.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="input-group">
                                    <span className='bg-base-100 border-r border-[#eee]'> <BsFillKeyFill size={20} className='text-black' /> </span>
                                    <input {...register('password', { required: 'password required' })} type="password" placeholder="Password" className="input w-full input-bordered focus:outline-none border-[#eee]" />
                                </label>
                                {errors.password && <span className='pt-2 text-rose-700 text-sm'> {errors.password.message}</span>}
                            </div>
                            <div className='mt-6'>
                                <button className='btn w-full bg-[#F5F8FA] text-black text-xl border-0 hover:bg-[#F5F8FA]' type='submit'>Login</button>
                            </div>
                        </form>
                        {er && <p className='pt-2 text-rose-700 text-sm'> {er}</p>}
                        <div className="flex justify-center space-x-4 mt-3">
                            <button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-sm">
                                <FaGoogle className='font-bold' size={24} />
                            </button>
                        </div>
                        <div className=''>
                            <Link to='/signup' className='capitalize text-base-100 text-sm'>create new account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;