const { User } = require("../models");

const userData = [
  {
    //user id = 1
    username: "Midnight",

    email: "Midnight@gmail.com",

    password: "Supergoodpassword",

    pet: "Cat",

    profile_picture: "../images/profile_pictures/Cat_red.jpg",
  },
  {
    //user id = 2
    username: "Chris P Bacon",

    email: "Chris-P-Bacon.0@gmail.com",

    password: "BaconIsGood",

    pet: "Pig Dog",

    profile_picture: "../images/profile_pictures/Jack_russel_pink.jpg",
  },
  {
    //user id = 3
    username: "Annie Dog",

    email: "Annie@gmail.com",

    password: "henry",

    pet: "Dog",

    profile_picture: "../images/profile_pictures/pfp-1.png",
  },
];

const seedUserData = () => User.bulkCreate(userData);
module.exports = seedUserData;
