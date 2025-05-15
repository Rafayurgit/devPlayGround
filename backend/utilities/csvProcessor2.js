import fs from "fs";
import csvParser from "csv-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirName= dirname(__filename);

const matchesPath = path.join(__dirName, "../data/matches.csv");
const deliveriesPath = path.join(__dirName, "../data/deliveries.csv");

export const getFourNsix =()=>{
    return new promises((resolve, reject)=>{

        const matchSeasonMap={};
        const finalResult={};

        fs.createReadStream(matchesPath)
        .pipe(csvParser())
        .on("data", (data)=>{
            matchSeasonMap[data.ID]=data.SEASON;
        })
        .on("end", ()=>{
            fs.createReadStream(deliveriesPath)
            .pipe(csvParser())
            .on("data", (data)=>{
                const matchId= data.MATCH_ID;
                const season = matchSeasonMap[matchId];
                const team = data.BATTING_TEAM;

                if(!season) return;

                if(!finalResult[season]) finalResult[season]={};
                if(finalResult[season][team]){
                    finalResult[season][team]={
                        count4:0,
                        count6:0,
                        countRun:0

                    }
                }

                if(data.BATTING_RUNS ==="4"){
                    finalResult[season][team].count4 += 1;
                }
                if(data.BATTING_RUNS ==="6"){
                    finalResult[season][team].count6 += 1;
                }

                finalResult[season][team].countRun += parseInt(data.TOTAL_RUNS,10)
            })
            .on("end", ()=>{
                resolve(finalResult)
            })
            .on("error", (err)=>reject(err));
        }).on("error", (err)=>reject(err));
    })
}