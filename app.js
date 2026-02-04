import express from 'express';
import userRouter from './routes/users.routes.js';

const app=express();

//Body parser (JSON)
app.use(express.json());

//Base Route
app.get("/",(req,res)=>{
    res.send("User Management API is running");
});

//user routes
app.use("/api/users", userRouter);


export default app;