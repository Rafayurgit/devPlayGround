import express, { json } from "express";
import cors from "cors";
import { getTopCities } from "./utilities/csvProcessor.js";

const app = express();
const PORT= process.env.PORT || 8080;

app.use(cors())

app.get("/api/test", (req,res)=>{
    try {
        res.send("Welcome to backend test")
    } catch (error) {
        res.send(error)
    }
})

app.get("/", (req,res)=>{
    res.send("Welcome to backend")
})

app.get("/api/top-cities", async(req,res)=>{
    try {
        const result = await getTopCities();
        res.status(200).json(result); 
    } catch (error) {
        res.status(500),json({error: "failed to prcess csv", detail: error.message})
    }
    
})


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
    
})

