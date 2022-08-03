import React from 'react';
import location from '../../images/location.png'
import phone from '../../images/phone-call.png'
import envelope from '../../images/envelope.png'
import skype from '../../images/skype.png'

const Contact = () => {
    return (
        <div className=' bg-primary'>
            <h2 className='text-center py-14 text-5xl text-white font-bold'>Contact Us</h2>
            <div className='py-14 px-12 bg-accent'>
                <div className='lg:w-[50%] p-3 bg-red-100 mx-auto rounded'>
                    <form className=' mx-auto' action="">
                        <input type="text" placeholder="Name" class="input text-neutral my-1 border border-[#00a2ff25] input-bordered w-full" />
                        <input type="email" placeholder="Email" class="input my-1 text-neutral border border-[#00a2ff25] input-bordered w-full" />
                        <textarea rows="4" class="textarea textarea-bordered text-neutral w-full border border-[#00a2ff25] my-1" placeholder="Your Message"></textarea>
                        <input className='btn btn-primary w-full rounded-sm' type="submit" value="Send" />
                    </form>
                </div>
                <div className='bg-primary mt-20 flex items-center'>
                    <div className='lg:w-[40%] flex flex-col'>
                        <img className='mx-auto w-[50px] mb-3' src={location} alt="" />
                        <h2 className='text-white text-2xl text-center mb-3'>Head Office: Bangladesh</h2>
                        <p className='text-white text-center mb-3'>H-2142/19129, P-KHA-95/2, 2nd Floor, TanPara, Dhaka 1229</p>
                        <div className='mx-auto'>
                            <div className='flex w-full justify-center items-center'>
                                <span>
                                    <img className='w-1/2' src={phone} alt="" />
                                </span>
                                <p className='text-white text-center mb-1'>+88 01703-928204</p>
                            </div>
                            <div className='flex w-full justify-center items-center'>
                                <span>
                                    <img className='w-1/2' src={envelope} alt="" />
                                </span>
                                <p className='text-white text-center mb-1'>contact@seoguru.com.bd</p>
                            </div>
                            <div className='flex w-full justify-center items-center'>
                                <span>
                                    <img className='w-1/2' src={skype} alt="" />
                                </span>
                                <p className='text-white text-center mb-1'>Contact VIA Skype</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[60%]'>
                        <div className="mapouter h-full">
                            <iframe className='w-full' height='300' id="gmap_canvas" src="https://maps.google.com/maps?q=TanPara,%20Dhaka%201229&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                </div>
                <div className='bg-primary mt-20 flex flex-row-reverse items-center'>
                    <div className='lg:w-[40%] flex flex-col'>
                        <img className='mx-auto w-[50px] mb-3' src={location} alt="" />
                        <h2 className='text-white text-2xl text-center mb-3'>Zonal Office: United States</h2>
                        <p className='text-white text-center mb-3'>4006 Foothills Blvd Roseville, CA 95747 United States</p>
                        <div className='mx-auto'>
                            <div className='flex w-full justify-center items-center'>
                                <span>
                                    <img className='w-1/2' src={phone} alt="" />
                                </span>
                                <p className='text-white text-center mb-1'>+1505-226-4928</p>
                            </div>
                            <div className='flex w-full justify-center items-center'>
                                <span>
                                    <img className='w-1/2' src={envelope} alt="" />
                                </span>
                                <p className='text-white text-center mb-1'>contact@seoguru.com.bd</p>
                            </div>
                            <div className='flex w-full justify-center items-center'>
                                <span>
                                    <img className='w-1/2' src={skype} alt="" />
                                </span>
                                <p className='text-white text-center mb-1'>Contact VIA Skype</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[60%]'>
                        <div className="mapouter h-full">
                            <iframe className='w-full' height='300' id="gmap_canvas" src="https://maps.google.com/maps?q=TanPara,%20Dhaka%201229&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;