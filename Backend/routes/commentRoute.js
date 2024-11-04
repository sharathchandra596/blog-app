
import express from "express"
import { createComment, deleteComment, getPostComments, updateComment } from "../controllers/commentController.js"
import { verifyJWT } from "../middlewares/verifyJWT.js"


const router= express.Router()

router.post("/create", verifyJWT,createComment)
router.put("/update/:cid", verifyJWT,updateComment)
router.delete("/delete/:cid",verifyJWT,deleteComment)
router.get("/get/:postid", getPostComments)



export default router