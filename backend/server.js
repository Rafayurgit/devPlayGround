import express from "express";
import cors from "cors";

const app = express();
const PORT= process.env.PORT || 8080;

app.use(cors())

app.get("/api/test", (req,res)=>{
    try {
        res.send("Welcome to backend")
    } catch (error) {
        res.send(error)
    }
})

app.get("/", (req,res)=>{
    res.send("Welcome to backend")
})


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
    
})

