import React from 'react';
import facebook from '../../../images/fb.png'


const Footer = () => {
    return (
        <div className='bg-primary'>
            <footer class="footer container mx-auto py-12 px-6 justify-evenly text-base-content ">
                <div>
                    <span class="text-4xl font-semibold text-white">Seo Guru</span>
                    <a class="link link-hover text-white">Branding</a>
                    <a class="link link-hover text-white">Design</a>
                    <a class="link link-hover text-white">Marketing</a>
                    <a class="link link-hover text-white">Advertisement</a>
                </div>
                <div>
                    <span class="text-lg font-semibold text-white">Company</span>
                    <a class="link link-hover text-white">About us</a>
                    <a class="link link-hover text-white">Contact</a>
                    <a class="link link-hover text-white">Jobs</a>
                    <a class="link link-hover text-white">Press kit</a>
                </div>
                <div>
                    <span class="text-lg font-semibold text-white">Social</span>
                    <div class="grid grid-flow-col gap-4">
                        <a href="" className='bg-white p-1 rounded-full'>
                            <img className='w-[26px]' src={facebook} alt="" />
                        </a>
                        <a href="" className='bg-white p-1 rounded-full'>
                            <img className='w-[26px]' src={facebook} alt="" />
                        </a>
                        <a href="" className='bg-white p-1 rounded-full'>
                            <img className='w-[26px]' src={facebook} alt="" />
                        </a>
                        <a href="" className='bg-white p-1 rounded-full'>
                            <img className='w-[26px]' src={facebook} alt="" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;