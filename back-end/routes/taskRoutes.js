const express = require("express");
const {
  createTaskController,
  getTasksController,
  updateTaskController,
  markTaskComplete,
  deleteTaskController,
} = require("../controllers/taskControllers");
const router = express.Router();

router.post("/create-task", createTaskController);
router.get("/get-tasks", getTasksController);
router.put("/edit-task", updateTaskController);
router.put("/mark-task-complete", markTaskComplete);
router.delete("/delete-task", deleteTaskController);

module.exports = router;
