const express = require("express");
const mongoose = require("mongoose");
const EventModel = require("../Model/EventModel");

const newevent = async(req,res)=>{
    const{eventname,eventDate,eventTime,eventLocation,eventDescription,eventFee,tickets} = req.body;
    try{
        const newevent = new EventModel({
            eventname,
            eventDate,
            eventTime,
            eventLocation,
            eventDescription,
            eventFee,
            tickets
        })
        await newevent.save();
        res.status(200).json({
            status:"success",
            message:"Event created successfully"
        })
    }
    catch(err){
        res.status(400).json({
            status:"failure",
            message:err.message
        })
    }
}

const getallevents = async(req,res)=>{
    try{
        const events = await EventModel.find();
        res.status(200).json({
            status:"success",
            events
        })
    }
    catch(err){
        res.status(400).json({
            status:"failure",
            message:err.message
        })
    }
}

const geteventbyid = async(req,res)=>{
    const event_id = req.params.id;
    try{
        const event = await AdminModel.findById(event_id);
        if(!event){
            res.status(400).json({
                status:"failure",
                message:"Event not found"
            })
        }
        res.status(200).json({
            status:"success",
            message :"Event found"
        })
    }
    catch(err){
        res.status(400).json({
            status:"failure",
            message:err.message
        })
    }
}

const updateevent = async(req,res)=>{
    const event_id = req.params.id;
    try{
        const event = await EventModel.findByIdAndUpdate(event_id);
        if(!event){
            res.status(400).json({
                status:"failure",
                message:"Event not found"
            })
        }
        await event.save();
        res.status(200).json({
            status:"success",
            message :"Event updated"
        })
    }
    catch(err){
        res.status(400).json({
            status:"failure",
            message:err.message
        })
    }
}

const deleteevent = async(req,res)=>{
    const event_id = req.params.id;
    try{
        const event = await EventModel.findByIdAndDelete(event_id);
        if(!event){
            res.status(400).json({
                status:"failure",
                message:"Event not found"
            })
        }
        res.status(200).json({
            status:"success",
            message :"Event deleted"
        })
    }
    catch(err){
        res.status(400).json({
            status:"failure",
            message:err.message
        })
    }
}

module.exports = {newevent,getallevents,geteventbyid,updateevent,deleteevent};