const {user} = require ("../models")

const userData = [ 
{
    user_name: 1,

    email_id: 2,

    password: 3,

    posts_id: 4,

    following_id: 5,

    Pet: 6,
}
]

const seedUserData = () => user.bulkCreate(userData)