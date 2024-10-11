const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserModel = require('../Model/userModel');

const newuser = async(req,res)=>{
    const{username,email,password,phone} = req.body;
    try{
        const user = new UserModel({username,email,password,phone});
        await user.save();
        res.status(200).json({
            status:"success",
            message:"User created successfully"
        })
    }
    catch(err){
        res.status(400).json({
            status:"failure",
            message:err.message
        })
    }
}

const loginuser = async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(400).json({
                status:"failure",
                message:"User not found"
            })
        }
        const isValidPassword = await bcrypt.compare(password,user.password);

        if(!isValidPassword){
            return res.status(400).json({
                status:"failure",
                message:"Invalid Password"
            })
        }
        const token = jwt.sign({ id: user._id}, "secret_key",{
            expiresIn: "8h"
        })
        res.status(200).json({
            status:"success",
            message:"User logged in successfully",
            token
        })
    }
    catch(err){
        res.status(400).json({
            status:"failure",
            message:"Invalid Email"
        })
    }
}

const getuserbyid = async(req,res)=>{
    const user_id = req.user.id;
    try{
        const user = await UserModel.findById(user_id);
        res.status(200).json({
            status:"success",
            user
        })
    }
    catch(err){
        res.status(400).json({
            status:"failure",
            message:err.message
        })
    }
}

module.exports = {newuser,loginuser,getuserbyid};
