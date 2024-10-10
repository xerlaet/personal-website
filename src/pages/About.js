import React, { useEffect } from 'react';

function About() {
    useEffect(() => {
        document.title = "About - Robert Teal"; // Set the tab title
    }, []);
    
    return (
        <div>
            <p>About</p>
        </div>
    );
}

export default About;
