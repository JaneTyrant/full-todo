const { Router } = require("express");
const userRouter = require("./userRouter");
const tasksRouter = require("./tasksRouter");
const TaskController = require("../controllers/task.controller");
const router = Router();
const { upload } = require("../middlewares/upload.mw");

router.use("/users", userRouter);

//router.use(upload);
router.use("/users/", tasksRouter);
router.get("/tasks", TaskController.getTasks);

module.exports = router;