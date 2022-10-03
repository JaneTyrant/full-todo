const { Router } = require("express");
const userRouter = require("./userRouter");
const tasksRouter = require("./tasksRouter");
const TaskController = require("../controllers/task.controller");
const router = Router();

router.use("/users", userRouter);
router.use("/users/", tasksRouter);
router.get("/tasks", TaskController.getTasks);

module.exports = router;