import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Achievements = ({ fromHome }) => {
    const [achievements, setAchievements] = useState([]);
    const [loading, setLoading] = useState(true);

    // Static data for achievements - Organized by Category
    const staticAchievements = [
        // === FIRST PLACE AWARDS ===
        {
            _id: '1',
            title: 'First Place - NxTech\'25 Project Expo',
            description: 'Secured 1st place in Project Expo as part of NxTech\'25, an intra-college technical symposium organized by the Student Research Council, held on 28th & 29th October 2025.',
            date: '2025-10-28',
            category: 'award',
            imageUrl: '/nxtech-certificate.png',
            credentialUrl: '/nxtech-certificate.png'
        },
        {
            _id: '2',
            title: 'First Place - PitchFest\'25',
            description: 'Won 1st place with outstanding performance and dedication in the event "PitchFest\'25" organized by ECE DEPARTMENT ASSOCIATION - SPECTRUM on 29.08.2025 at Dr.Mahalingam College of Engineering and Technology, Pollachi.',
            date: '2025-08-29',
            category: 'award',
            imageUrl: '/pitchfest-certificate.png',
            credentialUrl: '/pitchfest-certificate.png'
        },
        {
            _id: '3',
            title: 'First Place - ASTRA\'25 (Articulate)',
            description: 'Received 1st place with outstanding performance and dedication in the ARTICULATE\'25 event ASTRA\'25 organized by ECE SPECTRUM on 15.10.2025 at Dr.Mahalingam College of Engineering and Technology, Pollachi.',
            date: '2025-10-15',
            category: 'award',
            imageUrl: '/astra-certificate.png',
            credentialUrl: '/astra-certificate.png'
        },
        {
            _id: '4',
            title: 'First Prize - EndoCrInn 2025 Idea/Project Contest',
            description: 'Won First Prize in the two days Idea/Project Contest "EndoCrInn 2025" organized by Centre for Innovation, Business Incubation & Entrepreneurship (CIBIE) at Dr. Mahalingam College of Engineering and Technology.',
            date: '2025-04-30',
            category: 'award',
            imageUrl: '/endocrinn-certificate.png',
            credentialUrl: '/endocrinn-certificate.png'
        },
        {
            _id: '5',
            title: 'First Prize - HACKVENTURE\'25',
            description: 'Won 1st prize in the "HACKVENTURE\'25" event for demonstrating outstanding strategic thinking, creativity, and teamwork. Organized by INVICTUS, Department of AI & DS, Dr. Mahalingam College of Engineering and Technology.',
            date: '2025-04-23',
            category: 'award',
            imageUrl: '/hackventure-certificate.png',
            credentialUrl: '/hackventure-certificate.png'
        },
        {
            _id: '6',
            title: 'Second Prize - Eduventures (FIESTAA\'24)',
            description: 'Secured 2nd prize in the event "Eduventures" of FIESTAA\'24 organized by KPR Institute of Engineering and Technology, Coimbatore held on March 27th and 28th 2024.',
            date: '2024-03-27',
            category: 'award',
            imageUrl: '/kpr-endeavors-certificate.png',
            credentialUrl: '/kpr-endeavors-certificate.png'
        },
        // === SECOND PLACE / RUNNERS UP ===
        {
            _id: '7',
            title: 'Second Place - Innovators Arena (TECHNOFETE\'25)',
            description: 'Secured 2nd place in "Innovators Arena" at TECHNOFETE\'25, an intra-college technical symposium organized by Student Research Council in collaboration with Department Associations.',
            date: '2025-03-14',
            category: 'award',
            imageUrl: '/technofete-certificate.png',
            credentialUrl: '/technofete-certificate.png'
        },
        {
            _id: '8',
            title: 'Second Place - NEURO NEXUS (ASTRA\'24)',
            description: 'Achieved 2nd place with outstanding performance and dedication in the event NEURO NEXUS as part of ASTRA\'24 organized by ECE SPECTRUM in collaboration with IEEE (Student Branch-61631) at Dr. Mahalingam College of Engineering and Technology.',
            date: '2024-10-04',
            category: 'award',
            imageUrl: '/neuro-nexus-certificate.png',
            credentialUrl: '/neuro-nexus-certificate.png'
        },
        {
            _id: '9',
            title: 'Second Prize - Handmade Hues (Varnam\'24)',
            description: 'Successfully won 2nd prize in the event "Handmade Hues" organized by FAC-Dwellers and presented by Students\' Guild of Service in the Intra College Non-technical Symposium Varnam\'24 held on 5th and 6th of April 2024.',
            date: '2024-04-05',
            category: 'award',
            imageUrl: '/handmade-hues-certificate.png',
            credentialUrl: '/handmade-hues-certificate.png'
        },
        {
            _id: '10',
            title: 'Third Prize - Snap Speech (FIESTAA\'24)',
            description: 'Secured 3rd prize in the event "Snap Speech" of FIESTAA\'24 organized by KPR Institute of Engineering and Technology, Coimbatore held on March 27th and 28th 2024.',
            date: '2024-03-27',
            category: 'award',
            imageUrl: '/kpr-snap-speech-certificate.png',
            credentialUrl: '/kpr-snap-speech-certificate.png'
        },
        {
            _id: '11',
            title: 'Runner Up - Virtual Vista (FIESTAA\'24)',
            description: 'Secured Runner Up position in the event "Virtual Vista" of FIESTAA\'24 organized by KPR Institute of Engineering and Technology, Coimbatore held on March 27th and 28th 2024.',
            date: '2024-03-27',
            category: 'award',
            imageUrl: '/virtual-viva-certificate.png',
            credentialUrl: '/virtual-viva-certificate.png'
        },
        {
            _id: '12',
            title: 'Second Prize - Wealth out of Waste (FIESTAA\'24)',
            description: 'Secured 2nd prize in the event "Wealth out of Waste" of FIESTAA\'24 organized by KPR Institute of Engineering and Technology, Coimbatore held on March 27th and 28th 2024.',
            date: '2024-03-27',
            category: 'award',
            imageUrl: '/wealth-waste-certificate.png',
            credentialUrl: '/wealth-waste-certificate.png'
        },
        // === PARTICIPATION & APPRECIATION ===
        {
            _id: '13',
            title: 'Participation - Hack the Horizon (24 Hour Hackathon)',
            description: 'Actively participated in the "HACK THE HORIZON - 24 HOUR HACKATHON" organized by the IEEE Computational Intelligence Society at KPR Institute of Engineering and Technology held on 27 & 28 March 2025.',
            date: '2025-03-27',
            category: 'award',
            imageUrl: '/kpr-hackathon-certificate.png',
            credentialUrl: '/kpr-hackathon-certificate.png'
        },
        {
            _id: '14',
            title: 'Participation - BARNSTROMZ-2k\'24 (National Level)',
            description: 'Participated in Paper Presentation event at the 16th National Level Technical Symposium BARNSTROMZ 2k\'24 held on 25th September 2024 at Hindusthan Institute of Technology, Coimbatore.',
            date: '2024-09-25',
            category: 'award',
            imageUrl: '/barnstromz-certificate.png',
            credentialUrl: '/barnstromz-certificate.png'
        },
        {
            _id: '15',
            title: 'Annual Day 2024 - Co-Curricular Activities',
            description: 'Certificate of Appreciation for participating/winning in various co-curricular activities and events during the Academic Year 2023-24, recognized at Annual Day 2024 held on May 4, 2024.',
            date: '2024-05-04',
            category: 'award',
            imageUrl: '/annual-day-certificate.png',
            credentialUrl: '/annual-day-certificate.png'
        },
        {
            _id: '16',
            title: 'Participation - MeSCia 2k24 (National Level)',
            description: 'Presented paper/project entitled "Brain Controlled Cars Using AI for Disabled" at the National Level Technical Symposium MeSCia 2k24 held on 14th February 2024 at Kongu Engineering College, Erode.',
            date: '2024-02-14',
            category: 'award',
            imageUrl: '/mescia-certificate.png',
            credentialUrl: '/mescia-certificate.png'
        },
        {
            _id: '17',
            title: 'Participation - Consumer Rights Awareness',
            description: 'Participated in Undergraduate/Postgraduate Consumer Rights Awareness Program organized by State/Government Consumer Protection Department on February 17, 2024.',
            date: '2024-02-17',
            category: 'award',
            imageUrl: '/consumer-rights-certificate.png',
            credentialUrl: '/consumer-rights-certificate.png'
        },
        {
            _id: '18',
            title: 'Participation - EKNA\'23 (National Level)',
            description: 'Actively participated in Paper Presentation during EKNA\'23 - National Level Techno Cultural Fest held at Anna University Regional Campus Coimbatore on November 07, 2023.',
            date: '2023-11-07',
            category: 'award',
            imageUrl: '/ekna-certificate.png',
            credentialUrl: '/ekna-certificate.png'
        },
        // === SPORTS ACHIEVEMENTS ===
        {
            _id: '19',
            title: 'Runners Up - Throw Ball (Intramural Sports)',
            description: 'Won Runners position in Throw Ball event in the Annual Sports Meet held at NIA Sports Complex, NPTC-MCET Campus, Pollachi on May 8, 2024.',
            date: '2024-05-08',
            category: 'sports',
            imageUrl: '/throwball-certificate.png',
            credentialUrl: '/throwball-certificate.png'
        },
        {
            _id: '20',
            title: 'First Place - 4x400m Relay (Zone Level Sports)',
            description: 'Won First place in 4x400m Relay event at Zone Level Games & Sports, Bharathiyar Day/Republic Day Games 2022-2023, held at P.K.D. Matric Higher Secondary School, Pollachi.',
            date: '2023-01-26',
            category: 'sports',
            imageUrl: '/relay-certificate.png',
            credentialUrl: '/relay-certificate.png'
        },
        {
            _id: '21',
            title: 'Second Place - 400m Hurdles (Zone Level Sports)',
            description: 'Secured Second place in 400m Hurdles event at Zone Level Games & Sports, Bharathiyar Day/Republic Day Games 2022-2023, held at P.K.D. Matric Higher Secondary School, Pollachi.',
            date: '2023-01-26',
            category: 'sports',
            imageUrl: '/hurdles-certificate.png',
            credentialUrl: '/hurdles-certificate.png'
        },
        {
            _id: '22',
            title: 'Second Place - 800m Race (Zone Level Sports)',
            description: 'Won Second place in 800m Race event at Zone Level Games & Sports, Bharathiyar Day/Republic Day Games 2022-2023, held at P.K.D. Matric Higher Secondary School, Pollachi.',
            date: '2023-01-26',
            category: 'sports',
            imageUrl: '/800m-certificate.png',
            credentialUrl: '/800m-certificate.png'
        },
        {
            _id: '23',
            title: 'Third Place - Long Jump (Zone Level Sports)',
            description: 'Achieved Third place in Long Jump event at Zone Level Games & Sports, Bharathiyar Day/Republic Day Games 2022-2023, held at P.K.D. Matric Higher Secondary School, Pollachi.',
            date: '2023-01-26',
            category: 'sports',
            imageUrl: '/longjump-certificate.png',
            credentialUrl: '/longjump-certificate.png'
        },
        {
            _id: '24',
            title: 'Runner - Football (Revenue District Competition)',
            description: 'Secured Runner position in Football at Revenue District Competitions, Bharathiyar Day/Republic Day Games & Sports 2022-2023, held at Karpagam Engineering College, Coimbatore.',
            date: '2022-10-27',
            category: 'sports',
            imageUrl: '/football-certificate.png',
            credentialUrl: '/football-certificate.png'
        }
    ];

    useEffect(() => {
        // Simulating API call or just using static data directly
        setAchievements(staticAchievements);
        setLoading(false);
    }, []);

    const getIcon = (category) => {
        switch (category) {
            case 'award':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                );
            default:
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                );
        }
    };

    return (
        <div className={`${fromHome ? '' : 'min-h-screen'} ${fromHome ? 'py-4' : 'py-20'} px-4 sm:px-6 lg:px-8`}>
            <div className="max-w-7xl mx-auto">
                {/* Regular Achievements */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${fromHome ? 'mt-8' : 'mt-16'}`}>
                    {achievements.filter(item => item.category !== 'sports').map((item) => (
                        <div
                            key={item._id}
                            className="bg-secondary/50 rounded-xl overflow-hidden border border-white/5 hover:border-accent/50 transition-all duration-300 hover:transform hover:-translate-y-2 group"
                        >
                            {/* Achievement Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <a
                                        href={item.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-accent text-primary rounded-full font-medium hover:bg-accent/90 transition-colors duration-300"
                                    >
                                        View Certificate
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-3 rounded-lg bg-primary text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-300`}>
                                        {getIcon(item.category)}
                                    </div>
                                    <span className="text-sm text-gray-400">
                                        {new Date(item.date).toLocaleDateString('en-US', {
                                            month: 'short',
                                            year: 'numeric',
                                        })}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sports Achievements Section */}
                {achievements.filter(item => item.category === 'sports').length > 0 && (
                    <>
                        <h2 className="text-4xl font-bold text-white text-center pt-25 mb-15">
                            <span className="text-accent">Sports</span> Achievements
                        </h2>
                        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${fromHome ? 'mt-8' : 'mt-16'}`}>
                            {achievements.filter(item => item.category === 'sports').map((item) => (
                                <div
                                    key={item._id}
                                    className="bg-secondary/50 rounded-xl overflow-hidden border border-white/5 hover:border-accent/50 transition-all duration-300 hover:transform hover:-translate-y-2 group"
                                >
                                    {/* Achievement Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={item.imageUrl}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <a
                                                href={item.credentialUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-accent text-primary rounded-full font-medium hover:bg-accent/90 transition-colors duration-300"
                                            >
                                                View Certificate
                                            </a>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`p-3 rounded-lg bg-primary text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-300`}>
                                                {getIcon(item.category)}
                                            </div>
                                            <span className="text-sm text-gray-400">
                                                {new Date(item.date).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    year: 'numeric',
                                                })}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Achievements;
