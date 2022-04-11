import express, { Application, Request, Response } from "express";
import mongoose from 'mongoose';
import { router } from './routes/task'

require('dotenv').config();

const port: number | string = process.env.PORT || 3000;
const app: Application = express();

// Settings app
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '1.5MB' }))

// Settings DB
mongoose.connect(process.env.MONGO_URL || "")

// Settings routes
app.use('/api/tasks', router)

// Run server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
