const { User } = require("../models");

const userData = [
  {
    //user id = 1
    username: "Midnight",

    email: "Midnight@gmail.com",

    password: "Supergoodpassword",

    pet: "Cat",
  },
];

const seedUserData = () => User.bulkCreate(userData);
module.exports = seedUserData;
