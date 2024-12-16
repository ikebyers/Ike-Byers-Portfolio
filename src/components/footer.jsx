// import React from "react";
// import { Link } from 'react-router-dom';
// import './footer.css'; // TODO: create a .css file for styling, or use bootstrap
import { FaGithub, FaLinkedin, FaSpotify, FaYoutube, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='footer-container'>
        <footer className="footer">
            <div>
                <div className='text-center'>&copy; {new Date().getFullYear()} Ike Byers. All Rights Reserved.</div>
                <br></br>
                <div>
                <div className="footer-icons text-center social-icons">
                    <a href="https://github.com/ikebyers" target="_blank" rel="noopener noreferrer" className="footer-icons text-center">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/ike-byers-9381b0185/" target="_blank" rel="noopener noreferrer" className="footer-icons text-center">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://open.spotify.com/artist/6lA0hlZQNMpHpsQ9ki8KEF?si=nvfbf66_SNKERGylvSRWsw" target="_blank" rel="noopener noreferrer" className="footer-icons text-center">
                        <FaSpotify size={24} />
                    </a>
                    {/* <a href="https://www.instagram.com/yesbeki/" target="_blank" rel="noopener noreferrer" className="footer-icons text-center">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://www.youtube.com/@yesbeki" target="_blank" rel="noopener noreferrer" className="footer-icons text-center">
                        <FaYoutube size={24} />
                    </a> */}
                </div>
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;