import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { BsImage } from "react-icons/bs";
import { AuthContext } from '../../Context/AuthProvider';
const CreatePost = () => {
    const { register, handleSubmit, reset } = useForm()
    const imgHostKey = process.env.REACT_APP_IMGBB_KEY
    const { user, loading } = useContext(AuthContext)
    console.log(user);
    const handlePost = data => {
        const text = data.text
        const img = data.img[0]

        //host img in imgbb
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const post = {
                        text, imgURL: imgData.data.url, userName: user.displayName, email: user.email, userImg: user.photoURL,
                    }
                    //save posts to db
                    fetch(`${process.env.REACT_APP_API_URI}/posts`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(post)
                    }).then(res => res.json())
                        .then(result => {
                            reset()
                            if (result.acknowledged) {
                                toast.success('Post Add Successful')
                            }
                        })
                }
            })
    }
    if (loading) {
        return <div>loading...</div>
    }
    return (
        <section className="">
            <div className="bg-base-100 text-gray-900 border border-[#eee] p-4">
                <form onSubmit={handleSubmit(handlePost)} className='flex flex-col'>
                    <textarea {...register('text')} className="post-title textarea textarea-bordered focus:outline-none w-full h-6 " placeholder="Write your post"></textarea>
                    <div className=' post-content'>
                        <div className="form-control my-6 max-w-xs">
                            <label className="input-group rounded-r-0">
                                <span className='text-[#3097D1] bg-[#F5F8FA] border border-[#eee]'><BsImage /> </span>
                                <input {...register('img')} type="file" className=" border p-2  border-[#eee]" />
                            </label>
                        </div>
                    </div>
                    <div className='flex-end'>
                        <button type='submit' className='btn bg-[#3097D1] btn-md text-lg text-base-100  border border-[#eee]'>post</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CreatePost;