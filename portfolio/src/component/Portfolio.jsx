
import React from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import Education from "./Education.jsx";

const Portfolio = () => {
    return (
        <div className="lg:pl-[200px] lg:pr-[200px] min-h-screen w-full text-pretty mx-auto dark:bg-customDarkBlue">
            <div className="container mx-auto px-4 py-8">
                <Header />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Footer />
            </div>
        </div>
    );
};

export default Portfolio;
