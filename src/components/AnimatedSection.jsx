import { useEffect, useRef } from 'react';
import './AnimatedSection.css';

function AnimatedSection({ children, className = '' }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            },
            {
                threshold: 0.1
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className={`animated-section ${className}`}>
            {children}
        </div>
    );
}

export default AnimatedSection;