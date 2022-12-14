const User = require("./Users");
const Post = require("./Post");
const Comment = require("./Comment");
const Follower = require("./Follower");
const Following = require("./Following");

//Following
User.hasMany(Following, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Following.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//Followers
User.hasMany(Follower, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Follower.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//Posts
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = {
  User,
  Post,
  Comment,
  Follower,
  Following,
};
