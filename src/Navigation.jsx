import { Link } from 'react-scroll';
import './Navigation.css';
import { useTheme } from './context/ThemeContext';
import { useState, useEffect } from 'react';

function Navigation() {
    const { isDark, toggleTheme } = useTheme();
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'skills', 'projects', 'connect'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="navigation">
            <div className="nav-content">
                <ul>
                    <li>
                        <Link 
                            to="about" 
                            smooth={true} 
                            duration={500} 
                            className={activeSection === 'about' ? 'active' : ''}
                        >
                            About
                            <div className="nav-indicator"></div>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="skills" 
                            smooth={true} 
                            duration={500}
                            className={activeSection === 'skills' ? 'active' : ''}
                        >
                            Skills
                            <div className="nav-indicator"></div>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="projects" 
                            smooth={true} 
                            duration={500}
                            className={activeSection === 'projects' ? 'active' : ''}
                        >
                            Projects
                            <div className="nav-indicator"></div>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="connect" 
                            smooth={true} 
                            duration={500} 
                            className={activeSection === 'connect' ? 'active' : ''}
                        >
                            Connect
                            <div className="nav-indicator"></div>
                        </Link>
                    </li>
                    <li>
                        <a 
                            href="/assets/resume/Tushar_latest_resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="resume-btn"
                        >
                            Resume
                        </a>
                    </li>
                    <li>
                        <button onClick={toggleTheme} className="theme-toggle">
                            <span>{isDark ? '☀️' : '🌙'}</span>
                            <div className="toggle-background"></div>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;