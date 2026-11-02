import mongoose from "mongoose";
import dotenv from "dotenv";
import { zSignup, Validation } from "./zodeS";
import bcrypt from "bcrypt";
import express from "express";
import { zlogin, valid } from "./zodeL";
import SC from "./loginS";
import schema from "./signupschema";
const app = express();
dotenv.config();
app.use(express.json());
const signup = async (req, res) => {
  res.status(200).json({ message: "signup successfull" });
};
const login = async (req, res) => {
  res.status(200).json({ message: "Login successfull" });
};
app.post("/lo", valid(zlogin), login);
app.post("/si", Validation(zSignup), signup);
app.post("/s", Validation(zSignup), async (req, res) => {
    try{
  const {
    FirstName,
    SecondName,
    LastName,
    username,
    Gender,
    Mobile,
    Email,
    Password,
    confirmPassword,
    Address,
  } = req.body;
  if (
    !FirstName ||
    !SecondName ||
    !LastName ||
    !username ||
    !Gender ||
    !Mobile ||
    !Email ||
    !Password ||
    !confirmPassword ||
    !Address
  ) {
    res.status(400).json({message:"fill every fields"});
  }
  if(Email.includes("@")== false){
    res.status(404).json({message:"invalid email"});
  }
  const user = await schema.findone({username});
    if(!user){
        res.status(409).json({message:"username is existing"});
    }
    if(Password!==confirmPassword){
        res.status(400).json({message:"Password is not matching"})
    }
    const hashing = await bcrypt.hash(Password,10);
    const student = await schema.create({
        FirstName: FirstName,
        SecondName: SecondName,
        LastName : LastName,
        username: username,
        Gender:Gender,
        Mobile:Mobile,
        Email: Email,
        Password: hashing,
        Address: Address
    });
    res.status(201).json({message:"user created successfully",data:student});
} catch(error){
    res.status(500).json(error.message);
}
});
app.post('/l',valid(zlogin),async(req,res)=>{
    const{username,Email,Password} = req.body;
})
