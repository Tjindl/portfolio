import { Link } from 'react-scroll';
import './Navigation.css';
import { useTheme } from './context/ThemeContext';

function Navigation() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500}>Projects</Link>
                </li>
                <li>
                    <Link to="connect" smooth={true} duration={500}>Connect</Link>
                </li>
                <li className="resume-link">
                    <a href="/assets/resume/Tushar_latest_resume.pdf" download="Tushar_Jindal_Resume.pdf" className="resume-button">
                        Resume 📄
                    </a>
                </li>
                <li>
                    <button onClick={toggleTheme} className="theme-toggle">
                        <span>{isDark ? '☀️' : '🌙'}</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;