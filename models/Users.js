const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    pet: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile_picture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        console.log(newUserData.password);
        newUserData.email = newUserData.toLowerCase();
      },

      beforeBulkCreate: async (newUserData) => {
        //password hashing
        for (let index = 0; index < newUserData.length; index++) {
          const element = newUserData[index];
          element.dataValues.password = await bcrypt.hash(
            element.dataValues.password,
            10
          );
          //lowering email
          element.dataValues.email = element.dataValues.email.toLowerCase();
        }
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.email = await updatedUserData.email.toLowerCase();
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
