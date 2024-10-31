// import React from 'react';

const Resume = () => {
    return (
        <div className="resume-page">
        <header className="resume-header">
            <h1>Ike Byers</h1>
            <h2>Web Developer | Software Engineer | Music Producer</h2>
            <p>
                A detail-oriented and resourceful developer with a passion for creating impactful digital solutions.
                Blending a background in music production with web development expertise to approach projects with 
                creativity and technical precision.
            </p>
        </header>

        <section className="resume-section">
            <h3>Experience</h3>
            <div className="resume-item">
            <h4>Software Developer</h4>
            <p>Company Name | Dates of Employment</p>
                <ul>
                    <li>Built responsive web applications using modern JavaScript frameworks like React.</li>
                    <li>Collaborated with cross-functional teams to develop and implement new features.</li>
                    <li>Focused on delivering clean, scalable, and maintainable code.</li>
                </ul>
            </div>
        </section>

        <section className="resume-section">
            <h3>Education</h3>
            <div className="resume-item">
                <h4>Bachelor of Arts in [Your Major]</h4>
                <p>University Name | Year of Graduation</p>
            </div>
        </section>

        <section className="resume-section">
            <h3>Skills</h3>
            <ul className="skills-list">
                <li>JavaScript (React, Node.js)</li>
                <li>SQL</li>
                <li>HTML & CSS</li>
                <li>Audio Production & Mixing (Ableton)</li>
                <li>Git & Version Control</li>
            </ul>
        </section>

    
        <section className="resume-section">
            <h3>Achievements & Projects</h3>
            <ul className="achievements-list">
                <li>Built and launched a responsive portfolio website showcasing various projects.</li>
                <li>Worked on a collaborative project to develop an e-commerce platform prototype.</li>
                <li>Produced, recorded, and wrote multiple full-length album for music artists.</li>
            </ul>
        </section>


        <footer className="resume-footer">
            <p>Feel free to download my complete resume or get in touch for further details.</p>
            <a 
                href="../assets/resumePlaceholder.pdf"
                className="resume-download-btn"
                target="_blank"
                rel="noopener noreferrer"
                >
            
            <button type="button" className="btn btn-outline-primary">Download Resume</button>
            </a>
        </footer>
    </div>
    );
};

export default Resume;