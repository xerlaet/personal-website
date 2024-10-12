import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Particles, {initParticlesEngine} from "@tsparticles/react";
import particlesOptions from "./particles.json";
import {loadFull} from "tsparticles";
import "./App.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faR } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import Home from "./pages/Home.js";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
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

    return (
        <Router>
            <div className="App">
                {init && <Particles options={particlesOptions} />}

                {/* <nav>
                    <div className="left-icons">
                        <Link to="/">
                            <FontAwesomeIcon icon={faR} />
                        </Link>
                    </div>
                    <div className="pages">
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                        </ul>
                    </div>
                    <div className="right-icons">
                        <a href="https://www.linkedin.com/in/robert-teal-88444b2a2/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/xerlaet" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithubSquare} />
                        </a>
                    </div>
                </nav> */}

                <AnimatedRoutes />
        
                {/* <p className="footer">Last updated October 12, 2024</p> */}
            </div>
        </Router>
    );
}

function AnimatedRoutes() {
    const location = useLocation();
    
    return (
        <animatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </animatePresence>
    );
}

export default App;