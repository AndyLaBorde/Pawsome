const router = require("express").Router();
const { User, Following, Post, Follower } = require("../../models");
console.log(Post);
//http://localhost:3001/api/users
//get all users
router.get("/", async (req, res) => {
  try {
    let data = await User.findAll({
      include: [
        {model: Post,},
        {model: Following},
        {model: Follower}
      ],
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//find by ID
//http://localhost:3001/api/users/id
router.get("/:id", async (req, res) => {
  try {
    data = await User.findByPk(req.params.id, {
      include: [
        {model: Post,},
        {model: Following},
        {model: Follower}
      ],
    });
    
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Create user
//http://localhost:3001/api/users/
router.post("/", async (req, res) => {
  try {
    data = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      pet: req.body.pet,
      profile_picture: req.body.profile_picture,
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;

//update
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
      individualHooks: true
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete a User
router.delete('/:id', async (req, res) => {
  try{
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      }
    });
  if (!userData[0]) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
  }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;