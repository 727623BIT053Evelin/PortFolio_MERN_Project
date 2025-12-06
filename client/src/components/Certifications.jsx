import React from 'react';

const Certifications = ({ fromHome }) => {
    const certificates = [
        {
            id: 1,
            title: 'The Complete Full-Stack Web Development Bootcamp',
            provider: 'Udemy',
            date: 'Oct 2025',
            hours: '61.5 total hours',
            instructor: 'Dr. Angela Yu, Developer and Lead Instructor',
            image: '/fullstack-certificate.png',
            certificateUrl: '/fullstack-certificate.png'
        },
        {
            id: 2,
            title: 'Programming In Java - Elite + Gold',
            provider: 'NPTEL (IIT Kharagpur)',
            date: 'Jan-Apr 2025',
            score: '91% (Top 2%)',
            details: '12 week course | 16040 candidates certified',
            image: '/java-certificate.png',
            certificateUrl: '/java-certificate.png'
        },
        {
            id: 3,
            title: 'Environmental Impact Assessment - Elite + Gold',
            provider: 'NPTEL (IIT Roorkee)',
            date: 'Jan-Apr 2025',
            score: '90%',
            details: '12 week course | 1266 candidates certified',
            image: '/environmental-certificate.png',
            certificateUrl: '/environmental-certificate.png'
        },
        {
            id: 4,
            title: 'Introduction to Industry 4.0 and Industrial Internet of Things - Elite + Silver',
            provider: 'NPTEL (IIT Kharagpur)',
            date: 'Jul-Oct 2025',
            score: '83%',
            details: '12 week course | 19100 candidates certified',
            image: '/industry4-certificate.png',
            certificateUrl: '/industry4-certificate.png'
        },
        {
            id: 5,
            title: 'Linguaskill Business - CEFR Level B1',
            provider: 'Cambridge English',
            date: 'May 2024',
            score: 'Average Score: 151 (B1)',
            details: 'Listening: 141 (B1) | Reading: 139 (A2) | Speaking: 168 (B2) | Writing: 155 (B1)',
            image: '/linguaskill-certificate.png',
            certificateUrl: 'https://drive.google.com/file/d/1ansxCo4W6i8DawzkUBC1SMXX66sHKn5Y/view?usp=sharing'
        },
        {
            id: 6,
            title: 'Solar Ambassador Workshop',
            provider: 'Energy Swaraj Foundation',
            date: 'Oct 2023',
            details: 'Training on fundamentals of solar energy and assembling solar study lamp',
            instructor: 'Prof. Chetan S. Solanki, Professor IIT Bombay',
            image: '/solar-ambassador-certificate.png',
            certificateUrl: '/solar-ambassador-certificate.png'
        },
        {
            id: 7,
            title: 'Cross Platform Mobile Application Development Using Flutter',
            provider: 'KPR Institute of Engineering and Technology',
            date: 'Apr 2024',
            details: 'One day workshop organized by Department of Computer Science and Engineering',
            image: '/flutter-workshop-certificate.png',
            certificateUrl: '/flutter-workshop-certificate.png'
        },
        {
            id: 8,
            title: 'Web Fusion Meet - ML Integrated Web Project Workshop',
            provider: 'Dr. Mahalingam College of Engineering and Technology',
            date: 'Aug 2024',
            details: 'Workshop on developing ML integrated Web projects organized by Student Research Council',
            image: '/web-fusion-certificate.png',
            certificateUrl: '/web-fusion-certificate.png'
        },
        {
            id: 9,
            title: '30 Days MasterClass in Data Analytics',
            provider: 'NoviTech R&D Private Limited',
            date: 'Sep-Oct 2024',
            details: 'Completed from September 5th to October 5th, 2024',
            image: '/data-analytics-certificate.png',
            certificateUrl: '/data-analytics-certificate.png'
        },
        {
            id: 10,
            title: 'Generative AI in Tamil',
            provider: 'GUVI Geek Networks (Google for Education Partner)',
            date: 'Sep 2024',
            details: 'Certificate ID: 6275lcY7948323RZ16',
            image: '/genai-tamil-certificate.png',
            certificateUrl: '/genai-tamil-certificate.png'
        }
    ];

    return (
        <div className={`${fromHome ? '' : 'min-h-screen'} ${fromHome ? 'py-4' : 'py-20'} px-4 sm:px-6 lg:px-8`}>
            <div className="max-w-7xl mx-auto">
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${fromHome ? 'mt-8' : 'mt-16'}`}>
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="bg-secondary/50 rounded-xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 group"
                        >
                            {/* Certificate Image */}
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <a
                                        href={cert.certificateUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-accent text-primary rounded-full font-medium hover:bg-accent/90 transition-colors duration-300"
                                    >
                                        View Certificate
                                    </a>
                                </div>
                            </div>

                            {/* Certificate Details */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                                <p className="text-accent font-semibold mb-2">{cert.provider}</p>
                                <div className="space-y-1 text-sm text-gray-400">
                                    <p>Completed: {cert.date}</p>
                                    {cert.hours && <p>Duration: {cert.hours}</p>}
                                    {cert.score && <p className="text-accent font-semibold">Score: {cert.score}</p>}
                                    {cert.details && <p className="text-xs mt-2">{cert.details}</p>}
                                    {cert.instructor && <p className="text-xs mt-2">Instructor: {cert.instructor}</p>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certifications;
