const { follower } = require("../models");

const followerData = [
  {
    user_id: 1,
  },
];

const followerSeedData = () => follower.bulkCreate(followerData);
module.exports = followerSeedData;
