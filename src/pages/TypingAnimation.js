import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './TypingAnimation.css'; // For styling the cursor

const TypingAnimation = ({ text, speed = 100, showCursor = true }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isCursorVisible, setIsCursorVisible] = useState(false);

    useEffect(() => {
        let index = 0; // Start at the beginning of the text
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text[index]);
                index++;
            } else {
                clearInterval(interval); // Clear the interval when finished
            }
        }, speed);

        // Start the cursor blinking if showCursor is true
        if (showCursor) {
            const cursorInterval = setInterval(() => {
                setIsCursorVisible((prev) => !prev);
            }, 500); // Cursor blinks every 500ms

            return () => clearInterval(cursorInterval);
        }

        return () => clearInterval(interval); // Clean up the typing interval
    }, [text, speed, showCursor]);

    return (
        <div>
            <motion.span 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                {displayedText}
            </motion.span>
            {showCursor && (
                <span className={`cursor ${isCursorVisible ? 'visible' : ''}`}>
                    |
                </span>
            )}
        </div>
    );
};

export default TypingAnimation;