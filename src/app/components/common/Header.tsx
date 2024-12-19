"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-transparent text-black">
            <nav className="container mx-2 px-1 py-1 flex items-center justify-between">

                <Link href="/" className="text-xl font-bold">
                    <Image
                        src="/images/clara_logo.png"
                        alt="Logo"
                        width={150}
                        height={150}
                    />
                </Link>

                <ul
                    className={`md:flex md:items-center md:static absolute w-full left-0 md:w-auto md:py-0 py-2 md:pl-0 pl-7 md:opacity-100 ${isOpen ? 'top-16 opacity-100' : 'top-[-400px]'
                        } ${isOpen ? 'bg-white' : 'bg-white'} transition-all ease-in duration-500`}
                >
                    <li className="mx-4 my-2 md:my-0">
                        <Link href="#contact" className="hover:text-gray-400 font-bold">
                            About
                        </Link>
                    </li>
                    <li className="mx-4 my-2 md:my-0">
                        <Link href="#services" className="hover:text-gray-400 font-bold">
                            Services
                        </Link>
                    </li>
                    <li className="mx-4 my-2 md:my-0">
                        <Link href="#contact" className="hover:text-gray-400 font-bold">
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl focus:outline-none mr-10">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                <Link href="/" className={`md:block hidden sm:hidden`}>
                    ---
                </Link>
            </nav>
        </header>
    );
};

export default Header;