const express = require("express");
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  updateTasksOrder,
} = require("../src/controllers/taskController");

const { protect } = require("../src/controllers/authController");

const taskRouter = express.Router();

taskRouter.use(protect); 
taskRouter.route("/").get(getAllTasks).post(createTask);
taskRouter.patch("/updateOrder", updateTasksOrder)

taskRouter.route("/:taskId").patch(updateTask).delete(deleteTask);

module.exports = taskRouter;
