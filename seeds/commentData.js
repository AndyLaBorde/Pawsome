const { Comment } = require("../models");

const commentData = [
  {
    post_id: 1,
    user_id: 2,
    text: "nice pic!",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
