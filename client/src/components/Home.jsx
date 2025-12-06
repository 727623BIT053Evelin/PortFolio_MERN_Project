import React from 'react';
import Hero from './Hero';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Certifications from './Certifications';
import Achievements from './Achievements';
import Contact from './Contact';

const Home = () => {
    return (
        <div className="flex flex-col">
            <section id="hero">
                <Hero />
            </section>
            <section id="about">
                <h2 className="text-4xl font-bold text-white text-center pt-20"><span className="text-accent">About</span> Me</h2>
                <About fromHome={true} />
            </section>
            <section id="education">
                <h2 className="text-4xl font-bold text-white text-center pt-20"><span className="text-accent">My</span> Education</h2>
                <Education fromHome={true} />
            </section>
            <section id="projects">
                <h2 className="text-4xl font-bold text-white text-center pt-20"><span className="text-accent">My</span> Projects</h2>
                <Projects fromHome={true} />
            </section>
            <section id="certifications">
                <h2 className="text-4xl font-bold text-white text-center pt-20"><span className="text-accent">My</span> Certificates</h2>
                <Certifications fromHome={true} />
            </section>
            <section id="achievements">
                <h2 className="text-4xl font-bold text-white text-center pt-20"><span className="text-accent">My</span> Achievements</h2>
                <Achievements fromHome={true} />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
};

export default Home;
