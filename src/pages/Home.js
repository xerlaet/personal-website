import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { ReactTyped as Typed } from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
        >
            <div class="Center">
                <Typed
                    strings={[
                        "Hello! My name is <br><br> <span class='name-highlight'>Robert Teal</span> <br><br> I'm a computer science major at UT Dallas."
                    ]}
                    typeSpeed={50}
                    backSpeed={30}
                    loop={false}
                    smartBackspace={true}
                />
                <FontAwesomeIcon icon={faAnglesDown} className="arrow-icon" />
            </div>

        </motion.div>
    );
}

export default Home;
