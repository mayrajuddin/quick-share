import React, { useContext } from 'react';
import { FaComments } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PostDetails = () => {
    const { loading } = useContext(AuthContext)
    const post = useLoaderData()
    const { imgURL, userName, text, userImg } = post
    console.log(post);
    if (loading) {
        return <div>loading</div>
    }
    return (
        <div className='bg-[#F5F8FA] py-8'>
            <div className="container mx-auto">
                <div className=" w-2/3 mx-auto">
                    <div className='flex flex-col  border'>
                        <div className="flex justify-between items-center p-4">
                            <div className='flex items-center'>
                                <img src={userImg} alt="" className="w-16 h-16  mx-auto rounded-full  aspect-square" />
                                <div className='ml-3'>
                                    <p className='font-semibold capitalize'>{userName}</p>
                                    <p>time</p>
                                </div>
                            </div>
                        </div>
                        <div className='px-4 py-2'>
                            <figure className='grid grid-cols-2 gap-3'>
                                <img src={imgURL} alt="Shoes" className='border border-[#eee] p-1' />
                            </figure>
                        </div>
                        <article className='px-4 py-2'>
                            <p>{text}</p>
                        </article>
                        <div className='flex justify-between items-center border-t py-2 px-4'>
                            <div className='flex gap-3'>
                                <p>likes</p>
                                <p>reacts</p>
                            </div>
                            <div>
                                <FaComments size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;