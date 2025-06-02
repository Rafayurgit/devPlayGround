import fs from "fs";
import csvParser from "csv-parser";
//import matchesGlob from "../data/matches.csv";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__filename);

const matchesPath = path.join(__dirName, "../data/matches.csv")

export const getTopCities  =()=>{
    return new Promise ((resolve, reject)=>{

        const data16={};
        const data17={};
        const countObj={};

        fs.createReadStream(matchesPath).pipe(csvParser())
        .on("data", (data)=>{
            if(data.TOSS_DECISION === "field" && data.SEASON === "2016"){
                data16[data.CITY]= (data16[data.CITY] || 0)+1;
            }
            if(data.TOSS_DECISION === "field" && data.SEASON === "2017"){
                data17[data.CITY] =(data17[data.CITY] || 0)+ 1;
            }
        })
        .on("end", ()=>{
            const sort16= Object.keys(data16)
            .sort((a,b)=> data16[b]-data16[a])
            .slice(0,4)
            .sort();

            const sort17= Object.keys(data17)
            .sort((a,b)=> data17[b]-data17[a])
            .slice(0,4)
            .sort();

            countObj["2016"]= {};
            countObj["2017"]= {};

            for(let i =0 ; i<sort16.length; i++){
                countObj["2016"][i]= [sort16[i], data16[sort16[i]]]
                countObj["2017"][i]= [sort17[i], data17[sort17[i]]]
            }

            resolve(countObj);
        })
        .on("error", (err)=> reject(err));
    })
}