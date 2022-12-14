const router = require("express").Router();
const { DataTypes } = require("sequelize");
const { User, Post, Comment } = require("../../models");

//https://localhost:3001/api/posts/
//get all
router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ["username"]
                },
                { model: Comment,
                attributes: ["text"],
            },
            ],
        });
        const posts = postData.map((post) =>
        post.get({ plain: true})
        );
        res.render('post', {
            posts, 
            loggedIn: req.session.loggedIn 
        });
        // res.status(200).json(postData);
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }
});

//https://localhost:3001/api/posts/:id
//get one by id
router.get("/:id", async (req, res) => {
  try {
    let data = await Post.findByPk(req.params.id, {
      include: [
        { model: User },
        {
          model: Comment,
        },
      ],
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json("SomeThing went wrong");
  }
});

//https://localhost:3001/api/posts/
//new post
router.post("/", async (req, res) => {
  try {
    let data = await Post.create({
      user_id: req.body.user_id,
      photo: req.body.photo,
      description: req.body.description,
      likes: req.body.likes,
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json("SomeThing went wrong");
  }
});

//https://localhost:3001/api/posts/:id
//updates post
router.put("/:id", async (req, res) => {
  try {
    let data = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!data[0]) {
      res.status(404).json({ message: "No Post with this id!" });
      return;
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//https://localhost:3001/api/posts/:id
//delete post by id
router.delete("/:id", async (req, res) => {
  try {
    let data = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!data[0]) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
