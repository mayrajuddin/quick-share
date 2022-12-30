import React, { useContext, useState } from 'react';
import { FaEnvelope, FaUser } from 'react-icons/fa';
import { BsFillKeyFill, } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { useForm } from 'react-hook-form';

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
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {

                    })
                    .catch(err => {
                        console.log(err);
                    })
                saveUser(data.email, data.name)
                reset()
                navigate('/')
                console.log(result);
            })
            .catch(er => {
                setEr(er.message)
            })
    }

    const saveUser = (email, name) => {
        const user = { email, name }

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
                    <div className="w-96 mx-auto flex flex-col  bg-[#3097D1] p-8 uppercase text-center">
                        <h4 className="text-2xl text-white">Sign Up</h4>
                        <form onSubmit={handleSubmit(handleRegister)}>
                            <div className="form-control my-6">
                                <label className="input-group">
                                    <span className='bg-base-100 border-r border-[#eee]'><FaUser size={20} className='text-black' /> </span>
                                    <input {...register('name', { required: 'name required' })} type="text" placeholder="Full Name" className="input w-full input-bordered border-[#eee] focus:outline-none" />
                                </label>
                                {errors.name && <span className='pt-2 text-rose-700 text-sm'> {errors.name.message}</span>}
                            </div>
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
                                <button className='btn w-full bg-[#F5F8FA] text-black text-xl border-0 hover:bg-[#F5F8FA]' type='submit'>Sign Up</button>
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