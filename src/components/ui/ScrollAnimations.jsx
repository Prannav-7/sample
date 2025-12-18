import React, { useEffect, useState } from 'react';
import './ScrollAnimations.css';
// import characterImage from '../3d/img.jpg'; // Image file not found

const ScrollAnimations = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate parallax movement for the character - moves down as you scroll down
    const characterTransform = {
        transform: `translateY(${scrollY * 0.3}px)`,
        opacity: Math.max(0.4, 1 - scrollY / 1500)
    };

    return (
        <div className="scroll-animations-container">
            {/* Single animated character with smooth parallax effect */}
            {/* Commented out until image is added
            <div
                className="parallax-character"
                style={characterTransform}
            >
                <img
                    src={characterImage}
                    alt="Background Character"
                    className="character-image"
                />
            </div>
            */}

            {/* Subtle gradient overlay for depth */}
            <div className="gradient-overlay" />
        </div>
    );
};

export default ScrollAnimations;
