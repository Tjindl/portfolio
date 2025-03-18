import Data from "./Data";  
import React, { useState, Suspense, useCallback } from 'react';
import './Projects.css';
import Card from 'react-bootstrap/Card';

function LoadingProjects() {
    return (
        <div className="loading-container" role="alert" aria-busy="true" aria-label="Loading projects">
            {[1, 2, 3].map(i => (
                <div key={i} className="loading-card"></div>
            ))}
        </div>
    );
}

function Projects() {
    const [filter, setFilter] = useState('All');
    const [isLoading, setIsLoading] = useState(true);
    
    const handleKeyPress = useCallback((event, tech) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setFilter(tech);
        }
    }, []);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const allTechnologies = ['All', ...new Set(Data.flatMap(proj => 
        proj.tech.split(',').map(tech => tech.trim())
    ))];

    const filteredProjects = filter === 'All' 
        ? Data 
        : Data.filter(proj => proj.tech.includes(filter));

    if (isLoading) {
        return <LoadingProjects />;
    }

    return (
        <div>
            <div className="filter-container" role="toolbar" aria-label="Project filters">
                {allTechnologies.map(tech => (
                    <button 
                        key={tech}
                        className={`filter-btn ${filter === tech ? 'active' : ''}`}
                        onClick={() => setFilter(tech)}
                        onKeyDown={(e) => handleKeyPress(e, tech)}
                        aria-pressed={filter === tech}
                        aria-label={`Filter by ${tech}`}
                        tabIndex={0}
                    >
                        {tech}
                    </button>
                ))}
            </div>
            <Suspense fallback={<LoadingProjects />}>
                <div className="projects-grid" role="list">
                    {filteredProjects.map(proj => (
                        <Card key={proj.name} className="card" role="listitem">
                            <Card.Header className="header" as="h5">{proj.name}</Card.Header>
                            <Card.Body className="body">
                                <Card.Title className="title">Tech used: {proj.tech}</Card.Title>
                                <Card.Text className="text">{proj.description}</Card.Text>
                                <div className='button-cont'>
                                    <a 
                                        className="link" 
                                        href={proj.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        aria-label={`View ${proj.name} on GitHub`}
                                    >
                                        Github Link
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Suspense>
        </div>
    );
}

export default Projects;