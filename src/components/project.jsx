import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const Project = ({ title, intro, description, techStack, link, link2, image }) => {
    const [isFlipped, setIsFlipped] = useState(false); // State to track the flip

    return (
        <div>
            <div className="col project-card-container" onClick={() => setIsFlipped(!isFlipped)}>
                <div className={`project-card ${isFlipped ? 'flipped' : ''}`}>
                    {/* Front Side */}
                    <div className="card-face front">
                        <div className='project-link-icons'>
                            <a href={link} target="_blank" rel="noopener noreferrer" className='text-quarternary'>
                                <FaGithub size={40} />
                            </a>
                            {link2 && (
                                <a href={link2} target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="42" height="42" className="svg-link">
                                        <path
                                            d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="32"
                                        />
                                    </svg>
                                </a>
                            )}
                        </div>
                        <div className="card-body">
                            <h3 className="card-title text-left font-size-md font-bold project-title">{title}</h3>
                            <div className="font-size-xs project-intro font-italic">{intro}</div>
                            <br />
                            <div>
                                <div className='font-size-sm text-mono project-tst'>Tech Stack</div>
                                <div className="project-tech-stack text-mono">{techStack.join(' • ')}</div>
                            </div>
                        </div>
                    </div>

                    {/* Back Side */}
                    <div className="card-face back">
                        <div className="card-body">
                        <div className='project-link-icons-back'>
                                <a href={link} target="_blank" rel="noopener noreferrer" className='text-quarternary'>
                                    <FaGithub size={40} />
                                </a>
                                {link2 && (
                                    <a href={link2} target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="42" height="42" className="svg-link">
                                            <path
                                                d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="32"
                                            />
                                        </svg>
                                    </a>
                                )}
                            </div>
                            <h3 className="card-title text-left font-size-md font-bold project-back-title">About this Project</h3>
                            <p className="font-size-xs project-desc">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;