// import React from 'react';
import { FaGithub, FaLinkedin, FaSpotify } from 'react-icons/fa';
// import { FaYoutube, FaInstagram } from 'react-icons/fa';
import contactForm from '../components/contactForm';

const AboutMe = () => {

    const {
        name,
        email,
        message,
        errors,
        clicked,
        handleInputChange,
        handleFormSubmit,
        handleFocus,
        handleValidation
    } = contactForm();

    return (
        <div className='about-me-container'>
            <div className="page-tab">
                <h1 className="page-title">About Me</h1>
            </div>
            <div className='about-me-section'>
                <div className="about-me-grid">
                    <div className="portrait-container portrait-icons">
                        <img
                            src="/ike-b-p1.jpg"
                            className="bio-image"
                            alt="portrait of Ike Byers"
                        />
                    </div>
                    <div className='intro-card-container'>
                        <div className="intro-card">
                            <div className="font-size-sm">Hey, my name is <span><div className="font-size-xl">Ike Byers.</div></span></div>
                            <div className="font-size-md">I turn ideas into <span className="font-italic text-quarternary text-bounce">interactive experiences</span> on the web.</div>
                            <br></br>
                            <div className='font-size-xs'>I specialize in creating modern, dynamic websites and applications. I’m driven by seamless interactions, scalable solutions, and building things people love to use.</div>
                        </div>
                    </div>
                </div>
                <div className='split-screen'>
                    <div className='left-half'>
                        <div className='social-icons portrait-icons'>
                            <a
                                href="https://github.com/ikebyers" target="_blank" rel="noopener noreferrer" className='text-quarternary icon'>
                                <FaGithub size={35} />
                            </a>
                            <a href="https://www.linkedin.com/in/ike-byers-9381b0185/" target="_blank" rel="noopener noreferrer" className='text-quarternary icon'>
                                <FaLinkedin size={35} />
                            </a>
                            <a href="https://open.spotify.com/artist/6lA0hlZQNMpHpsQ9ki8KEF?si=nvfbf66_SNKERGylvSRWsw" target="_blank" rel="noopener noreferrer" className='text-quarternary icon'>
                                <FaSpotify size={35} />
                            </a>
                        </div>
                    </div>
                    <div className='right-half'>
                        <div className='tech-card'>
                            <div className='font-size-md tech-card-title text-neutral text-mono'>Technologies:
                            </div>
                            <div className='tech-grid'>
                                <div className='fonst-size-xxs tech-grid-item'>‣ JavaScript(ES6+)</div>
                                <div className='fonst-size-sm tech-grid-item'>‣ TypeScript</div>
                                <div className='fonst-size-sm tech-grid-item'>‣ HTML5/CSS3</div>
                                <div className='fonst-size-sm tech-grid-item'>‣ Node.js</div>
                                <div className='fonst-size-sm tech-grid-item'>‣ React</div>
                                <div className='fonst-size-sm tech-grid-item'>‣ Express</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bio-grid">
                <div className="about-me-text">
                    <div className="card bio-card">
                        <div className="font-size-lg text-tertiary font-bold">Bio</div>
                        <br></br>
                        <p className='font-size-xs'>I&apos;m a budding software developer with a passion for developing expertise in emerging technologies, learning on the fly, and solving problems creatively. While I recently transitioned into web development, my background in music recording and production has equipped me with a <span className="font-bold text-tertiary">keen eye for detail, problem-solving skills, rounded technical abilities and a drive to turn ideas into reality.</span></p>

                        <p className='font-size-xs'>My journey began in the world of music, where I developed a love for creating immersive experiences through sound as a <span className="font-bold text-tertiary">music producer, recording engineer, and songwriter.</span> In this field, I honed my skills in critical listening, technical troubleshooting, and collaboration with artists to bring their visions to life. These experiences taught me how to approach challenges resourcefully and adapt to new technologies quickly.</p>

                        <p className='font-size-xs'>Over the past few months, I’ve immersed myself in web development, completing the<span className="font-bold text-tertiary">full-stack software development</span> program through <span className="font-bold text-tertiary">University of North Carolina at Charlotte</span> and began creating projects that challenged me to learn new concepts and problem-solve on the fly. Whether it’s building a responsive web application or experimenting with TypeScript frameworks, I thrive on tackling obstacles head-on and finding innovative solutions.</p>

                        <p className='font-size-xs'>Looking forward, I’m excited to continue expanding my skill set in web development and explore new programs. My goal is to contribute to projects that blend creativity and technology to create engaging user experiences. I’m eager to learn from every opportunity and push my boundaries as a developer.</p>
                    </div>
                </div>
            </div>
            <div className="contact-section">
                <div className="contact-info">
                    <div className='text-bold font-size-xl text-tertiary'>Contact</div>
                    <div className='font-size-md'>Let&apos;s chat!</div>
                    <br/>
                    <div className='contact-card'>
                        <p>Email: <a href="mailto:ikebyersmgmt@gmail.com" className="text-link">ikebyersmgmt@gmail.com</a></p>
                        <p>Phone: <span className='font-bold phone-text'>+1 785-447-1914</span></p>
                        <p>instagram: <a href="https://instagram.com/yesbeki" className="text-link">@yesbeki</a></p>
                    </div>
                </div>
                <form className="contact-form" onSubmit={handleFormSubmit}>
                    <div className='form-container'>
                        <div className="form-row">
                            <input
                                id="name"
                                type="text"
                                placeholder="Name"
                                className="form-input"
                                value={name}
                                onChange={handleInputChange}
                                onFocus={() => handleFocus('name')}
                                onBlur={() => handleValidation('name')}
                            />
                            {clicked.name && errors.name && <small className="text-danger">{errors.name}</small>}
                        </div>
                        <div className="form-row">
                            <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                className="form-input"
                                value={email}
                                onChange={handleInputChange}
                                onFocus={() => handleFocus('email')}
                                onBlur={() => handleValidation('email')}
                            />
                            {clicked.email && errors.email && <small className="text-danger">{errors.email}</small>}
                        </div>
                        <div className="form-row">
                            <textarea
                                id="message"
                                placeholder="Type your message here..."
                                className="form-textarea"
                                value={message}
                                onChange={handleInputChange}
                                onFocus={() => handleFocus('message')}
                                onBlur={() => handleValidation('message')}
                            />
                            {clicked.message && errors.message && <small className="text-danger">{errors.message}</small>}
                        </div>
                    </div>
                    <button type="submit" className="submit-button">SUBMIT</button>
                </form>
            </div>
        </div>
    )
};

export default AboutMe;