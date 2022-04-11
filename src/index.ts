import express, { Application, Request, Response } from "express";
import mongoose from 'mongoose';

require('dotenv').config();

const port: number | string = process.env.PORT || 3000;
const app: Application = express();


// Settings app
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '1.5MB' }))

mongoose.connect(process.env.MONGO_URL|| "")

app.get('/', (req: Request, res: Response) => {
    res.send('ok')
});

// RUN SERVER
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
