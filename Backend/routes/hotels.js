import Express from "express";
import Hotel from "../models/Hotel";
const router=Express.Router();
//create
router.post("/",async(req,res)=>{
    const newHotel=new Hotel(req.body)
    try{
        const savedHotel=await newHotel.save()
        res.status(200).json(savedHotel)
    }
    catch(err){
        res.status(500).json(err)
    }
})
//update 
router.put("/:id",async(req,res)=>{

    try{
        const updateHotel=await Hotel.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true})
        res.status(200).json(updateHotel)
    }
    catch(err){
        res.status(500).json(err)
    }
})
//delete
router.delete("/:id",async(req,res)=>{

    try{
        await Hotel.findByIdAndUpdate(
            req.params.id)
        res.status(200).json("Hotel has been deleted ")
    }
    catch(err){
        res.status(500).json(err)
    }
})
//get
router.get("/:id",async(req,res)=>{

    try{
        const HOTEL=await Hotel.findById(
            req.params.id)
        res.status(200).json(hotel)
    }
    catch(err){
        res.status(500).json(err)
    }
    //get all
    router.delete("/",async(req,res)=>{

        try{
            const hotels=await Hotel.find(
                req.params.id)
            res.status(200).json(hotels)
        }
        catch(err){
            res.status(500).json(err)
        }
    })
})
