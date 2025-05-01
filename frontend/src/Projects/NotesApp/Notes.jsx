import { useState } from "react"

export default function Notes(){


const [note, setNote]= useState({title:"", content:""});
const [noteList, setNoteList] = useState([]);

const handelAdd=()=>{
    setNoteList((prev)=>[...prev, note])
    setNote({title:"", content:""})

}



    return(
        <>
        <div>
            <div>
                <input type="text"  placeholder="title"
                value={note} onChange={(e)=>setNote({...note, title:e.target.value})}/>
            </div>

            <div>
                <textarea placeholder="content"
                onChange={(e)=>setNote({...note, content:e.target.value})}/>
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