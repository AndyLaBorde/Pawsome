const router = require("express").Router();
const { User, Comment } = require("../../models");

//get comments by id
//http://localhost:3001/api/comments/1
router.get("/:id", async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id);
    res.status(200).json(commentData);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
});

//Post Comments
//http://localhost:3001/api/comments/
router.post("/", async (req, res) => {
  try {
    const commentData = await Comment.create({
      post_id: req.body.post_id,
      user_id: req.body.user_id,
      text: req.body.text,
    });
    res.status(200).json(commentData);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
});

//Delete Comments
//http://localhost:3001/api/comments/
router.delete("/", async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        post_id: req.body.post_id,
        user_id: req.body.user_id,
      },
    });
    res.status(200).json(commentData);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
});

module.exports = router;
