import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ReactTyped as Typed } from 'react-typed';
import './Projects.css';
import Slideshow from './Slideshow.js'

import blockattack from '../images/blockattack.png'
import terminus from '../images/kealingterminus.png'
import ironcladcad from '../images/ironclad.png'
import ironcladirl from '../images/ironclad.jpg'
import rob from '../images/rob.jpg'
import vindicator from '../images/vindicator.png'
import finwiseai from '../images/finwiseai.png'
import ultimate from '../images/ultimategoal.jpg'

function Projects() {
    const projects = [
        {
            name: "Vindicator",
            description: "This is a 1lb 3d printed battlebot with an undercutter design. It is my first experience learning how to solder electronic components, and it won an in house competition",
            media: [
                { type: 'image', src: vindicator }
            ]
        },
        {
            name: "FinWise AI",
            description: "AI Financial Advisor developed with a team from the Artificial Intelligence Society (AIS) club at UTD. I learned the standard AI development pipeline process. Code is available at https://github.com/bellh14/AIMProjectF2023",
            media: [
                { type: 'image', src: finwiseai }
            ]
        },
        {
            name: "FTC Power Play Robot",
            description: "This was our robot for the 2022-2023 FTC season PowerPlay. It featured custom machined aluminum sideplates and won first place at the TAPPS competition",
            media: [
                { type: 'image', src: ironcladirl },
                { type: 'image', src: ironcladcad },
                { type: 'video', src: 'https://www.youtube.com/embed/YNIwhA6JLN4' },
            ]
        },
        {
            name: "FTC Freight Frenzy Robot",
            description: "This was our robot for the 2021-2022 FTC season Freight Frenzy. It featured an extending turret design with automated self alignment. This robot was 1st pick of the second alliance at the World Competition",
            media: [
                { type: 'image', src: rob }
            ]
        },
        {
            name: "FTC Ultimate Goal Robot",
            description: "This was our robot for the 2020-2021 FTC season Ultimate Goal. It featured an autoaiming system which tracked the goal at the press of a button. This robot double qualified for worlds however it was cancelled due to COVID-19",
            media: [
                { type: 'image', src: ultimate }
            ]
        },
        {
            name: "Block Attack",
            description: "This was a basic platformer game to experiment with python and sockets",
            media: [
                { type: 'image', src: blockattack }
            ]
        },
        {
            name: "Kealing Terminus",
            description: "This was a command line adventure gamed modeled after MIT Terminus. You can play it at https://kealingterminus.netlify.app",
            media: [
                { type: 'image', src: terminus }
            ]
        },
    ];

    return (
        <div>
            <h1>Projects</h1>
            <div className="projects-container">
                {projects.map(project => (
                    <div className="project card">
                        <Slideshow media={project.media} />
                        <div className="project-details">
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;