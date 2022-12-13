const seedUser = require('./userData');
const seedFollower = require('./followerData');
const seedFollowing = require('./followingData');
const seedPost = require('./postData');
const seedComment = require('./commentData');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize
}