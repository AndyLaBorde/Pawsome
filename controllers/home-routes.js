const router = require("express").Router();
const { User, Comment, Post } = require("../models");
// TODO: Import the custom middleware

// GET all posts for homepage
router.get("/", async (req, res) => {
  try {
    if (req.session.loggedIn) {
      const postData = await Post.findAll({
        include: [
          {
            model: User,
          },
          { model: Comment, attributes: ["text"], include: [{ model: User }] },
        ],
      });
      loggedInUser = req.session.user;
      likedPost = req.session.liked;
      const posts = postData.map((post) => post.get({ plain: true }));
      res.render("post", {
        posts,
        loggedInUser,
        likedPost,
      });
    } else {
      res.redirect("/login");
    }
    // res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  // else {
  //     res.render('login')
  // }
});

router.get("/login", async (req, res) => {
  try {
    res.status(200).render("login");
  } catch (error) {
    console.log(error);
    res.status(500).json("SomeThing went wrong in login");
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.status(200).render("signup");
  } catch {
    console.log(error);
    res.status(500).json("Something went wrong in signup");
  }
});

router.get("/newpost", async (req, res) => {
  try {
    if (req.session.loggedIn) {
      loggedInUser = req.session.user;
      res.render("newpost", {
        loggedInUser,
      });
    } else {
      res.redirect("/login");
    }
    res.status(200);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
