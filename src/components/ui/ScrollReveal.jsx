import React, { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css';

const ScrollReveal = ({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 0.8,
    threshold = 0.1
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        // Don't unobserve if you want re-animation on scroll back
                        // observer.unobserve(entry.target);
                    } else {
                        // Optionally reset when scrolling away
                        setIsVisible(false);
                    }
                });
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [threshold]);

    return (
        <div
            ref={elementRef}
            className={`scroll-reveal ${animation} ${isVisible ? 'is-visible' : ''}`}
            style={{
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`
            }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
