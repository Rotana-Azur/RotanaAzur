import mongoose from 'mongoose';
const { Schema } = mongoose;

    const userSchema = new Schema ({
      userName: {
        type: String,
        unique:true, 
  
        allowNull: false,
      },
      adress: {
        type: String,
  
        allowNull: false,
      },
      phoneNumber: {
        type:Number,
        unique:true, 

  
        allowNull: false,
      },
      email: {
        type: String,
        unique:true, 

  
        allowNull: false,
      },
      password: {
        type: String,
        allowNull: false,
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
    });
  
    export default mongoose.model("User",userSchema)
  
  