import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import roomRoute from "./routes/rooms.js"
import userRoute from "./routes/users.js"
import cookieParser from "cookie-parser"
import contactRoute from "./routes/contact.js"
import cors from 'cors';




const app = express()
dotenv.config()

const connect = async ()=> {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB")
  } catch (error) {
    throw error;
  }
}
app.use(cors());
app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/rooms", roomRoute)
app.use("/api/users",userRoute)
app.use("/api/contacts", contactRoute);
app.use(cookieParser())
app.listen(8000, ()=> {
    connect()
    console.log("Connected to backend.")
})