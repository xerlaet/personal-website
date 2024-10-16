import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import profilePicture from '../images/profile.jpg';
import TypingAnimation from './TypingAnimation';

function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <h1>About</h1>
            <img src={profilePicture} alt="Profile" className="profile-picture" />
            <div className="about-container card">
                <div className="text-content">
                    <h2>Interests</h2>
                    <p>My name is Robert Teal, and I'm a computer science major at UT Dallas looking to graduate in spring 2026.</p>
                    <p>I enjoy learning new things, particularly in the fields of computation, robotics, and philosophy.</p>
                    <p>In my spare time I typically read, play video games, and practice piano.</p>
                    <p>I believe that AI is the most important technology to develop due to the potential it has.</p>

                    <h2>Contact</h2>
                    <div className="social-icons">
                        <a href="https://github.com/xerlaet" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithubSquare} className="icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/robert-teal-88444b2a2" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="icon" />
                        </a>
                        <a href="mailto:robert@teals.org" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSquareEnvelope} className="icon" />
                        </a>
                    </div>
                </div>
                <div className="resume-content">
                    <h2>Education</h2>
                    <table>
                        <tr>
                            <td>2023-2026</td>
                            <td>BS in Computer Science <br/><b>University of Texas at Dallas</b></td>
                        </tr>
                    </table>

                    <h2>Experience</h2>
                    <table>
                        <tr>
                            <td>2023-Present</td>
                            <td>VEXU Comet | Design Lead</td>
                        </tr>
                        <tr>
                            <td>2023</td>
                            <td>iCode | Summer Camp Instructor</td>
                        </tr>
                        <tr>
                            <td>2020-2023</td>
                            <td>FTC Iron Eagles Optimus | Team Lead</td>
                        </tr>
                        <tr>
                            <td>2019-2023</td>
                            <td>Cyber Eagles | President</td>
                        </tr>
                    </table>

                    <h2>Skills</h2>
                    <table>
                        <tr>
                            <td>Languages</td>
                            <td>Python, Java, C++, HTML/CSS/JavaScript</td>
                        </tr>
                        <tr>
                            <td>Software</td>
                            <td>LaTeX, Vim, Git</td>
                        </tr>
                        <tr>
                            <td>CAD</td>
                            <td>Onshape, Blender</td>
                        </tr>
                    </table>
                </div>
            </div>
        </motion.div>
    );
}

export default About;