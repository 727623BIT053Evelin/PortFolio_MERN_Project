import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = ({ fromHome }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All');

    // Placeholder data
    const placeholderProjects = [
        {
            _id: '1',
            title: 'Personal Portfolio Website',
            description: 'A modern, responsive portfolio website built with the MERN stack. Features dynamic content management, interactive UI components, achievement showcase, project gallery, and contact form. Demonstrates full-stack development skills with React frontend and Node.js backend.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
            imageUrl: '/portfolio-project.png',
            projectUrl: 'https://github.com/727623BIT053Evelin/PortFolio_MERN_Project',
            githubUrl: 'https://github.com/727623BIT053Evelin/PortFolio_MERN_Project',
        },
        {
            _id: '2',
            title: 'PrintQueue - Smart Printing System',
            description: 'A MERN stack print queue management system with real-time updates, payment integration, and admin dashboard. Features include document upload, queue management, and automated printing workflows.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
            imageUrl: '/printqueue-project.png',
            projectUrl: 'https://github.com/727623BIT053Evelin/PrintQueue_MERN_Project',
            githubUrl: 'https://github.com/727623BIT053Evelin/PrintQueue_MERN_Project',
        },
        {
            _id: '3',
            title: 'PCOS Care - Health Prediction System',
            description: 'A comprehensive PCOS prediction and care platform using machine learning. Features personalized assessment, community support, expert consultation booking, and 24/7 health guidance for women\'s health.',
            technologies: ['React', 'Node.js', 'Machine Learning'],
            imageUrl: '/pcos-project.png',
            projectUrl: 'https://github.com/727623BIT053Evelin/Non-invasive-PCOS-Mern-Project',
            githubUrl: 'https://github.com/727623BIT053Evelin/Non-invasive-PCOS-Mern-Project',
        },
        {
            _id: '4',
            title: 'MediQ - Doctor Appointment Booking System',
            description: 'A modern React-based healthcare platform for booking appointments with trusted doctors. Browse extensive doctor listings, schedule appointments hassle-free, and manage your healthcare journey seamlessly.',
            technologies: ['React'],
            imageUrl: '/mediq-project.png',
            projectUrl: 'https://github.com/727623BIT053Evelin/MediQ-App',
            githubUrl: 'https://github.com/727623BIT053Evelin/MediQ-App',
        },
        {
            _id: '5',
            title: 'Instagram Clone - Social Media Platform',
            description: 'A feature-rich Instagram clone built with React. Includes user profiles, photo feeds, likes, comments, suggestions, and a complete social media experience with modern UI/UX design.',
            technologies: ['React'],
            imageUrl: '/instagram-project.png',
            projectUrl: 'https://github.com/727623BIT053Evelin/Instagram-Clone',
            githubUrl: 'https://github.com/727623BIT053Evelin/Instagram-Clone',
        },
    ];

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects`);
                if (res.data.data.length > 0) {
                    setProjects(res.data.data);
                } else {
                    setProjects(placeholderProjects);
                }
            } catch (error) {
                console.error('Error fetching projects:', error);
                setProjects(placeholderProjects);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const allTechnologies = ['All', ...new Set(projects.flatMap((p) => p.technologies))];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter((p) => p.technologies.includes(filter));

    return (
        <div className={`${fromHome ? '' : 'min-h-screen'} ${fromHome ? 'py-4' : 'py-20'} px-4 sm:px-6 lg:px-8 bg-secondary/30`}>
            <div className="max-w-7xl mx-auto">
                {/* Filter Buttons */}
                <div className={`flex flex-wrap justify-center gap-4 ${fromHome ? 'mt-8' : 'mt-16'} mb-8`}>
                    {allTechnologies.map((tech) => (
                        <button
                            key={tech}
                            onClick={() => setFilter(tech)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === tech
                                ? 'bg-accent text-primary'
                                : 'bg-primary text-gray-400 hover:text-white hover:bg-gray-700'
                                }`}
                        >
                            {tech}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project._id}
                            className="bg-primary rounded-xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 group"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white rounded-full text-primary hover:bg-accent transition-colors duration-300"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a
                                        href={project.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white rounded-full text-primary hover:bg-accent transition-colors duration-300"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs rounded-md bg-secondary text-accent border border-accent/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
