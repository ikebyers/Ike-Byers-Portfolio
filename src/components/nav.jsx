// import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {

    return (
        <nav
            className="navbar navbar-expand-lg nav-bg">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img className="nav-logo" src="/ikelogo3.png" alt="ike byers logo" width="250" height="50"></img>
                        </a>
                    </div>
                </NavLink>
                <div>
                    <button
                        className="navbar-toggler navbar-toggle-button me-4"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse nav-items-cus" id="navbarNavAltMarkup">
                    <div className="navbar-nav nav-items-ul">
                        <ul className="nav nav-pills nav-fill nav-items-ul">
                            <li className="nav-item nav-single-item">
                                <NavLink
                                    className="nav-link nav-link-cus"
                                    exact to="/"
                                >
                                    About Me
                                </NavLink>
                            </li>
                            <li className="nav-item nav-single-item">
                                <NavLink className="nav-link nav-link-cus" to="/portfolio" activeClassName="active">
                                    Portfolio
                                </NavLink>
                            </li>
                            {/* <li className="nav-item nav-single-item">
                                <NavLink className="nav-link nav-link-cus" to="/resume" activeClassName="active">
                                    Resume
                                </NavLink>
                            </li> */}
                            {/* <li className="nav-item nav-single-item">
                                <NavLink className="nav-link nav-link-cus" to="/contact" activeClassName="active">
                                    Contact
                                </NavLink>
                            </li> */}
                            <li>
                                <a
                                    type="button"
                                    className="resume-btn nav-resume"
                                    href="/ikebyersresume.pdf" target="_blank"
                                    rel="noopener noreferrer">
                                    Download Resume&nbsp;&nbsp;
                                    <img
                                        className='text-tertiary'
                                        src="/download-outline.svg"
                                        alt="pdf icon"
                                        style={{ width: '20px', height: '20px', verticalAlign: 'middle' }}
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;