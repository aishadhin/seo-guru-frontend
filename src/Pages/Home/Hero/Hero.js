import React from 'react';
import hero from '../../../images/hero.png';
import Zoom from 'react-reveal/Zoom';

const Hero = () => {
    return (
        <div className='bg-primary py-16'>
            <div className='container mx-auto'>
                <div class="hero">
                    <div class="flex items-center w-full justify-between flex-col lg:flex-row-reverse">
                        <Zoom>
                            <img src={hero} class=" rounded-lg " alt='' />
                        </Zoom>
                        <div className='w-[50%]'>
                            <h1 class="text-7xl font-bold text-white uppercase">Seo guru</h1>
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