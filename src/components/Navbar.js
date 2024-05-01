
import Link from 'next/link';
import React from 'react';

const menu = [
    {
        link: '/',
        title: 'Home'
    },
    {
        link: '/login',
        title: 'Login'
    },
    {
        link: '/projects',
        title: 'Projects'
    },
]

const Navbar = () => {
    return (
        <nav className='sticky top-0 z-10 shadow-md bg-white'>
            <div className='py-4 flex justify-between items-center max-w-6xl mx-auto'>
                <div className='logo'>
                    <Link href={"/"} className='font-bold'>Task <span className='uppercase text-violet-600'>Hub</span> </Link>
                </div>
                <ul className='flex gap-4'>
                    {menu.map((item) => (
                        <li key={item.title} className={`hover:text-violet-600 font-semibold transition-all duration-200`}>
                            <Link href={item.link}>{item.title}</Link>
                        </li>))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;