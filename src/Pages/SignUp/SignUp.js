import React, { useContext, useState } from 'react';
import { FaEnvelope, FaHome, FaUser } from 'react-icons/fa';
import { BsFillKeyFill, BsImage, } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import { GiGraduateCap } from "react-icons/gi";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const { createUser, loading, updateUser } = useContext(AuthContext)
    const [er, setEr] = useState(null)
    const navigate = useNavigate()

    if (loading) {
        return <div> loading...</div>
    }

    const handleRegister = data => {
        createUser(data.email, data.password)
            .then(result => {
                const userInfo = {
                    displayName: data.name,
                    photoURL: data.img
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => {
                        console.log(err);
                    })
                saveUser(data.email, data.name, data.img, data.institute, data.address)
                reset()
                navigate('/')
            })
            .catch(er => {
                setEr(er.message)
            })
    }

    const saveUser = (email, name, img, institute, address) => {
        const user = { email, name, img, institute, address }

        fetch(`${process.env.REACT_APP_API_URI}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

            })
    }
    return (
        <section className='bg-[#F5F8FA]'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 min-h-screen justify-center items-center">
                    <div className="w-96 lg:w-2/4 mx-auto flex flex-col  bg-[#3097D1] p-7 uppercase text-center">
                        <h4 className="text-2xl text-white mb-3">Sign Up</h4>
                        <form onSubmit={handleSubmit(handleRegister)} className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center'>
                            <div className="form-control ">
                                <label className="input-group">
                                    <span className='bg-base-100 border-r border-[#eee]'><FaUser size={20} className='text-black' /> </span>
                                    <input {...register('name', { required: 'name required' })} type="text" placeholder="Full Name" className="input w-full input-bordered border-[#eee] focus:outline-none" />
                                </label>
                                {errors.name && <span className='pt-2 text-rose-700 text-sm'> {errors.name.message}</span>}
                            </div>
                            <div className="form-control ">
                                <label className="input-group">
                                    <span className='bg-base-100 border-r border-[#eee]'><BsImage size={20} className='text-black' /> </span>
                                    <input {...register('img', { required: 'image required' })} type="url" placeholder="image URL" className="input w-full input-bordered border-[#eee] focus:outline-none" />
                                </label>
                                {errors.img && <span className='pt-2 text-rose-700 text-sm'> {errors.img.message}</span>}
                            </div>
                            <div className="form-control ">
                                <label className="input-group">
                                    <span className='bg-base-100 border-r border-[#eee]'><FaEnvelope size={20} className='text-black' /> </span>
                                    <input {...register('email', { required: 'email required' })} type="email" placeholder="info@site.com" className="input w-full input-bordered focus:outline-none border-[#eee]" />
                                </label>
                                {errors.email && <span className='pt-2 text-rose-700 text-sm'> {errors.email.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="input-group">
                                    <span className='bg-base-100 border-r border-[#eee]'> <GiGraduateCap size={20} className='text-black' /> </span>
                                    <input {...register('institute', { required: 'institute required' })} type="text" placeholder="Collage/University Name" className="input w-full input-bordered focus:outline-none border-[#eee]" />
                                </label>
                                {errors.institute && <span className='pt-2 text-rose-700 text-sm'> {errors.institute.message}</span>}
                            </div>
                            <div className="lg:col-span-2 form-control">
                                <label className="input-group">
                                    <span className='bg-base-100 border-r border-[#eee]'> <FaHome size={20} className='text-black' /> </span>
                                    <input {...register('address', { required: 'Address required' })} type="text" placeholder="Your Address" className="input w-full input-bordered focus:outline-none border-[#eee]" />
                                </label>
                                {errors.address && <span className='pt-2 text-rose-700 text-sm'> {errors.address.message}</span>}
                            </div>
                            <div className="lg:col-span-2 form-control">
                                <label className="input-group">
                                    <span className='bg-base-100 border-r border-[#eee]'> <BsFillKeyFill size={20} className='text-black' /> </span>
                                    <input {...register('password', { required: 'password required' })} type="password" placeholder="Password" className="input w-full input-bordered focus:outline-none border-[#eee]" />
                                </label>
                                {errors.password && <span className='pt-2 text-rose-700 text-sm'> {errors.password.message}</span>}
                            </div>
                            <div className='lg:col-span-2 mx-auto mt-6'>
                                <button className='btn px-9 w-full bg-[#F5F8FA] text-black text-xl border-0 hover:bg-[#F5F8FA]' type='submit'>Sign Up</button>
                            </div>
                        </form>
                        {er && <p className='pt-2 text-rose-700 text-sm'> {er}</p>}
                        <div className='mt-3'>
                            <span className='text-sm capitalize'>already have an account? <Link to='/login' className='capitalize text-base-100 text-sm'>login</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;