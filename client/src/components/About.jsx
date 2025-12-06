import React from 'react';

import geminiLogo from '../assets/gemini-logo.png';
import copilotLogo from '../assets/copilot-logo.png';
import lovableLogo from '../assets/lovable-logo.png';
import antigravityLogo from '../assets/antigravity-logo.png';
import aiHumanizeLogo from '../assets/ai-humanize-logo.png';
import slidesgoLogo from '../assets/slidesgo-logo.png';
import thunderClientLogo from '../assets/thunder-client-logo.png';
import leetcodeIcon from '../assets/leetcode.png';
import hackerrankIcon from '../assets/hackerrank.png';

const About = ({ fromHome }) => {
    const technicalSkills = [
        {
            category: 'Frontend Development', cardColor: 'border-orange-500/50', items: [
                { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: 'bg-orange-500/20' },
                { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: 'bg-blue-500/20' },
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'bg-yellow-400/20' },
                { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'bg-cyan-400/20' },
                { name: 'Tailwind CSS', icon: 'https://api.iconify.design/logos:tailwindcss-icon.svg', color: 'bg-cyan-500/20' },
                { name: 'Bootstrap', icon: 'https://api.iconify.design/logos:bootstrap.svg', color: 'bg-purple-600/20' }
            ]
        },
        {
            category: 'Backend Development', cardColor: 'border-green-500/50', items: [
                { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'bg-green-500/20' },
                { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: 'bg-gray-400/20' }
            ]
        },
        {
            category: 'Database', cardColor: 'border-blue-500/50', items: [
                { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'bg-green-600/20' },
                { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: 'bg-blue-600/20' }
            ]
        },
        {
            category: 'Programming Language', cardColor: 'border-red-500/50', items: [
                { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: 'bg-red-500/20' },
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'bg-blue-400/20' }
            ]
        }
    ];

    const tools = [
        {
            category: 'IDEs & Editors', items: [
                { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: 'bg-blue-500/20' },
                { name: 'IntelliJ IDEA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg', color: 'bg-purple-500/20' }
            ]
        },
        {
            category: 'Version Control', items: [
                { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: 'bg-orange-600/20' },
                { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: 'bg-gray-500/20' }
            ]
        },
        {
            category: 'Database Tools', items: [
                { name: 'MongoDB Compass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'bg-green-600/20' },
                { name: 'MySQL Workbench', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: 'bg-blue-600/20' }
            ]
        },
        {
            category: 'API Testing', items: [
                { name: 'Postman', icon: 'https://www.svgrepo.com/show/354202/postman-icon.svg', color: 'bg-orange-500/20' },
                { name: 'Thunder Client', icon: thunderClientLogo, color: 'bg-purple-400/20' }
            ]
        },
        {
            category: 'Design Tools', items: [
                { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: 'bg-pink-500/20' },
                { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', color: 'bg-cyan-500/20' }
            ]
        },
        {
            category: 'AI Assistants', items: [
                { name: 'ChatGPT', icon: 'https://api.iconify.design/logos:openai-icon.svg', color: 'bg-green-500/20' },
                { name: 'Google Gemini', icon: geminiLogo, color: 'bg-blue-400/20' },
                { name: 'Microsoft Copilot', icon: copilotLogo, color: 'bg-blue-600/20' },
                { name: 'Perplexity', icon: 'https://api.iconify.design/simple-icons:perplexity.svg?color=%2322b8cf', color: 'bg-cyan-600/20' }
            ]
        },
        {
            category: 'Creative AI', items: [
                { name: 'Lovable Ai', icon: lovableLogo, color: 'bg-pink-500/20' },
                { name: 'Antigravity', icon: antigravityLogo, color: 'bg-purple-600/20' },
                { name: 'AI Humanize', icon: aiHumanizeLogo, color: 'bg-yellow-500/20' },
                { name: 'Slidesgo AI', icon: slidesgoLogo, color: 'bg-orange-400/20' }
            ]
        },
        {
            category: 'Coding Platforms', items: [
                { name: 'LeetCode', icon: leetcodeIcon, color: 'bg-yellow-500/20', url: 'https://leetcode.com/u/Evelin710/' },
                { name: 'HackerRank', icon: hackerrankIcon, color: 'bg-green-500/20', url: 'https://www.hackerrank.com/profile/evelin710lin' }
            ]
        }
    ];

    return (
        <section className={`${fromHome ? '' : 'min-h-screen'} bg-primary ${fromHome ? 'py-4' : 'py-20'} px-4 sm:px-6 lg:px-8`}>
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Two Column Cards - My Journey and Personal Details */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 ${fromHome ? 'mt-4' : 'mt-8'}`}>
                    {/* My Journey Card */}
                    <div className="glass rounded-2xl p-8 bg-primary/30 border-2 border-accent">
                        <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
                        <ul className="space-y-4 text-gray-300 leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">•</span>
                                <span>I am currently pursuing my third year Bachelor's Degree in Information Technology. I have built a solid foundation in software development, particularly in areas such as Java and SQL.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">•</span>
                                <span>My expertise in these areas allows me to approach projects with confidence and deliver high-quality results. I have a strong belief in the value of continuous learning and staying adaptable in the ever-evolving world of software engineering.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">•</span>
                                <span>I actively seek opportunities to expand my knowledge and skills, embracing new technologies and approaches. Feel free to explore my work and get in touch if you have any questions or opportunities to collaborate.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Personal Details Card */}
                    <div className="glass rounded-2xl p-8 bg-primary/30 border-2 border-accent">
                        <h3 className="text-2xl font-semibold text-white mb-6">Personal Details</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                                <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <div>
                                    <span className="text-gray-400 text-sm">Name</span>
                                    <p className="text-white font-medium">Evelin J</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                                <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <div>
                                    <span className="text-gray-400 text-sm">Age</span>
                                    <p className="text-white font-medium">20</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                                <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div>
                                    <span className="text-gray-400 text-sm">Email</span>
                                    <p className="text-white font-medium">evelin710lin@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                                <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <span className="text-gray-400 text-sm">Availability</span>
                                    <p className="text-green-400 font-semibold">Full-time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Skills Section */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-white text-center">
                        <span className="text-accent">Technical</span> Skills
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {technicalSkills.map((category) => (
                            <div
                                key={category.category}
                                className="glass rounded-2xl p-6 bg-primary/30 hover:bg-primary/40 transition-all duration-300 border-2 border-white/30 hover:border-accent"
                            >
                                <h3 className="text-lg font-semibold text-white mb-4">{category.category}</h3>
                                <div className="space-y-3">
                                    {category.items.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className={`flex items-center gap-3 p-3 rounded-lg ${skill.color} hover:bg-accent/10 transition-all duration-300`}
                                        >
                                            <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                                            <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tools & Technologies Section */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-white text-center">
                        <span className="text-accent">Tools</span> I Use
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tools.map((toolCategory) => (
                            <div
                                key={toolCategory.category}
                                className="glass rounded-2xl p-6 bg-primary/30 hover:bg-primary/40 transition-all duration-300 border-2 border-white/30 hover:border-accent"
                            >
                                <h3 className="text-lg font-semibold text-white mb-4">{toolCategory.category}</h3>
                                <div className="space-y-3">
                                    {toolCategory.items.map((tool) => (
                                        tool.url ? (
                                            <a
                                                key={tool.name}
                                                href={tool.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center gap-3 p-3 rounded-lg ${tool.color} hover:bg-accent/10 transition-all duration-300 cursor-pointer`}
                                            >
                                                <img src={tool.icon} alt={tool.name} className="w-8 h-8" />
                                                <span className="text-sm font-medium text-gray-300">{tool.name}</span>
                                            </a>
                                        ) : (
                                            <div
                                                key={tool.name}
                                                className={`flex items-center gap-3 p-3 rounded-lg ${tool.color} hover:bg-accent/10 transition-all duration-300`}
                                            >
                                                <img src={tool.icon} alt={tool.name} className="w-8 h-8" />
                                                <span className="text-sm font-medium text-gray-300">{tool.name}</span>
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
