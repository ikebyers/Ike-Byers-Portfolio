import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pool from './db.js';
import dotenv from 'dotenv';
import process from 'process'; 

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO contact_submissions (name, email, message) VALUES ($1, $2, $3) RETURNING *',
            [name, email, message]
        );
        res.status(200).send({ message: 'Form submission received', data: result.rows[0] });
    } catch (error) {
        console.error('Error saving form submission:', error);
        res.status(500).send({ message: 'Error saving form submission' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});