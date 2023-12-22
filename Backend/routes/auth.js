import express from "express"
import {register,login} from "../controllers/authController.js"


const router = express.Router()
router.get("/register",register)
router.get("/", (req, res)=>{
    res.send("Login")
})
router.get("/signup", (req, res)=>{
    res.send("Signup")
})

router.post("/register",register )
router.post("/login",login )

export default router