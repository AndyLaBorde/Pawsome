const router = require("express").Router();
const { User } = require("../../models");

//http://localhost:3001/api/users
//get all users
router.get("/", async (req, res) => {
  try {
    let data = await User.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

//find by ID
//http://localhost:3001/api/users/id
router.get("/:id", async (req, res) => {
  try {
    data = await User.findByPk(req.params.id);
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
