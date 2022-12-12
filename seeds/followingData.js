const { following } = require("..models");

const followingData = [
  {
    user_id: 1,
  },
];

const followerSeedData = () => following.bulkCreate(followingData);
module.exports = followerSeedData;
