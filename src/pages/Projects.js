import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ReactTyped as Typed } from 'react-typed';
import './Projects.css';

import blockattack from '../images/blockattack.png'
import terminus from '../images/kealingterminus.png'
import ironclad from '../images/ironclad.png'
import vindicator from '../images/vindicator.png'

function Projects() {
    const projects = [
        {
            id: 1,
            name: "Vindicator",
            description: "This is a 1lb 3d printed battlebot with an undercutter design. It is my first experience learning how to solder electronic components, and it won an in house competition",
            image: vindicator
        },
        {
            id: 2,
            name: "Ironclad",
            description: "This was our robot for the 2022-2023 FTC season PowerPlay. It featured custom machined aluminum sideplates and won first place at the TAPPS competition",
            image: ironclad
        },
        {
            id: 3,
            name: "Block Attack",
            description: "This was a basic platformer game to experiment with python and sockets",
            image: blockattack
        },
        {
            id: 4,
            name: "Kealing Terminus",
            description: "This was a command line adventure gamed modeled after MIT Terminus. You can play it at https://kealingterminus.netlify.app",
            image: terminus
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <h1>Projects</h1>
            <div className="projects-container">
                {projects.map(project => (
                    <div key={project.id} className="project-card card">
                        <img src={project.image} alt={project.name} className="project-image" />
                        <div className="project-details">
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default Projects;