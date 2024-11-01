// import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Project = ({ title, description, techStack, link, link2, image }) => {
    // possibly add description into the card and make a flipping functionality to show a short description on the back side of the project card
    return (
            <div className="col">
                <div className="card">
                    <img src={image} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <div className="card-text">{description}</div>
                        <br></br>
                        <h5 className="card-tech-stack">{techStack.join(', ')}</h5>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={24} /></a>
                        <a href={link2} target="_blank" rel="noopener noreferrer">Deployed App</a>
                    </div>
                </div>
            </div>
    )
}

export default Project;