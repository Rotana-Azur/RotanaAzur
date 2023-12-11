import mongoose from 'mongoose';
const { Schema } = mongoose;

const roomSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  offer:{
    type: String,
    required: true
  },
  price:{
    type:Number,
    required:true
  },
  number:{
    type: Number,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  capacity:{
    type: Number,
    required: true
  }


});

export default mongoose.model("Room",roomSchema)