import useContactForm from "../components/contactForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Contact() {
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
    } = useContactForm();

    return (
        <div>
            <h1 className="page-title">Contact Me</h1>
            <div>If you have any questions or want to connect, feel free to reach out through the contact form below.</div>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                        id="name" 
                        type="text" 
                        className="form-control"
                        placeholder="John Doe" 
                        value={name} 
                        onChange={handleInputChange} 
                        onFocus={() => handleFocus('name')}
                        onBlur={() => handleValidation('name')}
                    />
                    {clicked.name && errors.name && <small className="text-danger">{errors.name}</small>}
                </div>
                
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        id="email" 
                        type="email" 
                        className="form-control"
                        placeholder="johndoe@example.com"
                        value={email} 
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleValidation('email')}
                    />
                    {clicked.email && errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
                
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        id="message"
                        type="text"
                        className="form-control"
                        placeholder="Write me something!"
                        value={message}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={() => handleValidation('message')}
                    />
                    {clicked.message && errors.message && <small className="text-danger">{errors.message}</small>}
                </div>
                
                <div>
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}