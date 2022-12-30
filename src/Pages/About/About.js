import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { BsPencilSquare } from "react-icons/bs";
import { AuthContext } from '../../Context/AuthProvider';
import AboutModal from './AboutModal';

const About = () => {
    const { user } = useContext(AuthContext)
    const url = `${process.env.REACT_APP_API_URI}/users?email=${user?.email}`;
    const { data: userInfo, isLoading } = useQuery({
        queryKey: ['userInformation', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })
    console.log(userInfo);
    if (isLoading) {
        return <div>loading...</div>
    }
    return (
        <section className='bg-[#F5F8FA] py-8'>
            <div className="container mx-auto h-screen ">
                <div className="flex flex-col w-2/3 mx-auto bg-base-100">
                    <div className="border border-[#eee] p-5">
                        <div className='font-serif flex flex-col space-y-2 relative'>
                            <label>
                                <span className="label-text">Name</span>
                                <h4 className='text-lg  capitalize'>mayraj uddin</h4>
                            </label>
                            <label>
                                <span className="label-text">Email</span>
                                <p className='text-lg '>mayrajuddin03@gmail.com</p>
                            </label>
                            <label>
                                <span className="label-text">Collage/University</span>
                                <p className='text-lg  capitalize'>shayamoli ideal polytechnic institute</p>
                            </label>
                            <label>
                                <span className="label-text">Address</span>
                                <p className='text-lg  capitalize'>Mirsarai, Chittagong bangladesh</p>
                            </label>
                            <span className='absolute right-0 -top-5'>
                                <label htmlFor="about-modal" className="btn p-0 m-0 bg-transparent text-gray-800 border-0 hover:bg-transparent">
                                    <BsPencilSquare size={18} />
                                </label>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <AboutModal />
        </section>
    );
};

export default About;