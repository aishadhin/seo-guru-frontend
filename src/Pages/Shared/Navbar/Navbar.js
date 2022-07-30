import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar text-neutral shadow">
            <div className='container mx-auto'>
                <div class="navbar-start w-full flex flex-row-reverse justify-between">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu right-[-9%] rounded-none menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='hover:bg-primary hover:text-white'><Link to="/">Home</Link></li>
                            <li className='hover:bg-primary hover:text-white' tabindex="0">
                                <Link to="/" class="justify-between">
                                Services
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-slate-200 z-[99] shadow bg-white text-neutral left-0 top-[42px] rounded-none">
                                    <li className='hover:bg-primary hover:text-white text-'><Link to="/">Submenu 1</Link></li>
                                    <li className='hover:bg-primary hover:text-white'><Link to="/">Submenu 2</Link></li>
                                </ul>
                            </li>
                            <li className='hover:bg-primary hover:text-white'><Link to="/">Link Building</Link></li>
                            <li className='hover:bg-primary hover:text-white'><Link to="/">Contact</Link></li>
                        </ul>
                    </div>
                    <a class="normal-case text-xl" href='#'>Seo Guru</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li className='hover:bg-primary hover:text-white'><Link to="/">Home</Link></li>
                        <li className='hover:bg-primary hover:text-white' tabindex="0">
                            <Link to="/">
                                Services
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul style={{ borderRadius: '0px' }} class="p-2 bg-white p-0">
                                <li className='hover:bg-primary text-primary hover:text-white'><Link to="/">Submenu 1</Link></li>
                                <li className='hover:bg-primary text-primary hover:text-white'><Link to="/">Submenu 2</Link></li>
                            </ul>
                        </li>
                        <li className='hover:bg-primary hover:text-white'><Link to="/">Link Building</Link></li>
                        <li className='hover:bg-primary hover:text-white'><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;