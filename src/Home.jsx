import React from 'react';
import BasicInfo from './components/BasicInfo/BasicInfo';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import './App.css';

const Home = () => {
    return (
        <div className="bg-slate-50 overflow-x-hidden">
            <Hero />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-32">
                <section id="about" className="scroll-mt-24">
                    <BasicInfo />
                </section>

                <section id="skills" className="scroll-mt-24">
                    <Skills />
                </section>

                <section id="projects" className="scroll-mt-24">
                    <Projects />
                </section>
            </div>

            <section id="experience">
                <Experience />
            </section>

            <Contact />
        </div>
    );
};

export default Home;