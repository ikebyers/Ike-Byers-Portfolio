// import React from "react";
// import { Link } from 'react-router-dom';
// import './footer.css'; // TODO: create a .css file for styling, or use bootstrap
import { FaGithub, FaLinkedin, FaSpotify, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Ike Byers. All Rights Reserved.</p>
        <div className="footer-links">
            <a href="https://github.com/ikebyers" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/isaac-byers-9381b0185/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
            </a>
            <a href="https://www.youtube.com/@yesbeki" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={24} />
            </a>
            <a href="https://open.spotify.com/artist/6lA0hlZQNMpHpsQ9ki8KEF?si=nvfbf66_SNKERGylvSRWsw" target="_blank" rel="noopener noreferrer">
                <FaSpotify size={24} />
            </a>
        </div>
        </footer>
    );
};

export default Footer;