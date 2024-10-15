import React, { useEffect, useState, memo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import particlesOptions from "./particles.json";
import { loadFull } from "tsparticles";
import "./App.css";

import Home from "./pages/Home.js";
import About from "./pages/About";
import Projects from "./pages/Projects";

const MemoizedParticles = memo(() => {
    return <Particles options={particlesOptions} />;
});

function App() {
    // ts particles
    const [init, setInit] = useState(false);
    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // scroll listener
    const [activeSection, setActiveSection] = useState('home');
    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                setActiveSection(section.id);
            }
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        document.title = `Robert Teal - ${activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}`;
    }, [activeSection]);

    return (
        <div className="App">
            {init && <MemoizedParticles />}

            <nav className="nav-bar">
                <ul>
                    <li className={activeSection === 'home' ? 'active' : ''}>
                        <a href="#home">Home</a>
                    </li>
                    <li className={activeSection === 'about' ? 'active' : ''}>
                        <a href="#about">About</a>
                    </li>
                    <li className={activeSection === 'projects' ? 'active' : ''}>
                        <a href="#projects">Projects</a>
                    </li>
                </ul>
            </nav>

            <div className="main-content">
                <section id="home" className="content-section">
                    <Home />
                </section>

                <section id="about" className="content-section">
                    <About />
                </section>

                <section id="projects" className="content-section">
                    <Projects />
                </section>
            </div>
        </div>
    );
}

export default App;