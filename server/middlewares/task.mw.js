const createError = require("http-errors");
const { Task } = require("../models");

module.exports.checkTask = async (req, res, next) => {
  try {
    const {
      params: { taskId },
    } = req;
    const taskInstance = await Task.findByPk(taskId);
    if (!taskInstance) {
      next(createError(404, "Task not found!"));
    }
    req.taskInstance = taskInstance;
    next();
  } catch (error) {
    next(error);
  }
};
