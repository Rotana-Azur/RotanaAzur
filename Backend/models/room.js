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