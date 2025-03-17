import './Skills.css';

function Skills() {
    const skills = {
        'Languages': ['Python', 'Java', 'JavaScript', 'SQL', 'HTML/CSS'],
        'Frameworks/Libraries': ['React', 'Spring Boot', 'Node.js', 'Bootstrap'],
        'Tools & Technologies': ['Git', 'MongoDB', 'Data Analysis', 'Machine Learning'],
        'Mathematics': ['Data Mathematics', 'Statistics', 'Algorithms', 'Problem Solving']
    };

    return (
        <div className="skills-section">
            <h1>🛠️ Skills</h1>
            <div className="skills-container">
                {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="skill-category">
                        <h3>{category}</h3>
                        <div className="skill-list">
                            {skillList.map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;