const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id',
            }
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, 
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;