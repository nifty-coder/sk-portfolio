import React from 'react';
import BasicInfo from './components/BasicInfo/BasicInfo';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import './App.css';

const Home = () => {
    return (
        <div className="Container">
         <BasicInfo />
         <Skills />
         <Projects />  
        </div>
    );
};

export default Home;