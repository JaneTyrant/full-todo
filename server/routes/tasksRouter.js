const { Router } = require("express");
const TaskController = require("../controllers/task.controller");
const { checkUser } = require('../middlewares/user.mw');
const { checkTask } = require('../middlewares/task.mw');
const tasksRouter = Router();

tasksRouter.get("/:userId/tasks", checkUser, TaskController.getTasksByUser);
tasksRouter.patch("/:userId/tasks/:taskId", checkUser, checkTask, TaskController.updateTask);
tasksRouter.delete("/:userId/tasks/:taskId", checkUser, checkTask, TaskController.deleteTask);

module.exports = tasksRouter;