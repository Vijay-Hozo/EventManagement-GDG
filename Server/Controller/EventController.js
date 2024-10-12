const express = require("express");
const mongoose = require("mongoose");
const EventModel = require("../Model/EventModel");
const AdminModel = require("../Model/adminModel")
const {v4} = require("uuid");

const newevent = async(req,res)=>{
    const{eventName,eventDate,eventTime,eventLocation,eventDescription,eventFee,tickets,eventImage} = req.body;
    const adminid = req.user.id;
    try{
        const newevent = new EventModel({
            adminid ,
            eventName,
            eventDate,
            eventTime,
            eventLocation,
            eventDescription,
            eventFee,
            tickets,
            eventImage
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

const getadminevents = async (req, res) => {
    const adminid = req.user.id; 
    try {
        const admin = await AdminModel.findById(adminid); 
        if (!admin) {
            return res.status(401).json({
                status: "failure",
                message: "admin not found"
            });
        }

        const events = await EventModel.find({ adminid }) 
            .populate('adminid',
                'eventName eventDescription eventDate eventTime eventLocation eventFee tickets eventImage'
            ); 

        res.status(200).json({
            status: "success",
            message: "events fetched successfully",
            events
        });
    } catch (err) {
        console.error(err); 
        res.status(400).json({
            status: "failure",
            message: "an error occurred while fetching events"
        });
    }
};


const geteventbyid = async(req,res)=>{
    const event_id = req.params.id;
    try{
        const event = await EventModel.findById(event_id);
        if(!event){
            res.status(400).json({
                status:"failure",
                message:"Event not found",
            })
        }
        res.status(200).json({
            status:"success",
            message :"Event found",
            event
        })
    }
    catch(err){
        res.status(400).json({
            status:"failure",
            message:err.message
        })
    }
}

const updateevent = async (req, res) => {
    const event_id = req.params.id;
    const updatedData = req.body; 
  
    try {
      const event = await EventModel.findByIdAndUpdate(
        event_id,
        updatedData,
        { new: true, runValidators: true });
  
      if (!event) {
        return res.status(404).json({
          status: "failure",
          message: "Event not found"
        });
      }
  
      res.status(200).json({
        status: "success",
        message: "Event updated successfully",
        event
      });
    } catch (err) {
      res.status(400).json({
        status: "failure",
        message: err.message
      });
    }
  };
  

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

module.exports = {newevent,getallevents,getadminevents,geteventbyid,updateevent,deleteevent};