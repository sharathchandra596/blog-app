import mongoose from "mongoose";



const postSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
        Unique:true
    },
    desc:{
        type:String,
        required:true,
        Unique:true
    },
    photo:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    categories:{
        type:Array,
        
    },
},{timestamps:true})

export const Post= mongoose.model("Post",postSchema)
