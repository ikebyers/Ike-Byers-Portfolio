// import React from 'react';
import Project from '../components/project.jsx';

const Portfolio = () => {
    const projects = [
        {
            title: "Playlist Persona",
            intro: "A personalized playlist generator based on user input",
            description: "“Playlist Persona” is an app that generates personalized playlists using OpenAI and Google APIs. By utilizing OpenAI’s API for natural language processing, the app interprets user inputs to understand preferences, moods, and contextual information. It then integrates with Google APIs to retrieve relevant music metadata and artist details.",
            techStack: ["React", "PostgreSQL", "TypeScript", "Express"],
            link: "https://github.com/ikebyers/Playlist-Persona",
            link2: "https://test-deploy-ivka.onrender.com/",
            image: "/project-photos/playlistpersona.png"
        },
        {
            title: "JIMK Connect 4",
            intro: "An online, virtual spin to the classic boardgame",
            description: "Connect 4 is a two-player board game where players take turns dropping colored discs into a vertical grid. The first player to get four discs in a row (horizontally, vertically, or diagonally) wins the game. This project is a digital implementation of the classic game utilizing Socket.io for online multiplayer capabilities.",
            techStack: ["MongoDB", "TypeScript", "CSS", "Express", "React", "Socket.io"],
            link: "https://github.com/keithrsialana/jimk-connect4",
            link2: "https://jimk-connect4.onrender.com/",
            image: "/project-photos/jimkConnect4.png"
        },
        {
            title: "StaffSync",
            intro: "An analytics application for tracking employee information",
            description: "StaffSync is a CLI-based employee management application that helps companies keep track of their departments, roles, and employees. Built using Node.js, PostgreSQL, and TypeScript, StaffSync allows users to view, add, and update employee information in an organized manner via an intuitive command-line interface.",
            techStack: ["Node.js", "Express", "PostgreSQL"],
            link: "https://github.com/ikebyers/StaffSync-Employee-Tracker",
            link2: "",
            image: "/project-photos/staffsync.png"
        },
        {
            title: "Rainy Day Fund",
            intro: "A savings calculator focused on building user budgets",
            description: "'Rainy Day Fund' is a savings calculator designed to take a user's given income and expenses and calculate their working budget. In addition, this app also allows users to create savings goals dynamically with their income and expenses if they change over time, allowing the user to effectively adjust their budget to reach their intended goals",
            techStack: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/ikebyers/Rainy-Day-Fund",
            link2: "",
            image: "/project-photos/rainydayfund.png"
        },
        {
            title: "bibliogle",
            intro: "An online book collection that has user database functionality utilizing Google Books API",
            description: "'biblogile' is a full-stack web application that allows users to search for books, view details, and save favorite books to their profiles. It utilizes modern web technologies, including React, Apollo Client, and GraphQL on the frontend, and Node.js, Express, and MongoDB on the backend.",
            techStack: ["React.js", "TypeScript", "Express", "GraphQL"],
            link: "https://github.com/ikebyers/Ike-Byers-Portfolio",
            link2: "https://bibliogle.onrender.com/",
            image: "/project-photos/bibliogle.png"
        },
        {
            title: "BreezeAhead",
            intro: "A 'no-frills' five-day weather forecast application",
            description: "BreezeAhead is a weather forecasting application that allows you to search for any city and view both the current weather and a 5-day forecast utilizing the Open Weather API. The app provides a structured display of city-specific weather information, including details about temperature, conditions, and more.",
            techStack: ["TypeScript", "Vite", "Express", "React"],
            link: "https://github.com/ikebyers/BreezeAhead",
            link2: "",
            image: "/project-photos/breezeahead.png"
        },
    ];

    return (
        <div className="portfolio-page">
            <h1 className="page-title">Projects</h1>
                <div id="project-cards" className="row row-cols-1 row-cols-md-3 g-3">
                {projects.map((project, index) => (
                    <Project
                    key={index}
                    title={project.title}
                    intro={project.intro}
                    description={project.description}
                    techStack={project.techStack}
                    link={project.link}
                    link2={project.link2}
                    // image={project.image}
                    />
                    ))}
                </div>
        </div>
    );
};

export default Portfolio;