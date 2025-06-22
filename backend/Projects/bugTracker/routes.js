import express from "express";
import bugSchema from "../../Database/Models/bugSchema";

const router= express.Router();

router.post("/bugs/create", async(req,res)=>{
    try {
        const {title, description, severity}= req.body;
        if(title.trim()==="" || description.trim()==="" || severity.trim()===""){
            return res.status(400).json({error:"Title,description and severity can't be empty"})
        }
        if(!["Low","Medium", "High"].includes(severity)){
            return res.status(400).json({error:"Severity must be Low, Medium or High"})
        }
        const newBug= await bugSchema.create({title, description, severity});
        await newBug.save();
        res.status(201).json({message: "Bug created Successfully"})
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
})


router.patch("/bug/assign/:id", async(req,res)=>{
    try {
        const {status, developer}= req.body;
        const {id}= req.params;
        const bug = bugSchema.findById(id);
        if(!bug){
            return res.status(400).json({error:"Bug doesn't exist"});
        }
        if(status==="Resolved"){
            return res.status(400).json({error:"Resolved bug can't assigned"})
        }
        // await bug.updateOne({assignedTo: developer.value, status})
        // await bug.findByIdAndUpdate((id), {status, assignedTo:developer.value});
        // await bug.save();
        bug.assignedTo=developer;
        bug.status=status;
        await bug.save();
        res.status(200).json({message:"Bug assigned successfully"})

    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
})

router.patch("/bugs/status/:id", async(req,res)=>{
    try {
        const {status}= req.body;
        const {id}= req.params;
        
        if(!["In Progress", "Resolved", "Open"].includes (status)){
            return res.status({error:"Status should be In Progress, Resolved or Open"})
        }

        const bug= bugSchema.findById(id);
        if(!bug){
            return res.status(400).json({error:"Bug doesn't exist"});
        }

        const assign = bug.assignedTo;
        if( status==="Resolved" && (assign.trim()==="" || !assign)  ){
            res.status(400).json({error:"Cannot resolved an unassigned bug"})
        }
        bug.status=status;
        await bug.save();

        res.status(200).json({message:"Update status successfully"})
    }
    catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.get("/bugs/filter", async(req,res)=>{
    try {
        const {status, severity}= req.query;
        const filter ={};
        if(status) filter.status= status;
        if(severity) filter.severity=severity;

        const bug =await bugSchema.find(filter);
        res.status(200).json({bug: "Bug fetched successfully"})
    } catch (error) {
        res.status(400).json({error: error.message})   
    }
})




export default router;