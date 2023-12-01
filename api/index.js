import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/user.route.js'; 
import authRouter from './routes/auth.route.js';

mongoose.connect(process.env.MONGO).then(() =>{
    console.log('Connected to MongoDB');
})
.catch((err) =>{
    console.log(err);
});

const app = express();

app.use(express.json());
const port = 3000;
app.listen(port, () =>{
    console.log(`Server is running on port ${port}!!`);
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Errror';
    return res.status(statusCode).json({
        success : false,
        statusCode,
        message,
    });
});