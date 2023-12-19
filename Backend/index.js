import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import roomRoute from "./routes/rooms.js"
import userRoute from "./routes/users.js"
import cookieParser from "cookie-parser"


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
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoute)
app.use("/api/rooms", roomRoute)
app.use("/api/users",userRoute)

app.listen(8000, ()=> {
    connect()
    console.log("Connected to backend.")
})