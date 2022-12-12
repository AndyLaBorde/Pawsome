const {post} =require ("../models")

const postData = [
{
    user_id: 1,
    photo: 2,
    description: 3,
    likes: 4,
    comments_id: 5,
}
]

const seedUserData = () => user.bulkCreate(postData)