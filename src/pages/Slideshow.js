import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Slideshow.css'

function Slideshow({ media }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextMedia = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
    };

    const prevMedia = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
    };

    const renderMedia = (item) => {
        if (item.type === 'video') {
            return (
                <iframe
                    width="800"
                    height="450"
                    src={item.src}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            );
        }
        return <img src={item.src} alt={`Slide ${currentIndex}`} className="project-image" />;
    };

    return (
        <div className="slideshow">
            <button onClick={prevMedia} className="arrow-button">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            {renderMedia(media[currentIndex])}
            <button onClick={nextMedia} className="arrow-button">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
}

export default Slideshow;