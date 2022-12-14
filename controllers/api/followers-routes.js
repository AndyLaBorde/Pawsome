const router = require("express").Router();
const { User, Following, Follower } = require("../../models");

router.get("/:following", async (req, res) => {
  try {
    const followingData = await Following.findAll({
      where: {
        following_id: req.params.following,
      },
    });
    res.status(200).json(followingData);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
});

module.exports = router;
