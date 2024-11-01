// import React from 'react';
import Project from '../components/project.jsx';

const Portfolio = () => {
    const projects = [
        {
            title: "Rainy Day Fund",
            description: "A savings calculator focused on building budgets for hobbies",
            techStack: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/ikebyers/Rainy-Day-Fund",
            link2: "",
            image: "../public/project-photos/rainydayfund.jpg"
        },
        {
            title: "StaffSync",
            description: "A tracking and analytics application for monitoring employee information",
            techStack: ["Node.js", "Express", "PostgreSQL"],
            link: "https://github.com/ikebyers/StaffSync-Employee-Tracker",
            link2: "",
            image: "../public/project-photos/staffsync.jpg"
        },
        {
            title: "Ike Byers Portfolio",
            description: "A personal portfolio showcasing my experience in coding and web development",
            techStack: ["React.js", "JavaScript"],
            link: "https://github.com/ikebyers/Ike-Byers-Portfolio",
            link2: "",
            image: "../public/project-photos/portfolio.jpg"
        },
        {
            title: "READme Builder",
            description: "A terminal-based application the generates READme.md files coding projects",
            techStack: ["JavaScript", "Node.js"],
            link: "https://github.com/ikebyers/READme-Builder",
            link2: "",
            image: "../public/project-photos/readme.jpg"
        },
        {
            title: "Example Project 5",
            description: "A placeholder project card for a future project!",
            techStack: ["Some", "Of", "Them"],
            link: "https://github.com/ikebyers/READme-Builder",
            link2: "",
            image: "#"
        },
        {
            title: "Example Project 6",
            description: "Another placeholder project card for a future project!",
            techStack: ["Hopefully", "Less"],
            link: "https://github.com/ikebyers/READme-Builder",
            link2: "",
            image: "#"
        },


    ];

    return (
        <div className="portfolio-page">
            <h1>Projects</h1>
                <div id="project-cards" className="row row-cols-1 row-cols-md-2 g-4">
                {projects.map((project, index) => (
                    <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    link={project.link}
                    link2={project.link2}
                    image={project.image}
                    />
                    ))}
                </div>
        </div>
    );
};

export default Portfolio;