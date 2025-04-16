import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import udLogo from '../../assets/udLogo.png';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src={udLogo}
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    {/* Hamburger Icon */}
                    <button
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>

                    {/* Navigation Links for Large Screens */}
                    <ul className="hidden lg:flex lg:space-x-8 text-gray-700 font-medium">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block py-2 px-3 ${
                                        isActive
                                            ? 'text-orange-700'
                                            : 'hover:text-orange-700'
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `block py-2 px-3 ${
                                        isActive
                                            ? 'text-orange-700'
                                            : 'hover:text-orange-700'
                                    }`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `block py-2 px-3 ${
                                        isActive
                                            ? 'text-orange-700'
                                            : 'hover:text-orange-700'
                                    }`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                        <Link
                to="/auth/login"
                onClick={toggleMenu}
                className="block py-2 px-4 text-gray-700 hover:text-orange-700 bg-gray-100 rounded-lg"
            >
                Log in
            </Link>

                        </li>
                    </ul>
                </div>

                {/* Fullscreen Menu for Small Screens */}
                <div
                    className={`${
                        isOpen ? 'fixed' : 'hidden'
                    } inset-0 bg-white z-40 flex flex-col justify-center items-center lg:hidden`}
                >
                    <button
                        className="absolute top-4 right-4 text-gray-500 hover:bg-gray-100 p-2 rounded-lg focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                    <ul className="flex flex-col gap-8 text-center text-lg font-medium">
                        <li>
                            <NavLink
                                to="/"
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `block py-2 px-4 ${
                                        isActive
                                            ? 'text-orange-700'
                                            : 'hover:text-orange-700'
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `block py-2 px-4 ${
                                        isActive
                                            ? 'text-orange-700'
                                            : 'hover:text-orange-700'
                                    }`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `block py-2 px-4 ${
                                        isActive
                                            ? 'text-orange-700'
                                            : 'hover:text-orange-700'
                                    }`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <Link
                                to="/auth/login"
                                onClick={toggleMenu}
                                className="block py-2 px-4 text-gray-700 hover:text-orange-700"
                            >
                                Log in
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}