import React from 'react';
import { BsImage } from "react-icons/bs";
const CreatePost = () => {
    return (
        <section className="">
            <h4 className="text-xl">post</h4>
            <div className="">
                <div className=" bg-base-100 text-gray-900 border border-[#eee] p-4 focus:border-b-0">
                    <form action="" className='flex flex-col'>
                        <textarea className="post-title textarea textarea-bordered focus:outline-none w-full h-6 " placeholder="Write your post"></textarea>
                        <div className=' post-content'>
                            <div className="form-control my-6">
                                <label className="input-group rounded-r-0">
                                    <span className='bg-[#F5F8FA] border border-[#eee]'><BsImage /> </span>
                                    <input type="file" className="max-w-xs border p-2  border-[#eee]" />
                                </label>
                            </div>
                        </div>
                        <div className='flex-end'>

                            <button type='submit' className='btn bg-[#3097D1] text-base-100 text-xl border border-[#eee]'>post</button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default CreatePost;