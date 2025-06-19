const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: {
    type: [String], // Array of strings like ["React", "Vue"]
    required: true
  }
});

module.exports = mongoose.model("Poll", pollSchema);
