import React from 'react';
import './About.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import profilePicture from '../images/profile.jpg';

function About() {
    return (
        <div>
            <h1>&lt;About /&gt;</h1>
            <div className="about-container card">
                <div className="text-content">
                    <div className="image-container">
                        <img src={profilePicture} alt="Profile" className="profile-picture" />
                    </div>
                    <h2>About</h2>
                    <p>My name is Robert Teal, and I'm a computer science major at UT Dallas looking to graduate in spring 2026.</p>
                    <p>I enjoy learning new things, particularly in the fields of computation, robotics, and philosophy.</p>
                    <p>In my spare time I enjoy reading and optimizing my computer experience.</p>

                    <h2>Contact</h2>
                    <div className="social-icons">
                        <a href="https://github.com/xerlaet" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithubSquare} className="icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/roberttealdev" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="icon" />
                        </a>
                        <a href="mailto:robert@teals.org" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSquareEnvelope} className="icon" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;