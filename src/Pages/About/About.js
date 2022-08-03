import React from 'react';
import abt from '../../images/aboutImg.png'

const About = () => {
    return (
        <div className=''>
            <h2 className='text-center bg-primary py-14 text-5xl text-white font-bold'>About</h2>
            <div className='bg-white py-10 container mx-auto'>
                <h2 className='text-neutral text-3xl font-semibold'>Best SEO Service Provider In Bangladesh</h2>
                <div className='bg-primary w-[150px] h-[2px]'></div>
                <p className='mt-6 text-neutral'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate ut amet hic distinctio totam rem obcaecati saepe? Reiciendis sed voluptas</p>
                <p className='mt-2 text-neutral'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quia magnam culpa neque hic, quisquam, architecto, molestiae provident eveniet obcaecati laboriosam sunt atque saepe! Ea ullam facere accusantium soluta earum?</p>
                <p className='mt-2 text-neutral'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate ut amet hic distinctio totam rem obcaecati saepe? Reiciendis sed voluptas</p>
            </div>
            <div className='container mx-auto flex gap-10 bg-accent'>
                <div className='w-full'>
                    <img src={abt} alt="" />
                </div>
                <div className='pr-[50px]'>
                    <h2 className='text-neutral text-3xl pt-5 font-semibold'>Best SEO Service Provider In Bangladesh</h2>
                    <div className='bg-primary w-[150px] h-[2px]'></div>
                    <p className='mt-6 text-neutral'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, amet suscipit! Voluptates neque rem vero consequuntur omnis doloribus consequatur ea voluptatem magni placeat optio repudiandae, similique, voluptas soluta quaerat dolore!</p>
                    <p className='font-semibold text-neutral my-10'>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                    <div tabindex="0" class="collapse collapse-plus bg-base-100">
                        <div class="collapse-title text-neutral font-medium">
                            Focus me to see content
                        </div>
                        <div class="collapse-content">
                            <p className='text-neutral'>Attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabindex="0" class="collapse mt-3 collapse-plus bg-base-100">
                        <div class="collapse-title text-neutral font-medium">
                            Focus me to see content
                        </div>
                        <div class="collapse-content text-neutral">
                            <p>Attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabindex="0" class="collapse mt-3 collapse-plus bg-base-100">
                        <div class="collapse-title text-neutral font-medium">
                            Focus me to see content
                        </div>
                        <div class="collapse-content text-neutral">
                            <p>Attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabindex="0" class="collapse mt-3 collapse-plus bg-base-100">
                        <div class="collapse-title text-neutral font-medium">
                            Focus me to see content
                        </div>
                        <div class="collapse-content text-neutral">
                            <p>Attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;