import React from 'react';
import Post from './Post';

const Media = () => {
    return (
        <div className='bg-[#F5F8FA] py-8'>
            <div className="container mx-auto">
                <div className="flex flex-col w-2/3 mx-auto">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    );
};

export default Media;