const { Follower } = require("../models");

const followerData = [
  {
    user_id: 1,
    follower_id: 2,
  },
];

const followerSeedData = () => Follower.bulkCreate(followerData);
module.exports = followerSeedData;
