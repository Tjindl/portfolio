import Data from "./Data";  
import React from 'react';
import './Projects.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Projects() {
    return (
    <div>
        {Data.map(({name, link, description, tech}) => {
            return (
                <>
                  <Card className="card">
                    <Card.Header className="header" as="h5">{name}</Card.Header>
                    <Card.Body className="body">
                        <Card.Title className="title">Tech used : {tech}</Card.Title>
                        <Card.Text className="text">{description}</Card.Text>
                        <div className='button-cont'>
                            <a className="link" href={link}> Github Link</a>
                        </div>
                    </Card.Body>
                  </Card>
                </>)})}
    </div>
    
    );
}

export default Projects;