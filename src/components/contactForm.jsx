import { useState } from 'react';

export default function useContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleInputChange = (event) => {
        const { id, value } = event.target;

        if (id === "name") setName(value);
        if (id === "email") setEmail(value);
        if (id === "message") setMessage(value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!name || !email || !message) {
            alert("Please fill out all the fields.");
            return;
        }

        // const newUser = { name, email, message };
        // setUser(newUser);

        setName("");
        setEmail("");
        setMessage("");
    };

    return {
        name,
        email,
        handleInputChange,
        handleFormSubmit
    };
}