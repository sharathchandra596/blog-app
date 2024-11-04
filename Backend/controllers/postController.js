import { get } from "mongoose"
import ErrorHandler from "../middlewares/errorMiddlewares.js"
import { Post } from "../Models/post.js"

export const createPost= async (req,res,next)=>{
    try {
        
        // if(!req.files || Object.keys(req.files).length === 0)
        // {
        //     return next(new ErrorHandler(400,"No file uploaded"))

        // }

        // const {image}= req.files
        // const allowedformat=["image/png","image/jpg","image/jpeg","image/webp"]

        // if(!allowedformat.includes(image.mimetype))
        // {
        //     return next(new ErrorHandler(400,"file format not supported"))
        // }
        const {title,desc,photo,username,userid,categories}= req.body

        if(!title || !desc || !photo || !username || !userid )
        {
            return next(new ErrorHandler(400,"fill all the fields"))
        }
            
    

        const post = await Post.create({title,desc,photo,username,userid,categories})
        res.status(200).json({success:true,message:"post created successfully"})

    } catch (error) {
        console.log("error from the createPost function",error)
        next(error)

    }

}

export const updatePost= async (req,res,next)=>{
    try {
        const {id}= req.params
        const {title,desc,photo}= req.body
        if(!title || !desc || !photo)
        {
            return next(new ErrorHandler(400,"fill all the fields"))
        }
        const post = await Post.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(200).json({success:true,message:"post updated successfully"})
    } catch (error) 
    {
        console.log("error from the updatePost function",error)
        next(error)
    }
    
}

export const deletePost= async (req,res,next)=>{
    try {
        const {id}= req.params
        const post = await Post.findByIdAndDelete(id)
        res.status(200).json({success:true,message:"post deleted successfully"})
    } catch (error) 
    {
        console.log("error from the deletePost function",error)
        next(error)
    } 
}

export const getPost= async (req,res,next)=>{
    try {
        const {id}= req.params
        const post = await Post.findById(id)
        res.status(200).json({success:true,message:"post fetched successfully",post})
    } catch (error)
    {

    }
}

export const getAllPost= async (req,res,next)=>{

    const query=req.query
    try {
        const searchFilter={
            title:{$regex:query.search, $options:"i"}
        }
        const posts = await Post.find(query.search ? searchFilter : null)
        res.status(200).json({success:true,message:"post fetched successfully",posts})
    } catch (error) {
        console.log("error from the getAllPost function",error)
        next(error)
    }
}

export const getUserPost= async (req,res,next)=>{
    try {
        const {userid}= req.params
        const posts = await Post.find({userid:userid})
        res.status(200).json({success:true,message:"post fetched successfully",posts})
    } catch (error) {
        console.log("error from the getUserPost function",error)
        next(error)
    }
}