import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";  // Import Router, Route, Link
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";

import Home from "./pages/Home.js";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Robots from "./pages/Robots";

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

                <nav>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/robots">Robots</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/robots" element={<Robots />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;