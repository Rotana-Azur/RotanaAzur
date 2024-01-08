import mongoose from 'mongoose';

const { Schema}= mongoose;

const ContactSchema = new Schema({

    username: {
        type: String,
        required:true,
        unique:true
        
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    description:{
        type: String,
        required:true},
    

    },
    
    {timestamps:true});
    export default mongoose.model("Contact",ContactSchema)