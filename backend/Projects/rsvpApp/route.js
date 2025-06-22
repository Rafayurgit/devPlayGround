import express from "express";
import rsvpEventSchema from "../../Database/Models/rsvpEventSchema";

const router= express.Router();

router.put("/event/create", async(req,res)=>{
    try {

        const {title, description, attending, maybeCount, notAttendingCount, maybePercentage, notAttendingPercentage}= req.body;
        if(title.trim()==="" || description.trim()==="" || !title || !description ){
            return res.status(400).json({error:"Title description cant be empty"})
        }

        await rsvpEventSchema.deleteMany();
        const newEvent = new rsvpEventSchema.insertOne(
            title, description, attending, maybeCount, notAttendingCount, maybePercentage, notAttendingPercentage
        );
        await newEvent.save();
        res.status(201).json({message:"Event created successfully."})
    } catch (error) {
        res.status(400).json({error: "Title and description must not be empty"})
    }
})

router.get("/event/fetch", async(req,res)=>{
    try {
        const activeEvent= await rsvpEventSchema.findOne();
        res.status(200).json({ activeEvent: "Fetched Successfully"})
    } catch (error) {
        res.status(400).json({error:"No event found. Please create one first."})
    }
})

router.patch("/event/rsvp", async(req,res)=>{
    try {
        const {status}= req.body;
        if(!["Attending", "Maybe", "Not Attending"].includes(status)){
            return res.status(400).json({error:"Invalid Rsvp status"})
        }

        const event= rsvpEventSchema.findOne();

        if(status==="Attending"){
            event.attendingCount +=1;
        }else if(status ==="Maybe"){
            event.maybeCount +=1;
        }else{
            event.notAttendingCount +=1;
        }

        const total = event.attendingCount+ event.maybeCount + event.notAttendingCount;
        event.attendingPercentage= (event.attendingCount/ total)* 100;
        event.maybePercentage= (event.maybeCount/total)*100;
        event.notAttendingPercentage= (event.notAttendingCount/total)*100;
        await event.save();
        res.status(200).json({message:"RSVP recorded successfully."})

    } catch (error) {

        res.status(400).json({error: "Invalid RSVP status"})
        
    }
})

export default router;  