import { useState } from "react"

export default function Notes(){


const [note, setNote]= useState("");
const [noteList, setNoteList] = useState([]);

const handelAdd=()=>{
    setNoteList((prev)=>[...prev, note])
    setNote("")

}



    return(
        <>
        <div>
            <div>
                <input type="text" value={note} onChange={(e)=>setNote(e.target.value)}/>
            </div>

            <div>
                <button onClick={handelAdd}>ADD Note</button>
            </div>


            <div>
                <ul>{noteList.map((note, idx)=>{
                    <li key={idx}>{note}</li>
                })}
                </ul>
            </div>
        </div>
        </>
    )
}