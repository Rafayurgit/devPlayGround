import React, { useState } from "react";


export default function Weather(){

    const [city, setCity] =useState("")

    const handelSearch =()=>{
        
        try {
            const data = fetch("https://openweathermap.org/api")
            res.status(200).json(data, "Data fetched")

        } catch (error) {
            res.status(500).json("Internal server error")
        }
    }

    return(
        <>

        <div >
            <div className="input-box">
                <input className="input" type="text" 
                onChange={(e)=>setCity(e.target.value)}
                />
            </div>

            <div>
                <button onClick={handelSearch}>Search</button>
            </div>

            <div>
                <div>Result</div>
            </div>
        </div>

        </>
    )
}

