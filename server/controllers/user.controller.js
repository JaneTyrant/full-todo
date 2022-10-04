const createError = require("http-errors");
const _ = require("lodash");
const { User } = require("../models");

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    if (req.file) {
      body.avatar = req.file.filename
    }
    const values = _.pick(body, ["login", "password", "avatar"]);
    const user = await User.create(values);
    if (!user) {
      next(createError(400, "Invalid data"));
    }
    const userPrepare = _.omit(user.get(), ["password"]);
    res.status(201).send({ data: userPrepare });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ["password"],
      },
    });
    res.status(200).send({ data: users });
  } catch (error) {
    next(error);
  }
};

module.exports.getUser = async (req, res, next) => {
  try {
    const { userInstance } = req;
    const userPrepare = _.omit(userInstance.get(), ["password"]);
    res.status(200).send({ data: userPrepare });
  } catch (error) {
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const { body, userInstance } = req;
    const updatedUser = await userInstance.update(body, { returning: true });
    const userPrepare = _.omit(updatedUser.get(), ["password"]);
    res.status(200).send({ data: userPrepare });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const { userInstance } = req;
    await userInstance.destroy();
    res.status(200).send({ data: userInstance });
  } catch (error) {
    next(error);
  }
};
