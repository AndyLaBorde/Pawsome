const { Follower } = require("../models");

const followerData = [
  {
    user_id: 1,
  },
];

const followerSeedData = () => Follower.bulkCreate(followerData);
module.exports = followerSeedData;
