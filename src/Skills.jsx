import './Skills.css';
import { useState } from 'react';
import { Link } from 'react-scroll';

function Skills() {
    const [activeCategory, setActiveCategory] = useState(null);
    const skills = {
        'Languages': [
            { name: 'Python', level: 90, color: '#3776AB' },
            { name: 'Java', level: 85, color: '#007396' },
            { name: 'JavaScript', level: 88, color: '#F7DF1E' },
            { name: 'SQL', level: 82, color: '#4479A1' },
            { name: 'HTML/CSS', level: 85, color: '#E34F26' }
        ],
        'Frameworks/Libraries': [
            { name: 'React', level: 88, color: '#61DAFB' },
            { name: 'Spring Boot', level: 80, color: '#6DB33F' },
            { name: 'Node.js', level: 82, color: '#339933' },
            { name: 'Bootstrap', level: 85, color: '#7952B3' }
        ],
        'Tools & Technologies': [
            { name: 'Git', level: 88, color: '#F05032' },
            { name: 'MongoDB', level: 80, color: '#47A248' },
            { name: 'Data Analysis', level: 85, color: '#FF6B6B' },
            { name: 'Machine Learning', level: 78, color: '#00A6D6' }
        ],
        'Mathematics': [
            { name: 'Data Mathematics', level: 92, color: '#9C27B0' },
            { name: 'Statistics', level: 88, color: '#2196F3' },
            { name: 'Algorithms', level: 85, color: '#FF9800' },
            { name: 'Problem Solving', level: 90, color: '#4CAF50' }
        ]
    };

    const handleSkillClick = (skillName) => {
        const projectsSection = document.querySelector('#projects');
        const filterBtn = document.querySelector(`button[data-tech="${skillName}"]`);
        if (filterBtn) {
            filterBtn.click();
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="skills-section">
            <h1>🛠️ Skills</h1>
            <div className="skills-container">
                {Object.entries(skills).map(([category, skillList]) => (
                    <div 
                        key={category} 
                        className={`skill-category ${activeCategory === category ? 'active' : ''}`}
                        onMouseEnter={() => setActiveCategory(category)}
                        onMouseLeave={() => setActiveCategory(null)}
                    >
                        <h3>{category}</h3>
                        <div className="skill-list">
                            {skillList.map(skill => (
                                <div 
                                    key={skill.name}
                                    className="skill-tag-container"
                                    onClick={() => handleSkillClick(skill.name)}
                                    role="button"
                                    tabIndex={0}
                                    style={{'--skill-color': skill.color}}
                                >
                                    <div className="skill-tag">
                                        <span className="skill-name">{skill.name}</span>
                                        <div className="skill-progress-container">
                                            <div 
                                                className="skill-progress" 
                                                style={{ width: `${skill.level}%` }}
                                            >
                                                <span className="skill-level">{skill.level}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;