import React from 'react';
import ecomIcon from '../../../images/online-shopping.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    AOS.init();
    return (
        <div className='py-16 container mx-auto'>
            <h2 className='text-4xl font-bold text-center text-primary leading-relaxed'>Our Dedicated Services</h2>
            <div className='h-[2px] w-60 mx-auto bg-primary'></div>
            <div className='my-14 grid grid-cols-3 grid-rows-2 gap-6'>
                <div data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-once="false" class="card pt-6 rounded-none shadow">
                    <div className='mx-auto'>
                        <img src={ecomIcon} alt="" class="w-16" />
                    </div>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl uppercase text text-neutral">Shoes!</h2>
                        <p className='text-neutral'>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn bg-primary rounded-none border-none text-white hover:bg-[#106698]">View Details</button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-once="false" class="card pt-6 rounded-none shadow">
                    <div className='mx-auto'>
                        <img src={ecomIcon} alt="" class="w-16" />
                    </div>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl uppercase text text-neutral">Shoes!</h2>
                        <p className='text-neutral'>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn bg-primary rounded-none border-none text-white hover:bg-[#106698]">View Details</button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-once="false" class="card pt-6 rounded-none shadow">
                    <div className='mx-auto'>
                        <img src={ecomIcon} alt="" class="w-16" />
                    </div>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl uppercase text text-neutral">Shoes!</h2>
                        <p className='text-neutral'>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn bg-primary rounded-none border-none text-white hover:bg-[#106698]">View Details</button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-once="false" class="card pt-6 rounded-none shadow">
                    <div className='mx-auto'>
                        <img src={ecomIcon} alt="" class="w-16" />
                    </div>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl uppercase text text-neutral">Shoes!</h2>
                        <p className='text-neutral'>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn bg-primary rounded-none border-none text-white hover:bg-[#106698]">View Details</button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-once="false" class="card pt-6 rounded-none shadow">
                    <div className='mx-auto'>
                        <img src={ecomIcon} alt="" class="w-16" />
                    </div>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl uppercase text text-neutral">Shoes!</h2>
                        <p className='text-neutral'>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn bg-primary rounded-none border-none text-white hover:bg-[#106698]">View Details</button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-once="false" class="card pt-6 rounded-none shadow">
                    <div className='mx-auto'>
                        <img src={ecomIcon} alt="" class="w-16" />
                    </div>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl uppercase text text-neutral">Shoes!</h2>
                        <p className='text-neutral'>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn bg-primary rounded-none border-none text-white hover:bg-[#106698]">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;