const { Post } = require("../models");

const postData = [
  {
    user_id: 1,
    photo:
      "https://drive.google.com/file/d/1uZN00KZvZ92w6_BbN5XHBoOyCaWEUYex/preview",
    description: "Im a turtle",
    likes: 4,
    //comment Id could be removed
    comments_id: 5,
  },
];

const seedPostData = () => Post.bulkCreate(postData);
module.exports = seedPostData;
