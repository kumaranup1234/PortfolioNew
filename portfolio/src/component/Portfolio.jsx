
import React from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';

const Portfolio = () => {
    return (
        <div className="lg:pl-[200px] lg:pr-[200px] min-h-screen w-full text-pretty mx-auto dark:bg-customDarkBlue">
            <div className="container mx-auto px-4 py-8">
                <Header />
                <About />
                <Skills />
                <Projects />
                <Footer />
            </div>
        </div>
    );
};

export default Portfolio;
