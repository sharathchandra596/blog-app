import mongoose from "mongoose";



const commentSchema = new mongoose.Schema({

    comment:{
        type:String,
        required:true,
        
    },
    author:{
        type:String,
        required:true,
        
    },
    postid:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    }
},{timestamps:true})

export const Comment= mongoose.model("Comment",commentSchema)
