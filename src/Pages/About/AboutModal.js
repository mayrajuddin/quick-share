import React from 'react';

const AboutModal = () => {
    const modalForm = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        console.log(name);
    }
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="about-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box ">
                    <h3 className="font-bold text-lg capitalize border-b pb-3">update your information</h3>
                    <form onSubmit={modalForm} className=''>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="col-span-1 my-2">
                                <label className="label"> Name </label>
                                <input name='name' type="text" placeholder="Full Name" className="input w-full input-bordered border-[#eee] focus:outline-none" />
                            </div>
                            <div className="col-span-1 my-2">
                                <label className="label"> Email </label>
                                <input type="text" placeholder="Email" className="input w-full input-bordered border-[#eee] focus:outline-none" />
                            </div>
                            <div className="col-span-2 my-2">
                                <label className="label"> Collage/University </label>
                                <input type="text" placeholder="Email" className="input w-full input-bordered border-[#eee] focus:outline-none" />
                            </div>
                            <div className="col-span-2 my-2">
                                <label className="label"> Address </label>
                                <input type="text" placeholder="Email" className="input w-full input-bordered border-[#eee] focus:outline-none" />
                            </div>
                        </div>
                        <div className="modal-action">
                            <button className='btn bg-[#3097D1] border-0' type='submit'>Save</button>
                            <label htmlFor="about-modal" className="btn capitalize ">Cancle</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AboutModal;