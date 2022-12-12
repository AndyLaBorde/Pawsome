const router = require("express").Router();
const { User } = require("../../models");

//http://localhost:3001/api/users
router.get("/", async (req, res) => {
  console.log(User);
  try {
    let data = await User.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
