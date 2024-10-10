import React, { useEffect } from 'react';

function Projects() {
    useEffect(() => {
        document.title = "Projects - Robert Teal"; // Set the tab title
    }, []);
    
    return (
        <div>
            <p>Projects</p>
        </div>
    );
}

export default Projects;
