import React from 'react';
import hero from '../../../images/hero.png';
import Zoom from 'react-reveal/Zoom';

const Hero = () => {
    return (
        <div className='bg-primary py-16'>
            <div className='container mx-auto'>
                <div class="hero">
                    <div class="flex items-center w-full justify-between flex-col lg:flex-row-reverse">
                        <img data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="500"
                            data-aos-once="false" src={hero} class=" rounded-lg " alt='' />
                        <div className='lg:w-[50%] p-6'>

                            <h1 class="lg:text-7xl text-3xl font-semibold lg:font-bold text-white uppercase"><Zoom left cascade>Seo guru</Zoom></h1>


                            <p class="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary hover:text-white bg-white rounded-none text-neutral">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;