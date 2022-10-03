"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Task, {
        foreignKey: "userId",
      });
    }
  }
  User.init(
    {
      login: {
        allowNull: false,
        type: DataTypes.STRING(64),
        unique: true,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      password: {
        field: "password_hash",
        allowNull: false,
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
          notNull: true,
        },
        set(v) {
          this.setDataValue("password", "hash");
        },
      },
      avatar: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      underscored: true,
    }
  );
  return User;
};
