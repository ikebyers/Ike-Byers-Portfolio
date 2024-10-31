import useContactForm from "../components/contactForm";
// import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Contact() {
    const {
        name,
        email,
        message,
        handleInputChange,
        handleFormSubmit
    } = useContactForm();

    return (
        <div>
            <h1>Contact Me</h1>
            <p>If you have any questions or want to connect, feel free to reach out through the contact form below.</p>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                        <br></br>
                    <input 
                        id="name" 
                        type="text" 
                        className="form-control"
                        placeholder="John Doe" 
                        value={name} 
                        onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                        <br></br>
                    <input 
                        id="email" 
                        type="email" 
                        className="form-control"
                        placeholder="johndoe@example.com"
                        value={email} 
                        onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                        <br></br>
                    <textarea
                        id="message"
                        type="text"
                        className="form-control"
                        placeholder="Write me something!"
                        value={message}
                        onChange={handleInputChange} />
                    
                </div>
                <div>
                    <button type="submit" className="btn btn-outline-primary">Submit:</button>
                </div>
                <br></br>
            </form>
        </div>
    );
}