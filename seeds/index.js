const commentSeedData = require("./commentData");
const followerSeedData = require("./followerData");
const followingSeedData = require("./followingData");
const postSeedData = require("./postData");
const userSeedData = require("./userData");

const sequelize = require("../config/connection");

const seedTables = async () => {
  await sequelize.sync({ force: true });

  await userSeedData();
  console.log("User Seeded");

  await postSeedData();
  console.log("Comments Seeded");

  await commentSeedData();
  console.log("Comments Seeded");

  await followerSeedData();
  console.log("Comments Seeded");

  await followingSeedData();
  console.log("Comments Seeded");

  console.log("seeded all!");
};

seedTables();
