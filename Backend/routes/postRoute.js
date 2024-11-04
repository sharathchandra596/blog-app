import express from "express"

import { createPost, deletePost, getAllPost, getPost, getUserPost, updatePost } from "../controllers/postController.js"
import { verifyJWT } from "../middlewares/verifyJWT.js"


const router= express.Router()

router.post("/create",verifyJWT,createPost)
router.put("/update/:id",verifyJWT,updatePost)
router.delete("/delete/:id",verifyJWT,deletePost)
router.get("/getpost/:id",getPost)
router.get("/getallpost",getAllPost)
router.get("/getuserpost/:userid",getUserPost)



export default router