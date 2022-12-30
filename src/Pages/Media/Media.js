import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Post from './Post';

const Media = () => {
    const url = `${process.env.REACT_APP_API_URI}/posts`
    const { data: posts, isLoading } = useQuery(
        ['posts'],
        async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    )
    if (isLoading) {
        return <div>loading...</div>
    }
    return (
        <div className='bg-[#F5F8FA] py-8'>
            <div className="container mx-auto">
                <div className="flex flex-col w-2/3 mx-auto">
                    {
                        posts.map(post => <Post key={post._id} post={post} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Media;