import { useState } from "react"

export default function Notes(){


const [note, setNote]= useState({title: "", content: ""});
const [topicInput, setTopicInput]= useState("");
const [topics, setTopics] = useState([])
const [noteList, setNoteList] = useState([]);
const [viewMode, setViewMode] = useState(false);


const handelAdd=()=>{
    if(note.title.trim() && note.content.trim() ){
        const newNote={...note, topics: [...topics]}

        setNoteList((prev)=>[...prev, newNote])
        setNote({title:"", content:""})
        setTopics([]);
    }
    
    
}

const handelTopics =()=>{
    if(topicInput.trim().length>0){
        setTopics((prev)=> [...prev, topicInput.trim()])
        setTopicInput("")
    }
    
}



    return(
        <>
        <div>
            <button className="px-3 py-1 bg-blue-300 rounded-2xl cursor-pointer"
            onClick={()=>setViewMode(!viewMode)}>Click to view agenda</button>
            {viewMode ? (
                <>
                <div>
                <div className="p-3">
                <input className="border-2 p-3 rounded-r-2xl"
                type="text"  placeholder="title"
                value={note.title} 
                onChange={(e)=>setNote({...note, title: e.target.value})}/>
                <br />
                <small className="text-red-700">
                    {note.title.trim()==="" && "Title is required"}
                </small>
            </div>

            <div>
                <textarea className="border-2 p-5 rounded-r-2xl"
                placeholder="content"
                value={note.content}
                onChange={(e)=>setNote({...note, content: e.target.value})}/>
                <br />
                <small className="text-red-700">
                    {note.content.trim()==="" && "Content is required"}
                </small>
            </div>

            <div>
                <input className="border-2 p-3 rounded-r-2xl"
                type="text" placeholder="topics"
                value={topicInput}
                onChange={(e)=>setTopicInput(e.target.value)}
                />
                <br />
                <small className="text-red-700">
                    {topicInput.trim()==="" && topics.length===0 && "Topics are required"}
                </small>
            </div>

        </div>
            
        <div className="">
            
            <div className="p-3">
                <button className=" px-3 py-1 rounded-lg bg-blue-500 cursor-pointer hover:bg-blue-300 " type="button"
                disabled={!note.title.trim() || !note.content.trim() || topics.length===0 }
                onClick={handelAdd}>
                Add Note</button>
            </div>

            <div className="p-3">
                <button className="px-3 py-1 rounded-lg bg-blue-500 cursor-pointer hover:bg-blue-300 " type="button"
                onClick={handelTopics}
                disabled={!topicInput.trim()}
                 >Add Topics</button>
            </div>
        </div>
        </>
            ) : (
                <>
                {noteList.length === 0 ? (
                    <div>
                        No Notes Added Yet
                    </div>
                ):(
        
                    <div>
                    {noteList.map((note,idx)=>(
                        <div key={idx}>
                            <strong>{note.title}</strong>
                            <p>{note.content}</p>
                            {note.topics.length >0 && (
                                <ul>
                                    {note.topics.map((topic, idx)=>(
                                        <li key={idx}>{`[${topic}],`}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}    
                    </div>
        
                )}
                </>
            )}

        </div>
        </>
    )
}