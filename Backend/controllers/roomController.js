import Room from "../models/Room.js";
import cloudinary from "cloudinary";
import fs from "fs"; // Node.js file system module

cloudinary.config({
  cloud_name: 'Mycloud',
  api_key: '947857955154291',
  api_secret: 'GH-WMSQZHrEuvSz2ZpMv2GhYo8M',
});

export const createRoom = async (req, res, next) => {
  const { name, offer, price, number, description, capacity } = req.body;
  const { file } = req;

  try {
    const result = await cloudinary.v2.uploader.upload(file.path);

    const newRoom = new Room({
      name,
      offer,
      price,
      number,
      description,
      capacity,
      imageUrl: result.secure_url,
    });

    const savedRoom = await newRoom.save();

    fs.unlinkSync(file.path);

    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const { file } = req;

    if (file) {
      const result = await cloudinary.v2.uploader.upload(file.path);

      req.body.imageUrl = result.secure_url;

      fs.unlinkSync(file.path);
    }

    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

export const deleteRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);

    const deletedRoom = await Room.findByIdAndDelete(req.params.id);

    if (room.imageUrl) {
      const publicId = room.imageUrl.split('/').pop().split('.')[0]; // Extract public ID from Cloudinary URL
      await cloudinary.v2.uploader.destroy(publicId);
    }

    res.status(200).json(deletedRoom);
  } catch (err) {
    next(err);
  }
};
export const getRoom = async (req, res, next) => {
  try{ 
    const room= await Room.findById(req.params.id)
    res.status(200).json(room)
 }catch(err){
     next(err)

  }
}
export const getRooms = async (req, res, next) => {
  try{ 
    const rooms= await Room.find()
    res.status(200).json(rooms)
 }catch(err){
     next(err)

  }
}
