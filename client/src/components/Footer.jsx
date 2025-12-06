import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-secondary py-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-2xl font-bold text-gradient">Portfolio</span>
                        <p className="text-gray-400 text-sm mt-2">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/727623BIT053Evelin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/evelin-j-1a46a62a4" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300">
                            LinkedIn
                        </a>
                        <a href="mailto:evelinj710@gmail.com" className="text-gray-400 hover:text-accent transition-colors duration-300">
                            E-mail
                        </a>
                        <a href="https://leetcode.com/u/Evelin710/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300">
                            LeetCode
                        </a>
                        <a href="https://www.hackerrank.com/profile/evelin710lin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300">
                            HackerRank
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
