import React from 'react';
import CountUp from 'react-countup';


const Counter = () => {
    return (
        <div className='container py-16 mx-auto'>
            <div className='p-6 lg:flex justify-evenly'>
                <div className='shadow p-6 mt-6'>
                    <div className='mx-auto w-[150px] h-[150px] flex items-center justify-center rounded-full border-primary border-4'>
                        <CountUp end={100} className='text-primary text-6xl font-bold' />
                    </div>
                    <h3 className='text-xl text-center uppercase mt-5 text-primary font-semibold'>Project Complete</h3>
                </div>
                <div className='shadow p-6 mt-6'>
                    <div className='mx-auto w-[150px] h-[150px] flex items-center justify-center rounded-full border-primary border-4'>
                        <CountUp end={100} className='text-primary text-6xl font-bold' />
                    </div>
                    <h3 className='text-xl text-center uppercase mt-5 text-primary font-semibold'>Project Complete</h3>
                </div>
                <div className='shadow p-6 mt-6'>
                    <div className='mx-auto w-[150px] h-[150px] flex items-center justify-center rounded-full border-primary border-4'>
                        <CountUp end={100} className='text-primary text-6xl font-bold' />
                    </div>
                    <h3 className='text-xl text-center uppercase mt-5 text-primary font-semibold'>Project Complete</h3>
                </div>
            </div>

            <div className='my-20 px-6 lg:flex gap-10'>
                <div>
                    <h2 className='lg:text-3xl text-2xl font-semibold text-primary leading-relaxed'>Our Mission</h2>
                    <div className='h-[2px] w-40 bg-primary'></div>
                    <p className='mt-6 text-neutral'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi necessitatibus odio quos adipisci reiciendis, explicabo consequuntur aliquam! Facilis perspiciatis ullam aliquam expedita voluptatum, modi explicabo doloremque dolorum quod assumenda laboriosam.</p>
                </div>
                <div className='mt-10 lg:mt-0'>
                    <h2 className='lg:text-3xl text-2xl font-semibold text-primary leading-relaxed'>Our Vision</h2>
                    <div className='h-[2px] w-40 bg-primary'></div>
                    <p className='mt-6 text-neutral'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi necessitatibus odio quos adipisci reiciendis, explicabo consequuntur aliquam! Facilis perspiciatis ullam aliquam expedita voluptatum, modi explicabo doloremque dolorum quod assumenda laboriosam.</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;