
import React from 'react';
import { FaComments, FaHeart, FaRegThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const { imgURL, text, userName, userImg, _id } = post
    return (
        <section className='bg-base-100 text-gray-900 border border-[#eee] p-4 border-t-0'>
            <div className='flex flex-col  border'>
                <div className="flex justify-between items-center p-4">
                    <div className='flex items-center'>
                        <img src={userImg} alt="" className="w-16 h-16  mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                        <p className='ml-3 font-semibold capitalize'>{userName}</p>
                    </div>
                    <p>time</p>
                </div>
                <article className='px-4'>
                    <p>{text}</p>
                </article>
                <div className='px-4 py-2'>
                    <figure className='grid grid-cols-2 gap-3'>
                        <img src={imgURL} alt="Shoes" className='border border-[#eee] p-1' />
                    </figure>
                </div>
                <div className='flex justify-between items-center border-t py-2 px-4'>
                    <div className=''>
                        <button type='button'><FaRegThumbsUp size={24} className='inline mr-2' /></button>
                        <button type='button'><FaHeart size={24} className='inline' /></button>
                    </div>
                    <div>
                        <button type='button'><FaComments size={24} /></button>
                    </div>
                    <div>
                        <Link to={`/media/${_id}`} type='button' className='btn btn-sm bg-[#3097D1] border-0'>Details</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Post;