import User from "../models/User.js";
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
  try{
    const newUser = new User({
      ...req.body
    });

    await newUser.save()
    res.status(200).send("User has been created.")
  } catch (err) {
    next(err)
  }
};


export const login = async (req, res, next) => {
 try {
    const user = await User.findOne({ email: req.body.email});
    if (!user) return next(createError(404, "User not found!"));

    
    if (req.body.password !== user.password) {
      return next(createError(400, "Wrong password or username!"));
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
      
    );
    console.log(token)

    const { password, isAdmin, ...otherDetails } = user._doc;
    res.cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
 } catch (err) {
    next(err);
 }
};
