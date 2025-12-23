'use client'

import React, { useState } from "react";
import "../globals.css";
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '500', '700', '900']
})

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <nav className="fixed top-0 left-0 right-0 bg-darkCard border-b border-neonGreen/20 z-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-center">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button 
                            type="button" 
                            onClick={toggleMenu}
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-neonGreen hover:bg-neonGreenDark hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neonGreen transition-all" 
                            aria-controls="mobile-menu" 
                            aria-expanded={isMenuOpen}
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
                            {/* Icon when menu is closed - Hamburger */}
                            <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            {/* Icon when menu is open - X */}
                            <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex justify-center items-center hidden sm:ml-6 sm:block">
                            <div className="flex justify-center items-center">
                                <a href="/" className={`navbar-link rounded-md px-3 py-2 text-sm font-medium text-lightGreen transition-all duration-300 ${orbitron.className}`}>Dashboard</a>
                                <a href="/aboutme" className={`navbar-link rounded-md px-3 py-2 text-sm font-medium text-lightGreen transition-all duration-300 ${orbitron.className}`}>About Me</a>
                                <a href="/workexperience" className={`navbar-link rounded-md px-3 py-2 text-sm font-medium text-lightGreen transition-all duration-300 ${orbitron.className}`}>Work Experience</a>
                                <a href="/project" className={`navbar-link rounded-md px-3 py-2 text-sm font-medium text-lightGreen transition-all duration-300 ${orbitron.className}`}>Projects</a>
                                <a href="/contact" className={`navbar-link rounded-md px-3 py-2 text-sm font-medium text-lightGreen transition-all duration-300 ${orbitron.className}`}>Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile menu - Only show when isMenuOpen is true */}
            {isMenuOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2 border-t border-neonGreen/20">
                        <a 
                            href="/" 
                            onClick={toggleMenu}
                            className={`navbar-link-mobile block rounded-md px-3 py-2 text-base font-medium text-lightGreen transition-all duration-300 ${orbitron.className}`}
                        >
                            Dashboard
                        </a>
                        <a 
                            href="/aboutme" 
                            onClick={toggleMenu}
                            className={`navbar-link-mobile block rounded-md px-3 py-2 text-base font-medium text-lightGreen transition-all duration-300 ${orbitron.className}`}
                        >
                            About Me
                        </a>
                        <a 
                            href="/workexperience" 
                            onClick={toggleMenu}
                            className={`navbar-link-mobile block rounded-md px-3 py-2 text-base font-medium text-lightGreen transition-all duration-300 ${orbitron.className}`}
                        >
                            Work Experience
                        </a>
                        <a 
                            href="/project" 
                            onClick={toggleMenu}
                            className={`navbar-link-mobile block rounded-md px-3 py-2 text-base font-medium text-lightGreen transition-all duration-300 ${orbitron.className}`}
                        >
                            Projects
                        </a>
                        <a 
                            href="/contact" 
                            onClick={toggleMenu}
                            className={`navbar-link-mobile block rounded-md px-3 py-2 text-base font-medium text-lightGreen transition-all duration-300 ${orbitron.className}`}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
