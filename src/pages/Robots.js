import React, { useEffect } from 'react';

function Robots() {
    useEffect(() => {
        document.title = "Robots - Robert Teal"; // Set the tab title
    }, []);
    
    return (
        <div>
            <p>Robots</p>
        </div>
    );
}

export default Robots;
