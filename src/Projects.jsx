import Data from "./Data";  
import React from 'react';
import './Projects.css';

function Projects() {
    return (
    <div>
        {Data.map(({name, link, description, tech}) => {
            return (
                <div className='project'>
                    <h2>{name}</h2>
                    <a href={link} target="_blank">GitHub link</a>
                    <p>{description}</p>
                    <p>Technologies used: {tech}</p>
                </div>)})}
    </div>
    );
}

export default Projects;