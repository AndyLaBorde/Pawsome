const { User } = require("../models");

const userData = [
  {
    //user id = 1
    username: "Midnight",

    email: "Midnight@gmail.com",

    password: "Supergoodpassword",

    pet: "Cat",

    profile_picture: "./profile_pictures/Cat_red.jpg",
  },
];

const seedUserData = () => User.bulkCreate(userData);
module.exports = seedUserData;
