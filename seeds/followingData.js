const {Following} = require ("..models")

const followingData = [
{
    user_id: 1,
    user_name: 2,

}
]

const seedFollowingData = () => Following.bulkCreate(followingData)
module.exports = seedFollowingData;