import express from "express"

import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/roomController.js"
const router = express.Router()
router.post("/",verifyAdmin, createRoom)
router.put("/:id",verifyAdmin, updateRoom)

router.delete("/:id",verifyAdmin, deleteRoom)


router.get("/:id", getRoom)
router.get("/", getRooms)


export default router