import { Route, Routes } from "react-router-dom"

// import CreatePoll from "./CreatePoll.jsx"
// import RegisterVote from "./RegisterVote.jsx"
// import ViewResult from "./ViewResult.jsx"
import CreatePoll from "./CreatePoll";
import RegisterVote from "./registerVote";
import ViewResult from "./viewResult";


const PollMasterIndex= ()=>{
    return(
        <div>
            <h2>Poll PollMasterIndex</h2>
            <Routes>
                <Route path="/" element={<CreatePoll/>}/>
                <Route path="createPoll" element={<CreatePoll/>} />
                <Route path="registerPoll" element={<RegisterVote/>} />
                <Route path="viewResult" element={<ViewResult/>}/>
            </Routes>
        </div>
    )
}

export default PollMasterIndex;