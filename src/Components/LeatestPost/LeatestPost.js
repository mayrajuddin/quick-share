import React from 'react';
import { FaComments, FaHeart, FaRegThumbsUp } from 'react-icons/fa';

const LeatestPost = () => {
    return (
        <section className='bg-base-100 text-gray-900 border border-[#eee] p-4 border-t-0'>
            <div className='flex flex-col  border'>
                <div className="flex justify-between items-center p-4">
                    <div className='flex items-center'>
                        <img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-16 h-16  mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                        <p className='ml-3 font-semibold capitalize'>name here</p>
                    </div>
                    <p>date</p>
                </div>
                <article className='px-4'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iste voluptate sint molestias eos deleniti ut possimus, voluptates cupiditate quidem!</p>
                </article>
                <div className='px-4 py-2'>
                    <figure className='grid grid-cols-2 gap-3'>
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className='border border-[#eee] p-1' />
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className='border border-[#eee] p-1' />
                    </figure>
                </div>
                <div className='flex justify-between items-center border-t py-2 px-4'>
                    <div className=''>
                        <FaRegThumbsUp size={24} className='inline mr-2' />
                        <FaHeart size={24} className='inline' />
                    </div>
                    <div>
                        <FaComments size={24} />
                    </div>
                    <div>
                        <button type='button' className='btn btn-sm bg-[#3097D1] border-0'>Details</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeatestPost;