import mongoose from "mongoose";

const bugSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  severity: { type: String, enum: ["Low", "Medium", "High"], required: true },
  status: { type: String, enum: ["Open", "In Progress", "Resolved"], default: "Open" },
  assignedTo: { type: String, default: null },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Bug", bugSchema);
