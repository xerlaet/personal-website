import React from 'react';
import Slideshow from './Slideshow.js'
import './Projects.css';

import vindicator1 from '../images/vindicator1.jpg'
import vindicator2 from '../images/vindicator2.jpg'
import vindicator3 from '../images/vindicator3.jpg'
import finwiseai from '../images/finwise.png'
import modelcompare from '../images/modelcomparison.png'
import ironcladcad from '../images/ironclad.png'
import ironcladirl from '../images/ironclad.jpg'
import rob from '../images/rob.jpg'
import ultimate from '../images/ultimategoal.jpg'
import blockattackmenu from '../images/blockattackmenu.png'
import terminus from '../images/kealingterminus.jpg'

function Projects() {
    const projects = [
        {
            name: "Vindicator",
            description: "1lb 3d printed battlebot with an undercutter design. This was my first experience learning how to solder electronic components, currently on version 4",
            media: [
                { type: 'image', src: vindicator1 },
                { type: 'image', src: vindicator2 },
                { type: 'image', src: vindicator3 },
            ],
            link: "https://youtu.be/WHLbwqPn1DI?t=3990"
        },
        {
            name: "FinWise AI",
            description: "AI Financial Advisor developed with a team from the Artificial Intelligence Society (AIS) club at UTD. This project covered the basic usage of AI models for real world scenarios and I learned useful development pipeline skills",
            media: [
                { type: 'image', src: finwiseai },
                { type: 'image', src: modelcompare },
            ],
            link: "https://github.com/bellh14/AIMProjectF2023"
        },
        {
            name: "FTC Power Play Robot",
            description: "This was our robot for the 2022-2023 FTC season Power Play. It featured custom machined aluminum sideplates and won first place at the TAPPS state competition",
            media: [
                { type: 'image', src: ironcladirl },
                { type: 'video', src: 'https://www.youtube.com/embed/S-H6z-GK6Jk' },
                { type: 'image', src: ironcladcad },
            ],
            link: "https://ftcscout.org/teams/3708?season=2022"
        },
        {
            name: "FTC Freight Frenzy Robot",
            description: "This was our robot for the 2021-2022 FTC season Freight Frenzy. It featured an extending turret design with automated self alignment. This robot was first pick of the second alliance at the World Competition",
            media: [
                { type: 'image', src: rob },
                { type: 'video', src: 'https://www.youtube.com/embed/n9mMkYqWCCg' },
            ],
            link: "https://ftcscout.org/teams/3708?season=2021"
        },
        {
            name: "FTC Ultimate Goal Robot",
            description: "This was our robot for the 2020-2021 FTC season Ultimate Goal. It featured an autoaiming system which tracked the goal at the press of a button. This robot qualified for worlds however it was cancelled due to COVID-19",
            media: [
                { type: 'image', src: ultimate },
                { type: 'video', src: 'https://www.youtube.com/embed/bWHruzfNr6I' },
            ],
            link: "https://ftcscout.org/teams/3708?season=2020"
        },
        {
            name: "Block Attack",
            description: "This is a basic platformer game that developed my skills in python. Later on I added a multiplayer feature experimenting with the socket library",
            media: [
                { type: 'image', src: blockattackmenu },
                { type: 'video', src: 'https://www.youtube.com/embed/40Alv4U4te4' },
            ],
            link: "https://github.com/xerlaet/Block-Attack"
        },
        {
            name: "Kealing Terminus",
            description: "This is a command line adventure game modeled after MIT Terminus. MIT Terminus is how I learned to use the command line, however the story had some loose ends and it didn't work for Linux. These are two of the upgrades I implemented in my version",
            media: [
                { type: 'image', src: terminus },
                { type: 'video', src: 'https://www.youtube.com/embed/qvra-t2hF7Y' },
            ],
            link: "https://github.com/xerlaet/KealingTerminus"
        },
    ];

    return (
        <div>
            <h1>&lt;Projects /&gt;</h1>
            <div className="projects-container">
                {projects.map(project => (
                    <div className="project card">
                        <Slideshow media={project.media} />
                        <div className="project-details">
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                            <a href={project.link} className="project-link">Project Link</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;