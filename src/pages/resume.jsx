// import React from 'react';

const Resume = () => {
    return (
        <div className="resume-page">
        <header className="resume-header">
        <br></br>
            <h1>Ike Byers</h1>
            <h2>Web Developer | Software Engineer | Music Producer</h2>

        <br></br>

            <div>
                A detail-oriented and resourceful developer with a passion for creating impactful digital solutions.
                Blending a background in music production with web development expertise to approach projects with 
                creativity and technical precision.
            </div>
            <br></br>
        </header>

        <br></br>

        <section className="resume-section">
            <h3>Experience</h3>
            <div className="resume-item">
            {/* <h4>Software Developer</h4>
            <div>Company Name | Dates of Employment</div> */}
                <ul>
                    <li>Built responsive web applications using modern JavaScript frameworks like React.</li>
                    <li>Collaborated with cross-functional teams to develop and implement new features.</li>
                    <li>Focused on delivering clean, scalable, and maintainable code.</li>
                </ul>
            </div>
        </section>

        <br></br>

        <section className="resume-section">
            <h3>Education</h3>
            <div className="resume-item">
                <h4>Associate in Arts [Communication]</h4>
                <div>Appalachian State University | 2016-2018</div>

            </div>
        </section>

        <br></br>
        <br></br>

        <section className="resume-section">
            <h3>Skills</h3>
            <div className="skills-container">
                <ul className="skills-list">
                    <li>JavaScript (React, Node.js)</li>
                    <li>SQL</li>
                    <li>HTML & CSS</li>
                    <li>Git & Version Control</li>
                    <li>Audio Production & Mixing (Ableton Live)</li>
                </ul>
            </div>
        </section>

        <br></br>
    
        <section className="achievements-section">
            <h3>Achievements & Projects</h3>
            <ul className="achievements-list">
                <li>Built and launched a responsive portfolio website showcasing various projects.</li>
                <li>Worked on a collaborative project to develop an e-commerce platform prototype.</li>
                <li>Produced, recorded, and wrote multiple full-length album for music artists.</li>
            </ul>
        </section>
        <br></br>            <br></br>
        <section className="resume-footer">
            <div>Feel free to download my complete resume or get in touch for further details.</div>
            
            <br></br>

            <a 
                href="../assets/resumePlaceholder.pdf"
                className="resume-download-btn"
                target="_blank"
                rel="noopener noreferrer"
                >
            <button type="button" className="btn btn-outline-primary">Download Resume</button>
            </a>
            <br></br>
            <br></br>
        </section>
    </div>
    );
};

export default Resume;