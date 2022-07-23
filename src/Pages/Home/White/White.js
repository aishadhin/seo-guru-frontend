import React from 'react';
import hero from '../../../images/hero.png'

const White = () => {
    return (
        <div className='bg-accent'>
            <div className='py-16 container lg:flex items-center w-full justify-between gap-16 mx-auto'>
                <div className='lg:w-[50%] p-6'>
                    <h2 className='lg:text-4xl text-2xl font-bold text-primary leading-relaxed'>White Label SEO Agency</h2>
                    <div className='h-[2px] w-60 bg-primary'></div>
                    <p class="my-6 text-neutral"> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. Quaerat fugiat ut assumenda excepturi exercitationem quasi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>

                    <p class="text-neutral"> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                    <button class="btn btn-primary mt-10 text-white bg-primary rounded-none">Get Started</button>
                </div>
                <img src={hero} class="px-6 rounded-lg " alt='' />
            </div>
        </div>
    );
};

export default White;