const createError = require("http-errors");
const { Task, User } = require("../models");

module.exports.createTask = async (req, res, next) => {
    try {
      const { body, userInstance } = req;
      const task = await userInstance.createTask(body);
      if (!task) {
        next(createError(400, "Invalid data"));
      }
      res.status(201).send({ data: task });
    } catch (error) {
      next(error);
    }
};

module.exports.getTasks = async (req, res, next) => {
    try {
      const tasks = await Task.findAll();
      res.status(200).send({ data: tasks });
    } catch (error) {
      next(error);
    }
};

module.exports.getTasksByUser = async (req, res, next) => {
    try {
      const { userInstance } = req;
      const tasks = await userInstance.getTasks();
      if (!tasks) {
        next(createError(404, "Tasks not found."));
      }
      res.status(200).send({ data: tasks });
    } catch (error) {
      next(error);
    }
};

module.exports.updateTask = async (req, res, next) => {
    try {
        const { body, userInstance, taskInstance } = req;
        if (userInstance.id !== body.userId) {
          next(createError(400, "Try again!"));
        }
        const updatedTask = await taskInstance.update(body);
        res.status(200).send({ data: updatedTask });
    } catch (error) {
      next(error);
    }
};

module.exports.deleteTask = async (req, res, next) => {
    try {
      const { userInstance, taskInstance } = req;
      await taskInstance.destroy();
      res.status(200).send({ data: taskInstance });
    } catch (error) {
      next(error);
    }
  };