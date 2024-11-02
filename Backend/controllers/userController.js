import ErrorHandler from "../middlewares/errorMiddlewares.js"
import { User } from "../Models/user.js"
import bcrypt from "bcrypt"



// update user
 export const updateUser= async(req,res,next)=>{

    try {
        const {id}= req.params
        let {username,email,password}=req.body

        if(!username ||!email ||!password)
        {
            return next(new ErrorHandler(400,"fill all the fields"))
        }

        const existingUsername = await User.findOne({ username, _id: { $ne: id } });
        if (existingUsername) {
            return next(new ErrorHandler(400, "Username already exists"));
        }

        // Check if another user has the same email
        const existingEmail = await User.findOne({ email, _id: { $ne: id } });
        if (existingEmail) {
            return next(new ErrorHandler(400, "Email already exists"));
        }

        const hashPassword= await bcrypt.hash(password,10)
        req.body= {username,email,password:hashPassword}

       const updatedUser= await User.findByIdAndUpdate(id,{$set:req.body},{new:true})

       res.status(200).json({
        success:true,
        message: "user updated sucessfully",
        updatedUser
       })
        

    } catch (error) {
        console.log("error from updateUser :",error)
        next(error)
    }

} 



// delete user

export const deleteUser= async (req,res,next)=>{

    try {
        const {id}= req.params

        await User.findByIdAndDelete(id)

        // await Post.deleteMany({userid:req.params.id})
        // await Comment.deleteMany({userid:req.params.id})

        res.status(200).json("User has been deleted!")



    } catch (error) {
        console.log("error from the deleteuser function :",error)
        next(error)
    }

}


// get user details

export const getUser= async  (req,res,next)=>{

    try {

        const {id}= req.params
        
       let user= await User.findById(id)

       res.status(200).json({
        success:true,
        user : user || "user not found"
       })

    } catch (error) {
        
        console.log("error from the getUser function",error)
        next(error)
    }
}

