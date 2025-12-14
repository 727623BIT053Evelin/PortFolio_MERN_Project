import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-primary px-4 sm:px-6 lg:px-8 pt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">

                {/* Image Section */}
                <div className="relative">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl relative z-10">
                        <img
                            src="/profile.jpg"
                            alt="Evelin Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Decorative Circle behind */}

                </div>

                {/* Text Section */}
                <div className="text-center md:text-left max-w-2xl">
                    <h2 className="text-xl text-white font-medium mb-2">Hi I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-accent mb-6 tracking-tight">
                        Evelin
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        Welcome to my portfolio website! I'm a passionate and aspiring software engineer with a strong
                        desire to create innovative solutions and push the boundaries of technology. With a deep love for
                        coding and problem-solving, I am constantly seeking opportunities to learn and grow in this
                        ever-evolving field.
                    </p>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
                        <a
                            href="/727623BIT053_Evelin_2026.pdf"
                            download="Evelin_Resume_2026.pdf"
                            className="px-8 py-3 rounded-full border-2 border-accent text-white font-medium hover:bg-accent hover:text-primary transition-all duration-300"
                        >
                            Download CV
                        </a>
                        <Link
                            to="/contact"
                            className="px-8 py-3 rounded-full border-2 border-gray-600 text-white font-medium hover:border-white transition-all duration-300"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center justify-center md:justify-start gap-6">
                        <a href="mailto:evelin710lin@gmail.com" className="text-gray-400 hover:text-accent transition-colors duration-300" title="Email">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                        </a>
                        <a href="https://github.com/727623BIT053Evelin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300" title="GitHub">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/evelin-j-1a46a62a4" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300" title="LinkedIn">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                        <a href="https://leetcode.com/u/Evelin710/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300" title="LeetCode">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 13h7.5" />
                                <path d="M9.424 7.268l4.999 -4.999" />
                                <path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0" />
                            </svg>
                        </a>
                        <a href="https://www.hackerrank.com/profile/evelin710lin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300" title="HackerRank">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <g transform="translate(12, 12) scale(1.2) translate(-12, -12)">
                                    <path d="M2 17h3v-4h4v4h3v-10h-3v4h-4v-4h-3v10z" />
                                    <path d="M14 7h8v10h-8v-10z" />
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
