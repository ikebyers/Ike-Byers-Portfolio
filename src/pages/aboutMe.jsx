import React from 'react';

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <h1>About Me</h1>
            <div className="row align-items-start">
                <div className="col-md-4">
                    <img 
                        src="/ike-b-p1.jpg" 
                        className="img-fluid rounded" 
                        alt="portrait of Ike Byers" 
                    />
                </div>
            <div className="col-md-8">
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hi, I’m Ike Byers, a budding software developer with a passion for developing expertise in emerging technologies, learning on the fly, and solving problems creatively. While I recently transitioned into web development, my background in music recording and production has equipped me with a keen eye for detail, problem-solving skills, rounded technical abilities and a drive to turn ideas into reality.</p>

            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; My journey began in the world of music, where I developed a love for creating immersive experiences through sound as a music producer, recording engineer, and songwriter. In this field, I honed my skills in critical listening, technical troubleshooting, advanced recording/production practices, and collaboration with artists to bring their visions to life. These experiences taught me how to approach challenges resourcefully and adapt to new technologies quickly.</p>

            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Over the past few months, I’ve immersed myself in web development, attending EdX's full-stack coding program through University of North Carolina at Charlotte and began creating projects that challenged me to learn new concepts and problem-solve on the fly. Whether it’s building a responsive web application or experimenting with JavaScript frameworks, I thrive on tackling obstacles head-on and finding innovative solutions.</p>

            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Looking forward, I’m excited to continue expanding my skill set in web development and explore new programs. My goal is to contribute to projects that blend creativity and technology to create engaging user experiences. I’m eager to learn from every opportunity and push my boundaries as a developer.</p>
        </div>
        </div>
        <br></br>
        <div> If you’re interested in seeing the projects I've made, connecting with me, or learning more about my journey, feel free to reach out or explore the rest of my portfolio website!</div>
        </div>
    )
};

export default AboutMe;