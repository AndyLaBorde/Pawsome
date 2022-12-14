const router = require("express").Router();
const { User, Follower } = require("../../models");

//http://localhost:3001/api/follower/1
//get following from following_ID
router.get("/:follower", async (req, res) => {
  try {
    const followerData = await Follower.findAll({
      where: {
        follower_id: req.params.follower,
      },
      include: [{ model: User }],
    });
    res.status(200).json(followerData);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
});

//http://localhost:3001/api/following/1
//create new follower
router.post("/", async (req, res) => {
  try {
    const followerData = await Follower.create({
      follower_id: req.body.follower_id,
      user_id: req.body.user_id,
    });
    res.status(200).json(followerData);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
});

//http://localhost:3001/api/following/1
//delete following with following id and user_id
router.delete("/", async (req, res) => {
  try {
    const followerData = await Follower.destroy({
      where: {
        follower_id: req.body.follower_id,
        user_id: req.body.user_id,
      },
    });
    res.status(200).json(followerData);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
});

module.exports = router;
