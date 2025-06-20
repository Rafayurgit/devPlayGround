// PollMasterIndex.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CreatePoll from "./createPoll";
import RegisterVote from "./registerVote";
import ViewResult from "./viewResult";

const PollMasterIndex = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="createPoll" element={<CreatePoll />} />
        <Route path="registerPoll" element={<RegisterVote />} />
        <Route path="viewResult" element={<ViewResult />} />
      </Routes>
    </div>
  );
};

export default PollMasterIndex;
