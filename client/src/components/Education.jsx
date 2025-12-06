import React from 'react';

const Education = ({ fromHome }) => {
    const educationData = [
        {
            degree: 'B.Tech IT-90%',
            institution: 'Dr.Mahalingam College of Engineering and Technology',
            period: '2023-2027',
            icon: '🎓'
        },
        {
            degree: 'HSC-89%',
            institution: 'Vivek Vidyalaya Matriculation Higher Secondary School',
            period: '2022-2023',
            icon: '🎓'
        },
        {
            degree: 'SSLC-ALL PASS',
            institution: 'Vivek Vidyalaya Matriculation Higher Secondary School',
            period: '2020-2021',
            icon: '🎓'
        }
    ];

    const internshipData = {
        title: 'Mernstack Development',
        company: 'APPIN TECHNOLOGY,COIMBATORE',
        period: 'JUNE-2025',
        description: [
            'I worked on developing web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js).',
            'I gained hands-on experience in both front-end and back-end development, focusing on building responsive and dynamic applications.',
            'This internship enhanced my skills in API integration, database management, and creating user-friendly interfaces.',
            'Through this internship, I strengthened my problem-solving abilities and gained practical exposure to full-stack development workflows.'
        ]
    };

    return (
        <section className={`${fromHome ? '' : 'min-h-screen'} bg-primary ${fromHome ? 'py-4' : 'py-20'} px-4 sm:px-6 lg:px-8`}>
            <div className="max-w-7xl mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${fromHome ? 'mt-8' : 'mt-15'}`}>

                    {/* Education Section */}
                    <div>
                        <h2 className="text-3xl font-bold text-accent mb-8">Education</h2>
                        <div className="space-y-6">
                            {educationData.map((edu, index) => (
                                <div
                                    key={index}
                                    className="glass rounded-xl p-6 bg-primary/30 border-l-4 border-accent hover:bg-primary/40 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl">{edu.icon}</span>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                                            <p className="text-gray-300 mb-2">{edu.institution}</p>
                                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span>{edu.period}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Internship Section */}
                    <div>
                        <h2 className="text-3xl font-bold text-accent mb-8">Internship</h2>
                        <div className="glass rounded-xl p-6 bg-primary/30 border border-accent hover:bg-primary/40 transition-all duration-300">
                            <div className="flex items-start gap-4 mb-4">
                                <span className="text-2xl">💼</span>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2">{internshipData.title}</h3>
                                    <p className="text-accent font-semibold mb-2">{internshipData.company}</p>
                                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>{internshipData.period}</span>
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-3">
                                {internshipData.description.map((point, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-300">
                                        <span className="text-accent mt-1">•</span>
                                        <span className="text-justify">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;
