import express from "express"
import User from "../models/User.js"

import {updateUser,deleteUser,getUser,getUsers, } from "../controllers/userController.js"

const router = express.Router()


router.put("/:id",updateUser);


router.delete("/:id",deleteUser);


router.get("/:id",getUser);


router.get("/",getUsers);



export default router