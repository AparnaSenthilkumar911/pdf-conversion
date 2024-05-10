"use client"

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimesCircle } from "react-icons/fa";
import { Icon } from '@iconify/react';

const Navbar = () =>
{

    const [navbar, setNavbar] = useState( false )

    return (
        <nav className='w-full bg-black text-white fixed top-0 right-0 z-10'>
            <div className='justify-between  mx-auto md:flex md:items-center pt-2 lg:max-w-7xl'>
                <div className='flex justify-between px-3 items-center md:pb-0 md:mt-0 '>
                    <Link href="/">
                        <h2 className='text-3xl text-[var(--primary-color)] md:pb-0 md:mt-0  font-bold uppercase md:text-2xl'>
                        PDF Fusion</h2>
                    </Link>
                    <div className='md:hidden'>
                        <button className=' rounded-md outline-none text-2xl text-[var(--primary-color)]' onClick={() => setNavbar( !navbar )}>
                            {navbar ? <FaTimesCircle /> : <FaBars />}
                        </button>
                    </div>
                </div>
                <div className={`flex justify-self-center  md:block md:pb-0 md:mt-0"${navbar ? 'p-12 md:p-0 block' : 'hidden' }`}>

                <ul className='h-screen justify-end pt-0 items-center md:h-auto md:flex'>
                    <li className='text-left  md:mb-4 uppercase font-bold text-2xl md:text-[18px]  hover:text-[var(--primary-color)] cursor-pointer'>
                        <Link href="/conversion" onClick={() => setNavbar( !navbar )}>Converion</Link>
                    </li>
                    <li className=' text-left md:mb-4 uppercase font-bold text-2xl md:text-[18px] px-4  hover:text-[var(--primary-color)] cursor-pointer'>
                        <Link href="/contact" onClick={() => setNavbar( !navbar )}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default Navbar