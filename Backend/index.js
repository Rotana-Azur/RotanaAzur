import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"



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

app.use("/api/auth", authRoute)

app.listen(8000, ()=> {
    connect()
    console.log("Connected to backend.")
})