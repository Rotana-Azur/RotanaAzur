import Contact from "../models/contact.js";

export const createContact = async (req, res, next) => {
 try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();

    res.status(200).json(savedContact);
 } catch (err) {
    next(err);
 }
};