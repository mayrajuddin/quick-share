import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import CreatePost from '../../Components/CreatePost/CreatePost';
import LeatestPost from '../../Components/LeatestPost/LeatestPost';
import { AuthContext } from '../../Context/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext)
    const url = `${process.env.REACT_APP_API_URI}/posts?limit=3`
    const { data: posts, isLoading } = useQuery(
        ['posts'],
        async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    )
    console.log(posts);
    if (isLoading) {
        return <div> loading...</div>
    }
    return (
        <section className='bg-[#F5F8FA] py-8'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="col-span-2">
                        {user?.uid && <CreatePost />}
                        {
                            posts.map(post => <LeatestPost key={post._id} post={post} />)
                        }
                    </div>
                    <div>
                        {user?.uid &&
                            <div className="flex flex-col justify-center max-w-xs p-6  rounded border border-[#eee] sm:px-12 text-gray-900 bg-base-100">
                                <img src={user?.photoURL} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                                <div className="space-y-4 text-center divide-y divide-[#eee]">
                                    <div className="my-2 space-y-1">
                                        <h2 className="text-xl font-semibold sm:text-2xl capitalize">{user?.displayName}</h2>
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