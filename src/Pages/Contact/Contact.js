import React from 'react';
import address from '../../images/address.png'

const Contact = () => {
    return (
        <div className=' bg-primary'>
            <h2 className='text-center py-14 text-5xl text-white font-bold'>Contact Us</h2>
            <div className='py-14 flex px-12 bg-accent'>
                <div className='w-1/2'>
                    <div className='flex mb-6'>
                        <img src={address} className="w-12" alt=""  />
                        <div className='ml-6'>
                            <h3 className='text-neutral text-xl'>address</h3>
                            <p className='text-neutral'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className='flex mb-6'>
                        <img src={address} className="w-12" alt=""  />
                        <div className='ml-6'>
                            <h3 className='text-neutral text-xl'>address</h3>
                            <p className='text-neutral'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className='flex mb-6'>
                        <img src={address} className="w-12" alt=""  />
                        <div className='ml-6'>
                            <h3 className='text-neutral text-xl'>address</h3>
                            <p className='text-neutral'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <form className='w-2/3 mx-auto' action="">
                        <input type="text" placeholder="Name" class="input my-1 border border-[#00a2ff25] input-bordered w-full" />
                        <input type="email" placeholder="Email" class="input my-1 border border-[#00a2ff25] input-bordered w-full" />
                        <textarea class="textarea textarea-bordered w-full border border-[#00a2ff25] my-1" placeholder="Your Message"></textarea>
                        <input className='btn btn-primary w-full rounded-sm' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;