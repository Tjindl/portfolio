import { useState, useEffect } from 'react';
import './ScrollToTop.css';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const toggleVisibility = () => {
        const scrolled = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrolled / height) * 100;
        
        setScrollProgress(scrollPercent);
        setIsVisible(scrolled > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
            {isVisible && (
                <button 
                    onClick={scrollToTop}
                    className="scroll-to-top"
                    aria-label="Scroll to top"
                >
                    ↑
                </button>
            )}
        </>
    );
}

export default ScrollToTop;