import { getFourNsix } from "./utilities/csvProcessor2.js"
import {getTopCities} from "./utilities/csvProcessor.js"


export const handelTopCities = async (req, res)=>{
    try {
        const result = await getTopCities();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({error: "Failed to process csv", detail: error.message})
    }
}

export const handleTopScore = async(req,res)=>{
    try {
        const result = await getFourNsix();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({error: "Failed to process csv", detail: error.message})
    }
}
