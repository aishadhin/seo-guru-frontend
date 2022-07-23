import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import work from '../../../images/hero.png'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const Work = () => {
    return (
        <div className='bg-accent py-16'>
            <div className='container mx-auto'>
                <div class="hero">
                    <div class="lg:flex items-center w-full justify-between gap-16">
                        <img data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="500"
                            data-aos-once="false" src={work} class="px-6 rounded-lg " alt='' />
                        <div className='lg:w-[50%] p-6 my-6 lg:my-0'>
                            <h2 className='lg:text-4xl text-2xl font-bold text-primary leading-relaxed'>Our Dedicated Services</h2>
                            <div className='h-[2px] w-60 bg-primary'></div>
                            <p class="my-6 font-medium text-neutral"> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                            <div className='flex mt-5 mb-6'>
                                <FontAwesomeIcon className='text-primary mt-1' icon={faCircleCheck} />
                                <p class="pl-3 text-neutral"> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                            </div>
                            <div className='flex mt-5 mb-6'>
                                <FontAwesomeIcon className='text-primary mt-1' icon={faCircleCheck} />
                                <p class="pl-3 text-neutral"> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                            </div>
                            <div className='flex mt-5 mb-6'>
                                <FontAwesomeIcon className='text-primary mt-1' icon={faCircleCheck} />
                                <p class="pl-3 text-neutral"> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;