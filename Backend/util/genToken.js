import jwt from "jsonwebtoken"
export const gentoken= (user,res,statuscode=200,message)=>{
    
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"3d"})
    return res.cookie("token",token).status(statuscode).json({
        sucess:true,
        message:message,
        
        user : {
            email: user.email,
            name: user.username,
            token
        }
    })
}