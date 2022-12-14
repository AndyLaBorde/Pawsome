const { Following } = require("../models");

const followingData = [
  {
    user_id: 2,
    following_id: 1,
  },
];

const followingSeedData = () => Following.bulkCreate(followingData);
module.exports = followingSeedData;

const seedFollowingData = () => Following.bulkCreate(followingData);
module.exports = seedFollowingData;
