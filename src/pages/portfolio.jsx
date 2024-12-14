// import React from 'react';
import Project from '../components/project.jsx';

const Portfolio = () => {
    const projects = [
        {
            title: "Playlist Persona",
            description: "A personalized playlist generator based on user input utilizing OpenAI API and Youtube API",
            techStack: ["React", "PostgreSQL", "TypeScript", "Express"],
            link: "https://github.com/ikebyers/Playlist-Persona",
            link2: "https://test-deploy-ivka.onrender.com/",
            image: "/project-photos/playlistpersona.png"
        },
        {
            title: "JIMK Connect 4",
            description: "A virtual spin to the online classic boardgame utilizing Socket.io for online multiplayer connectivity",
            techStack: ["MongoDB", "TypeScript", "CSS", "Express", "React", "Socket.io"],
            link: "https://github.com/keithrsialana/jimk-connect4",
            link2: "https://jimk-connect4.onrender.com/",
            image: "/project-photos/jimkConnect4.png"
        },
        {
            title: "StaffSync",
            description: "A tracking and analytics application for monitoring employee information",
            techStack: ["Node.js", "Express", "PostgreSQL"],
            link: "https://github.com/ikebyers/StaffSync-Employee-Tracker",
            link2: "",
            image: "/project-photos/staffsync.png"
        },
        {
            title: "Rainy Day Fund",
            description: "A savings calculator focused on building budgets for hobbies",
            techStack: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/ikebyers/Rainy-Day-Fund",
            link2: "",
            image: "/project-photos/rainydayfund.png"
        },
        {
            title: "bibliogle",
            description: "An online book collection that has user database functionality utilizing Google Books API",
            techStack: ["React.js", "JavaScript"],
            link: "https://github.com/ikebyers/Ike-Byers-Portfolio",
            link2: "https://bibliogle.onrender.com/",
            image: "/project-photos/bibliogle.png"
        },
        {
            title: "BreezeAhead",
            description: "A five-day weather forecast application utilizing Open Weather API for location based search queries",
            techStack: ["TypeScript", "Vite", "Express"],
            link: "https://github.com/ikebyers/BreezeAhead",
            link2: "",
            image: "/project-photos/breezeahead.jpg"
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