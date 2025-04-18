import express from "express";
import morgan from "morgan";
import authRoutes from "../src/routers/auth.routes.js"


const app = express();
app.use(morgan('dev'));
app.use(express.json())
app.use('/api',authRoutes)
export default app;