import React, { useEffect } from 'react';

function Home() {
    useEffect(() => {
        document.title = "Home - Robert Teal"; // Set the tab title
    }, []);
    
    return (
        <div class="Center">
        <p>Hello! My name is</p>
        <h1>Robert Teal</h1>
    </div>
    );
}

export default Home;
