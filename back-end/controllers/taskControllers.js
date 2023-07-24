const mongoose = require("mongoose");
const taskModel = require("../models/tasksModel");

const createTaskController = async (req, res) => {
  const { name } = req.body;
  try {
    if (!name) {
      return res.send({
        success: false,
        message: "Name is required",
      });
    }
    const task = await new taskModel({ name, completed: false }).save();
    res.status(201).send({
      success: true,
      message: "Task created successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in creating task",
      error,
    });
  }
};

const getTasksController = async (req, res) => {
  try {
    const tasks = await taskModel.find({});
    res.status(200).send({
      success: true,
      count: tasks.length,
      message: "successfully retrieved tasks",
      tasks,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in retreiving tasks",
      error,
    });
  }
};

const updateTaskController = async (req, res) => {
  const { id, name } = req.body;
  try {
    const task = await taskModel.findByIdAndUpdate(id, { name }, { new: true });
    res.status(201).send({
      success: true,
      message: "Task updated successfully",
      task,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in updating task",
      error,
    });
  }
};

const markTaskComplete = async (req, res) => {
  const { id } = req.body;
  try {
    const task = await taskModel.findByIdAndUpdate(
      id,
      { completed: true },
      { new: true }
    );
    res.status(201).send({
      success: true,
      message: "Task marked complete successfully",
      task,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in marking task complete",
      error,
    });
  }
};

const deleteTaskController = async (req, res) => {
  console.log(req.body);
  const { id } = req.body;
  console.log(id);
  try {
    const task = await taskModel.findByIdAndDelete(id);
    if (!task) {
      return res.send({
        success: false,
        message: "Could not delete task",
      });
    }
    res.status(200).send({
      success: true,
      message: "Task deleted successfully",
      task,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in deleting task ",
      error,
    });
  }
};

module.exports = {
  createTaskController,
  getTasksController,
  updateTaskController,
  markTaskComplete,
  deleteTaskController,
};
