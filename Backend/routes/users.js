import express from "express"
import User from "../models/User.js"


const router = express.Router()
router.post("/", async (req,res)=>{

    const newUser= new User(req.body)
    try{ 
       const savedUser= await newUser.save()
       res.status(200).json(savedRoom)
    }catch(err){
        res.status(500).json(err)

    }
})


export default router