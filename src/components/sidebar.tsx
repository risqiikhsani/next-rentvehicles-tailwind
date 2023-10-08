import React from 'react';
import Link from 'next/link';

const Sidebar = () => (
    <nav className="bg-gray-800 text-white h-screen w-64 py-4 px-2 fixed top-0 left-0 overflow-y-auto">
        {/* Logo */}
        <div className="text-center">
            <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-500">

                Your Logo

            </Link>
        </div>
        {/* Navigation Links */}
        <ul className="mt-8">
            <li className="mb-4">
                <Link href="/" className="flex items-center text-white hover:text-blue-400">

                    <svg
                        className="w-6 h-6 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {/* Insert your icon here */}
                    </svg>
                    Dashboard

                </Link>
            </li>
            <li className="mb-4">
                <Link href="/about" className="flex items-center text-white hover:text-blue-400">

                    <svg
                        className="w-6 h-6 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {/* Insert your icon here */}
                    </svg>
                    About

                </Link>
            </li>
            {/* Add more navigation items as needed */}
        </ul>
    </nav>
);

export default Sidebar;
