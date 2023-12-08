import express from "express"


const router = express.Router()
router.get("/", (req, res)=>{
    res.send("Login")
})
router.get("/signup", (req, res)=>{
    res.send("Signup")
})


export default router