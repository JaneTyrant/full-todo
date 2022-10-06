const { Router } = require("express");
const UserController = require("../controllers/user.controller");
const TaskController = require("../controllers/task.controller");
const { checkUser } = require('../middlewares/user.mw');
const { upload } = require("../middlewares/upload.mw");
const userRouter = Router();

userRouter.post("/", upload, UserController.createUser);
userRouter.get("/", UserController.getAllUsers);
userRouter.get("/:userId", checkUser, UserController.getUser);
userRouter.patch("/:userId", checkUser, UserController.updateUser);
userRouter.delete("/:userId", checkUser, UserController.deleteUser);

userRouter.post("/:userId/tasks", checkUser, TaskController.createTask);

// userRouter.route('/')
//     .post(upload, UserController.createUser)
//     .get(UserController.getAllUsers)

module.exports = userRouter;