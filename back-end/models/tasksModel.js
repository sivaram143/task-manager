const mongoose = require("mongoose");
const tasksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const taskModel = mongoose.model("tasks", tasksSchema);
module.exports = taskModel;
