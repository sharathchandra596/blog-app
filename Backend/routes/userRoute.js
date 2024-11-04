import express from "express"
import { deleteUser, getUser, updateUser } from "../controllers/userController.js"
import { verifyJWT } from "../middlewares/verifyJWT.js"


const router= express.Router()


router.put("/:id",verifyJWT,updateUser)
router.delete("/:id",verifyJWT,deleteUser)
router.get("/:id",getUser)



export default router