import { useState } from 'react';

export default function useContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const [clicked, setClicked] = useState({ name: false, email: false, message: false });

    const handleInputChange = (event) => {
        const { id, value } = event.target;

        if (id === "name") setName(value);
        if (id === "email") setEmail(value);
        if (id === "message") setMessage(value);

        if (clicked[id]) {
            setErrors((prevErrors) => ({ ...prevErrors, [id]: '' }));
        }
    };

    const handleFocus = (field) => {
        setClicked((prevClicked) => ({ ...prevClicked, [field]: true }));
    };

    const handleValidation = (field) => {
        if (field === "name" && !name) {
            setErrors((prevErrors) => ({ ...prevErrors, name: "This field is required" }));
        } else if (field === "email" && !email) {
            setErrors((prevErrors) => ({ ...prevErrors, email: "This field is required" }));
        } else if (field === "message" && !message) {
            setErrors((prevErrors) => ({ ...prevErrors, message: "This field is required" }));
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!name || !email || !message) {
            setErrors({
                name: name ? '' : 'This field is required',
                email: email ? '' : 'This field is required',
                message: message ? '' : 'This field is required'
            });
            alert("Please fill out all the fields.");
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                alert("Thanks for reaching out! I'll get back to you as soon as possible.");
                setName("");
                setEmail("");
                setMessage("");
                setErrors({ name: '', email: '', message: '' });
                setClicked({ name: false, email: false, message: false });
            } else {
                alert("There was an error submitting the form. Please try again later.");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert("There was an error submitting the form. Please try again later.");
        }
    };

    return {
        name,
        email,
        message,
        errors,
        clicked,
        handleInputChange,
        handleFormSubmit,
        handleFocus,
        handleValidation
    };
}