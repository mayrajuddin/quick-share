import React, { useContext } from 'react';
import CreatePost from '../../Components/CreatePost/CreatePost';
import LeatestPost from '../../Components/LeatestPost/LeatestPost';
import { AuthContext } from '../../Context/AuthProvider';

const Home = () => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div> loading...</div>
    }
    return (
        <section className='bg-[#F5F8FA] py-8'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="col-span-2">
                        {user?.uid && <CreatePost />}
                        <LeatestPost />
                        <LeatestPost />
                        <LeatestPost />
                    </div>
                    <div>
                        {user?.uid &&
                            <div className="flex flex-col justify-center max-w-xs p-6  rounded border border-[#eee] sm:px-12 text-gray-900 bg-base-100">
                                <img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                                <div className="space-y-4 text-center divide-y divide-[#eee]">
                                    <div className="my-2 space-y-1">
                                        <h2 className="text-xl font-semibold sm:text-2xl">{user?.displayName}</h2>
                                        <p className="px-5 text-xs sm:text-sm text-gray-400">Junior Frontend Developer</p>
                                    </div>
                                    <div className="flex justify-center pt-2 space-x-4 align-center">
                                        bio
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;