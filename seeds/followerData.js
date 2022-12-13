const {Follower} = require ("../models")

const followerData = [
{
    user_id: 1,
    user_name: 2,

}
]


const seedFollowerData = () => Follower.bulkCreate(followerData)

module.exports = seedFollowerData;