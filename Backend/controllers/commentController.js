import ErrorHandler from "../middlewares/errorMiddlewares.js"
import { Comment } from "../Models/comments.js"


export const createComment= async (req,res,next)=>{ 

    try {

        const{comment,author,postid,userid}=req.body

        if(!comment )
        {
            return next(new ErrorHandler(400,"fill  the comments field"))
        }

        const commentCreated = await Comment.create({comment,author,postid,userid})
        res.status(200).json({success:true,message:"comment created successfully",commentCreated})
        
    } catch (error) {
        
    }
}
export const updateComment= async (req,res,next)=>{ 

    try {

        const {cid}=req.params
        const {comment}=req.body
        if(!comment )
            {
                return next(new ErrorHandler(400,"fill  the comments field"))
            }
        const commentUpdated = await Comment.findByIdAndUpdate(cid,{$set:req.body},{new:true})
        res.status(200).json({success:true,message:"comment updated successfully",commentUpdated})
        
    } catch (error) {
        console.log("error from the updateComment function",error)
        next(error)
    }
}
export const deleteComment= async (req,res,next)=>{ 

    try {
        const {cid}=req.params
        const commentDeleted = await Comment.findByIdAndDelete(cid)
        res.status(200).json({success:true,message:"comment deleted successfully",commentDeleted})
        
    } catch (error) {
        console.log("error from the deleteComment function",error)
        next(error)
        
    }
}
export const getPostComments= async (req,res,next)=>{ 

    try {
        const{postid}=req.params
       const Postcomments = await Comment.find({postid:postid})
        res.status(200).json({success:true,message:"comment fetched successfully",Postcomments})
        
    } catch (error) {
        console.log("error from the getPostComments function",error)
        next(error) 
    }
}