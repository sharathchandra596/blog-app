import express from "express";
import { connectDB } from "./Db/connectDb.js";
import dotenv, { config } from 'dotenv';
import { errorMiddleware } from "./middlewares/errorMiddlewares.js";
import authRouter from "./routes/authRoute.js"
import userRouter from "./routes/userRoute.js"
dotenv.config()
const app= express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))




app.listen(process.env.PORT,()=>{
    connectDB()
    console.log("server is running on" + process.env.PORT)
})

app.use("/api/v1/auth",authRouter)
app.use("/api/v1/user",userRouter)

app.use(errorMiddleware)


