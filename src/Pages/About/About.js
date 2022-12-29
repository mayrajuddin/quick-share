import React from 'react';
import { BsPencilSquare } from "react-icons/bs";

const About = () => {
    return (
        <section className='bg-[#F5F8FA] py-8'>
            <div className="container mx-auto h-screen ">
                <div className="flex flex-col w-2/3 mx-auto bg-base-100">
                    <div className="border border-[#eee] p-5">
                        <div className='font-serif flex flex-col space-y-2 relative'>
                            <label>
                                <span className="label-text">Name</span>
                                <h4 className='text-lg font-semibold capitalize'>mayraj uddin</h4>
                            </label>
                            <label>
                                <span className="label-text">Email</span>
                                <p className='text-lg'>mayrajuddin03@gmail.com</p>
                            </label>
                            <label>
                                <span className="label-text">Collage/University</span>
                                <p className='text-lg capitalize'>shayamoli ideal polytechnic institute</p>
                            </label>
                            <label>
                                <span className="label-text">Address</span>
                                <p className='text-lg capitalize'>Mirsarai, Chittagong bangladesh</p>
                            </label>
                            <span className='absolute right-0'>
                                <button type='button'>
                                    <BsPencilSquare size={18} />
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;