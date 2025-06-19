import express from "express";
import pollsSchema from "../../Database/Models/pollsSchema";

const router= express.Router();

router.put("/createRouter", async(req,res)=>{
    try {
        const {question, option1,option2,option3,option4} = req.body;
        if(!question.trim() || !option1.trim() || !option2.trim() || !option3.trim() || !option4.trim()){
            return res.status(400).json({error: "Question can't be empty and all options must be filled"});
        }

        const newPoll = new pollsSchema({question, option1,option2,option3,option4});
        await newPoll.save();
        res.status(201).json({"Successfully created poll": newPoll})
    } catch (error) {
        res.status(400).json({"Failed to create poll": error.message})
    }
})

export default router;