import express from 'express';
import OpenAI from 'openai';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 4013;

// Use CORS middleware due to requests from different origins
app.use(cors());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.get('/beyoncelyrics', async (req, res) => {
    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [{ role: 'user', content: 'return 2 lines of Beyonce lyrics' }],
        });

        const beyoncelyrics = completion.choices[0].message.content;
        res.json({ beyoncelyrics });
    } catch (error) {
        console.error('Error generating beyoncelyrics:', error);
        res.status(500).json({ error: 'Failed to generate Beyoncé lyrics' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
