import React, { useEffect, useState } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseover', handleMouseOver, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Scroll Progress Bar */}
            <div className="scroll-progress-bar">
                <div
                    className="scroll-progress-fill"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* Scroll Progress Percentage Indicator */}
            <div className="scroll-percentage">
                {Math.round(scrollProgress)}%
            </div>

            {/* Custom Cursor Follower */}
            <div
                className={`cursor-follower ${isHovering ? 'hovering' : ''}`}
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`
                }}
            />
            <div
                className="cursor-dot"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`
                }}
            />

            {/* Scroll to Top Button */}
            {scrollProgress > 20 && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="scroll-to-top"
                    aria-label="Scroll to top"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M18 15l-6-6-6 6" />
                    </svg>
                </button>
            )}
        </>
    );
};

export default ScrollProgress;
