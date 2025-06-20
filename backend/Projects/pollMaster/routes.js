import express from "express";
import pollsSchema from "../../Database/Models/pollsSchema.js";

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
        const  {selectedOption} = req.body;
        const voteCount= await pollsSchema.findOne();
        if(!voteCount) return res.status(400).json({error: "Poll not found"})
        
        const {option1,option2,option3,option4}=voteCount;
        
        // const validOptions =[option1,option2,option3,option4];
        // if(!validOptions.includes(selectedOption)){
        //     return res.status(200).json({message:"Invalid option selected"})
        // }

        // const voteField= `${selectedOption}votes`;

        let voteField = "";

    if (selectedOption === option1) voteField = "option1Votes";
    else if (selectedOption === option2) voteField = "option2Votes";
    else if (selectedOption === option3) voteField = "option3Votes";
    else if (selectedOption === option4) voteField = "option4Votes";
    else return res.status(400).json({ message: "Invalid option selected" });

    voteCount[voteField] += 1;
    
        voteCount[voteField]+=1;

        const totalVotes = voteCount.option1Votes+ voteCount.option2Votes+ voteCount.option3Votes+ voteCount.option4Votes;

        voteCount.option1Percentage= Number(((voteCount.option1Votes/totalVotes)*100).toFixed(2))
        voteCount.option2Percentage= Number(((voteCount.option2Votes/totalVotes)*100).toFixed(2))
        voteCount.option3Percentage= Number(((voteCount.option3Votes/totalVotes)*100).toFixed(2))
        voteCount.option4Percentage= Number(((voteCount.option4Votes/totalVotes)*100).toFixed(2))

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