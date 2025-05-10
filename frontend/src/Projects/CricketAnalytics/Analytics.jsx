import React, { useState } from "react";


export default function Analytics (){

    const [selectYear, setSelectYear] = useState("");

    const handelYearSelect =(e)=>{
        setSelectYear(e.target.value)
    }

    return(
        <div>
            <h1>See you fav match analytics</h1>


            <div>
                <select name="yearSelect" id=""  onChange={handelYearSelect}>
                    <option value="">Select an option</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                </select>

                <p>Selected year: {selectYear}</p>
                
            </div>
        </div>
    )
}