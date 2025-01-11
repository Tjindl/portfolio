import Data from "./Data";  
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Projects.css';
import Card from 'react-bootstrap/Card';

function Projects() {
    return (
    <div>
        {Data.map(proj => {
            return (
                <div key={proj.name}>
                  <Card className="card">
                    <Card.Header className="header" as="h5">{proj.name}</Card.Header>
                    <Card.Body className="body">
                        <Card.Title className="title">Tech used : {proj.tech}</Card.Title>
                        <Card.Text className="text">{proj.description}</Card.Text>
                        <div className="alignment">
                        <div className='button-cont'>
                            <a className="link" href={proj.link}> Github Link</a>
                        </div>
                        </div>
                    </Card.Body>
                  </Card>
                </div>)})}
    </div>
    
    );
}

export default Projects;