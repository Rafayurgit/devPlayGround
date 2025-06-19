import express, { json } from "express";
import cors from "cors";
import cricketRoutes from "./Projects/cricketAnalytics/route.js"
import pollMasterRoute from "./Projects/pollMaster/routes.js"
import connectDB from "./Database/db/db.js";


const app = express();
const PORT= process.env.PORT || 8080;

app.use(cors())
app.use(express.json());
connectDB();

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
app.use("/api/poll-master", pollMasterRoute)


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
    
})

