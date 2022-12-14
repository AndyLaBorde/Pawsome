const router = require("express").Router();
const { User, Following } = require("../../models");

//http://localhost:3001/api/following/1
//get following from following_ID
router.get("/:following", async (req, res) => {
  try {
    const followingData = await Following.findAll({
      where: {
        following_id: req.params.following,
      },
      include: [{ model: User }],
    });
    res.status(200).json(followingData);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
});

//http://localhost:3001/api/following/1
//create new follower
router.post("/", async (req, res) => {
  try {
    const followingData = await Following.create({
      following_id: req.body.user_id,
      user_id: req.body.user_id,
    });
    res.status(200).json(followingData);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
});

//http://localhost:3001/api/following/1
//delete following with following id and user_id
router.delete("/", async (req, res) => {
  try {
    const followingData = await Following.destroy({
      where: {
        following_id: req.body.user_id,
        user_id: req.body.user_id,
      },
    });
    res.status(200).json(followingData);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
});

module.exports = router;
