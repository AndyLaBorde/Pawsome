const { follower } = require("../models");

const followerData = [
  {
    user_id: 1,
  },
];

const followerSeedDate = () => follower.bulkCreate(followerData);
module.exports = followerSeedDate;
