import express from "express";
import { connectDB } from "./Db/connectDb.js";
import dotenv, { config } from 'dotenv';
import { errorMiddleware } from "./middlewares/errorMiddlewares.js";
import authRouter from "./routes/authRoute.js"
import userRouter from "./routes/userRoute.js"
import postRouter from "./routes/postRoute.js"
import commentRouter from "./routes/commentRoute.js"
import cookieParser from "cookie-parser";

dotenv.config()
const app= express();

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))




app.listen(process.env.PORT,()=>{
    connectDB()
    console.log("server is running on" + process.env.PORT)
})

app.use("/api/v1/auth",authRouter)
app.use("/api/v1/user",userRouter)
app.use("/api/v1/post",postRouter)
app.use("/api/v1/comment",commentRouter)

app.use(errorMiddleware)


