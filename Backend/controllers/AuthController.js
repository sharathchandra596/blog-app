import ErrorHandler from "../middlewares/errorMiddlewares.js"
import { User } from "../Models/user.js";
import bcrypt from "bcrypt"
import { gentoken } from "../util/genToken.js";

export const register = async (req, res,next) => {
   try {
    const {username, email, password} = req.body;

    if(!username || !email || !password){
        return next(new ErrorHandler(400,"plese all field"));
    }

     let isExistUser=await User.findOne({email})
     let isExistUser_Useranme=await User.findOne({username})
     
     console.log(isExistUser)
     console.log(isExistUser_Useranme)


     if(isExistUser  )
     {
        return next(new ErrorHandler(400,"User already eisxst"))
     }

     if(isExistUser_Useranme)
     {
        return next(new ErrorHandler(400,"UserName already eisxst"))
     }
     
     const hashPassword= await bcrypt.hash(password,10)

    let createdUser= await User.create({username,email,password:hashPassword})

    res.status(201).json({
        sucess:true,
        message:"User created successfully",
        user:createdUser

    })
   } catch (error) {
        console.log("error from register function",error)
        next(error)
   }


    
}


export const login= async(req,res,next)=>{
    try {
        const {email,password}=req.body
        if(!email || !password)
        {
            return next(new ErrorHandler(400,"fill all the fields") )
        }

        let user =await User.findOne({email})

        if(!user)
        {
            return next(new ErrorHandler(400,"User is not exist plese register first"))
        }
        const match_password= await bcrypt.compare(password,user.password)

        

        if(!match_password)
        {
            return next(new ErrorHandler(400,"wrong password"))
        }

        gentoken(user,res,200,"login successfully")
        
        
    } catch (error) {
        console.log("error from login :",error)
        next(error)

    }
}
export const logout= async(req,res,next)=>{
    try {
        
        res.clearCookie("token").status(200).json({
            sucess:true,
            message:"logout successfully"
        })
        
    } catch (error) {
        console.log("error from logout :",error)
        next(error)

    }
}