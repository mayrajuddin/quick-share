import React from 'react';
import { BsImage } from "react-icons/bs";
const CreatePost = () => {
    return (
        <section className="">
            <div className="">
                <div className=" bg-base-100 text-gray-900 border border-[#eee] p-4">
                    <form action="" className='flex flex-col'>
                        <textarea className="post-title textarea textarea-bordered focus:outline-none w-full h-6 " placeholder="Write your post"></textarea>
                        <div className=' post-content'>
                            <div className="form-control my-6 max-w-xs">
                                <label className="input-group rounded-r-0">
                                    <span className='text-[#3097D1] bg-[#F5F8FA] border border-[#eee]'><BsImage /> </span>
                                    <input type="file" className=" border p-2  border-[#eee]" />
                                </label>
                            </div>
                        </div>
                        <div className='flex-end'>

                            <button type='submit' className='btn bg-[#3097D1] btn-md text-lg text-base-100  border border-[#eee]'>post</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CreatePost;