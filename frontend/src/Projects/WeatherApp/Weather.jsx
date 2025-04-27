import React, { useState } from "react";
const api_key= import.meta.env.VITE_API_KEY;


export default function Weather(){

    const [city, setCity] =useState("")
    const [weatherData, setWeatherData]= useState({})

    const temp= weatherData.main ? (weatherData.main.temp - 273.15).toFixed(1) : null;

    const handelSearch = async(city_name)=>{
        
        try {
            const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`)
            const data =await response.json();
            setWeatherData(data);
            console.log(data);
            

        } catch (error) {
            console.log("Internal server error",error);
            
        }
    }

    return(
        <>

        <div className="">
            <div className="input-box p-5 ">
                <input className="input border text-black rounded p-3 " type="text" 
                onChange={(e)=>setCity(e.target.value)}
                />
            </div>

            <div>
                <button className="bg-blue-700 rounded px-5 py-1 text-white hover:bg-blue-300 cursor-pointer" onClick={()=>{handelSearch(city)}}>Search</button>
            </div>

            <div>
                <h3 className="  ">Result</h3>
                {weatherData && 
                <div className="weather-data text-2xl ">
                    <h2 className="text-xl font-semibold">{weatherData.name}</h2>
                    <p className="text-3xl">{temp}°C</p>
                </div>}
                
            </div>
        </div>

        </>
    )
}

