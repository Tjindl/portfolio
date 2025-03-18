import Data from "./Data";  
import React, { useState, Suspense } from 'react';
import './Projects.css';
import Card from 'react-bootstrap/Card';

function LoadingProjects() {
    return (
        <div className="loading-container">
            {[1, 2, 3].map(i => (
                <div key={i} className="loading-card"></div>
            ))}
        </div>
    );
}

function Projects() {
    const [filter, setFilter] = useState('All');
    const [isLoading, setIsLoading] = useState(true);
    
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
            <div className="filter-container">
                {allTechnologies.map(tech => (
                    <button 
                        key={tech}
                        className={`filter-btn ${filter === tech ? 'active' : ''}`}
                        onClick={() => setFilter(tech)}
                    >
                        {tech}
                    </button>
                ))}
            </div>
            <Suspense fallback={<LoadingProjects />}>
                <div className="projects-grid">
                    {filteredProjects.map(proj => (
                        <Card key={proj.name} className="card">
                            <Card.Header className="header" as="h5">{proj.name}</Card.Header>
                            <Card.Body className="body">
                                <Card.Title className="title">Tech used : {proj.tech}</Card.Title>
                                <Card.Text className="text">{proj.description}</Card.Text>
                                {/* <div className="alignment"> */}
                                    <div className='button-cont'>
                                        <a className="link" href={proj.link} target="_blank" rel="noopener noreferrer">
                                            Github Link
                                        </a>
                                    </div>
                                {/* </div> */}
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Suspense>
        </div>
    );
}

export default Projects;