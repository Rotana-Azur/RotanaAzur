import express from "express"
import {register} from "/controllers/auth.js"


const router = express.Router()
router.get("/register",register)
router.get("/", (req, res)=>{
    res.send("Login")
})
router.get("/signup", (req, res)=>{
    res.send("Signup")
})


export default router