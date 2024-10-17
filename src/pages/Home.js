import React from "react";
import { motion } from 'framer-motion';
import { ReactTyped as Typed } from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

function Home() {
    return (
        <div class="Center">
            <Typed
                strings={[
                    "Hello! My name is <br><br> <span class='name-highlight'>Robert Teal</span> <br><br> I'm a computer science major at UT Dallas."
                ]}
                typeSpeed={30}
                backSpeed={30}
                loop={false}
                smartBackspace={true}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5, duration: 2 }}
                exit={{ opacity: 0 }}
            >
                <FontAwesomeIcon icon={faAnglesDown} className="arrow-icon" />
            </motion.div>
        </div>
    );
}

export default Home;
