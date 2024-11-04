
import jwt from "jsonwebtoken"
import ErrorHandler from "./errorMiddlewares.js"



export const verifyJWT=(req,res,next)=>{  
    try {
        const token = req.cookies.token

        if(!token)
        {
            return next(new ErrorHandler(400,"Your are not Authenticated"))
        }

        const decode= jwt.verify(token,process.env.JWT_SECRET )
        console.log(decode)
        req.userId=decode.id
        next()

    } catch (error) {
        console.log("error from the verifyJWT function :",error)
        next(error)
    }
  }