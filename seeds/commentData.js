const {Comment} = require ("..models")

const commentData = [
{
    post_id: 1,
    user_name: 2,
    text: 3,
}
]

const seedCommentData = () => Comment.bulkCreate(commentData)
module.exports = seedCommentData;