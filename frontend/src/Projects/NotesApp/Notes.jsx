import { useState } from "react"

export default function Notes(){


const [note, setNote]= useState({title: "", content: ""});
const [noteList, setNoteList] = useState([]);

const handelAdd=()=>{
    setNoteList((prev)=>[...prev, note])
    setNote({title:"", content:""})
}



    return(
        <>
        <div>
            <div className="p-3">
                <input className="border-2 p-3 rounded-r-2xl"
                type="text"  placeholder="title"
                value={note.title} 
                onChange={(e)=>setNote({...note, title: e.target.value})}/>
            </div>

            <div>
                <textarea className="border-2 p-5 rounded-r-2xl"
                placeholder="content"
                value={note.content}
                onChange={(e)=>setNote({...note, content: e.target.value})}/>
            </div>

            <div>
                <button className=" px-3 py-1 rounded-lg bg-blue-500 cursor-pointer hover:bg-blue-300 " type="button"
                onClick={handelAdd}>ADD Note</button>
            </div>


            <div>
                <ul>{noteList.map((note, idx)=>(
                    <li key={idx}>
                        <strong> {note.title}</strong>: {note.content}
                    </li>
                ))}
                </ul>
            </div>
        </div>
        </>
    )
}