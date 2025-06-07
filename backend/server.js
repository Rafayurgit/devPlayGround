import express, { json } from "express";
import cors from "cors";
import cricketRoutes from "./Projects/cricketAnalytics/route.js"

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

app.use("/api/cricket-analytics", cricketRoutes);



app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
    
})

