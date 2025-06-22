import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  attendingCount: { type: Number, default: 0 },
  maybeCount: { type: Number, default: 0 },
  notAttendingCount: { type: Number, default: 0 },
  attendingPercentage: { type: Number, default: 0 },
  maybePercentage: { type: Number, default: 0 },
  notAttendingPercentage: { type: Number, default: 0 }
});

export default mongoose.model("Event", eventSchema);

