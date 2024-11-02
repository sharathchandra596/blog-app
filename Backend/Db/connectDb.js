import mongoose from "mongoose"


export const connectDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            dbName:"Blog_App"
        })

        console.log("db connected")

    } catch (error) {
        console.log(error)
    }
}