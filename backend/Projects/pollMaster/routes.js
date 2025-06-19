import express from "express";
import pollsSchema from "../../Database/Models/pollsSchema.js";
import { useState } from "react";

const router= express.Router();



router.put("/polls/create", async(req,res)=>{
    try {
        const {question, option1,option2,option3,option4} = req.body;

        if(!question.trim() || !option1.trim() || !option2.trim() || !option3.trim() || !option4.trim()){
            return res.status(400).json({error: "Question can't be empty and all options must be filled"});
        }

        // const newPoll = new pollsSchema({question, option1,option2,option3,option4});
        await pollsSchema.deleteMany();
        const newPoll = new pollsSchema({ question, option1, option2, option3, option4 });
        await newPoll.save();
        res.status(201).json({message: "Successfully created poll"})
    } catch (error) {
        res.status(400).json({"Failed to create poll": error.message})
    }
})


router.get("/polls/fetch", async(req,res)=>{
    try {

        const polls= await pollsSchema.find();
        if(!polls || polls.length===0){
           return res.status(400).json({message:"Poll not found create one first"})
        }

        res.status(200).json({message: "POll data fetched from collection", data: polls})

        
    } catch (error) {
        res.status(400).json({error: "something went wrong"})
    }
})


router.patch("/polls/updateVotes", async(req,res)=>{
    try {
        const  selectedOptions = req.body;
        const validOptions =[option1,oprion2,option3,option4];
        if(!validOptions.includes(selectedOptions)){
            return res.status(200).json({message:"Invalid option selected"})
        }

        const voteCount= pollsSchema.findOne();
        if(!voteCount) return res.status(400).json({error: "Poll not found"})

        const voteField= `${selectedOptions}votes`;
        voteCount[voteField]+=1;

        const totalVotes = voteCount.option1+ voteCount.option2+ voteCount.option3+ voteCount.option4;

        voteCount.option1Percentage= Number(((poll.option1vote/totalVotes)*100).toFixed(2))
        voteCount.option2Percentage= Number(((poll.option2vote/totalVotes)*100).toFixed(2))
        voteCount.option3Percentage= Number(((poll.option3vote/totalVotes)*100).toFixed(2))
        voteCount.option4Percentage= Number(((poll.option4vote/totalVotes)*100).toFixed(2))

        await voteCount.save();

        // voteCount.map((vote, idx)=>{
        //     if(vote.option===option1) voteCount[idx]+=1;
        //     elseif(vote.option===option2) voteCount[idx]+=1;
        //     elseif(vote.option===option3) voteCount[idx]+=1;
        //     else voteCount[idx]+=1;
        // })
        res.status(200).json({message:"Vote register successfully"})
    } catch (error) {
        res.status(400).json({error:"error.message"})
    }
})



export default router;