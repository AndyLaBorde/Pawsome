const { following } = require("..models");

const followingData = [
  {
    user_id: 1,
  },
];

const followingSeedData = () => following.bulkCreate(followingData);
module.exports = followingSeedData;
