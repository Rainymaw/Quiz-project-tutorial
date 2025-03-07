const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: false,
    unique: true,
    minlength: 8,
    maxlength: 128,
  },
  answers: {
    type: Array,
    required: true,
    unique: false,
  },
  correct: {
    type: String,
    required: true,
    unique: false,
  },
  type: {
    type: String,
    required: true,
    default: "All",
  },
  date_creation: {
    type: Date,
    default: new Date(),
  },
  points: {
    type: Number,
    default: 1,
  },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
