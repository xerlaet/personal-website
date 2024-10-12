import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.css';

import profilePicture from '../images/profile.jpg'; 

function About() {
    useEffect(() => {
        document.title = "About - Robert Teal"; 
    }, []);
    
    return (
        <motion.div
            initial={{ opacity: 0}}  
            animate={{ opacity: 1}}     
            exit={{ opacity: 0}}      
            transition={{ duration: 1 }}     
        >
            <h2>About</h2>
            <img src={profilePicture} alt="Profile" className="profile-picture" />
            <div className="about-container card">
                <div className="text-content">
                    <h2>About</h2>
                    <p>My name is Robert Teal, and I'm a computer science major at UT Dallas looking to graduate in spring 2026.</p>
                    <p>I enjoy learning new things, particularly in the fields of computation, physics, and philosophy.</p>
                    <p>In my spare time I typically read, play video games, and practice piano.</p>
                    <p>I'm a big believer in the future of AI and what it can do for humanity.</p>
                </div>
                <div className="resume-content">
                    <h2>Education</h2>
                    <p>2023-2026: BS in Computer Science, University of Texas at Dallas</p>

                    <h2>Experience</h2>
                    <p>2024-2026: Design lead for VexU Team</p>
                    <p>2023: iCode Summer Camp Leader</p>
                    <p>2020-2023: Robotics lead for FTC</p>
        
                    <h2>Skills</h2>
                    <p>Programming Languages: Python, Java, some C++ and HTML/CSS</p>
                    <p>Software: LaTeX, Vim</p>
                    <p>CAD: Onshape</p>
                </div>
            </div>
        </motion.div>
    );
}

export default About;