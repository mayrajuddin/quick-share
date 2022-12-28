import React from 'react';
import { FaEnvelope, FaUser } from 'react-icons/fa';
import { BsFillKeyFill, } from "react-icons/bs";
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <section className='bg-[#F5F8FA]'>
            <div className="container mx-auto">
                <div className="flex min-h-screen justify-center items-center">
                    <div className="flex flex-col  bg-[#3097D1] p-8 uppercase text-center">
                        <h4 className="text-2xl text-white">Login</h4>
                        <form >
                            <div className="form-control my-6">
                                <label className="input-group">
                                    <span className='bg-base-100 border-r border-[#eee]'><FaUser size={20} className='text-black' /> </span>
                                    <input type="text" placeholder="Full Name" className="input input-bordered border-[#eee] focus:outline-none" />
                                </label>
                            </div>
                            <div className="form-control my-6">
                                <label className="input-group">
                                    <span className='bg-base-100 border-r border-[#eee]'><FaEnvelope size={20} className='text-black' /> </span>
                                    <input type="email" placeholder="info@site.com" className="input input-bordered focus:outline-none border-[#eee]" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="input-group">
                                    <span className='bg-base-100 border-r border-[#eee]'> <BsFillKeyFill size={20} className='text-black' /> </span>
                                    <input type="password" placeholder="Password" className="input input-bordered focus:outline-none border-[#eee]" />
                                </label>
                            </div>
                            <div className='mt-6'>
                                <button className='btn w-full bg-[#F5F8FA] text-black text-xl border-0 hover:bg-[#F5F8FA]' type='submit'>Sign Up</button>
                            </div>
                        </form>
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