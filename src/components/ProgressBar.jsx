import { useState, useEffect } from 'react';
import './ProgressBar.css';

function ProgressBar() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollPx = document.documentElement.scrollTop;
            const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = `${scrollPx / winHeightPx * 100}%`;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', updateProgress);
        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: scrollProgress }}></div>
        </div>
    );
}

export default ProgressBar;