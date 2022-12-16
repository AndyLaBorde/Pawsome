const router = require("express").Router();
const { User, Comment, Post, Following, Follower } = require("../models");
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

router.get("/comment/:id", async (req, res) => {
  try {
    if (req.session.loggedIn) {
      //get comment by id
      let post = await Post.findByPk(req.params.id, {
        include: [
          { model: User },
          {
            model: Comment,
            include: [{ model: User }],
          },
        ],
      });
      post = post.get({ plain: true });
      loggedInUser = req.session.user;
      res.render("comment", {
        loggedInUser,
        post,
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

router.get("/user/:id", async (req, res) => {
  try {
    if (req.session.loggedIn) {
      //get comment by id
      data = await User.findByPk(req.params.id, {
        include: [{ model: Post }, { model: Following }, { model: Follower }],
      });
      data = data.get({ plain: true });
      loggedInUser = req.session.user;
      res.render("userpage", {
        loggedInUser,
        data,
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

router.get("/search", async (req, res) => {
  try {
    if (req.session.loggedIn) {
      //get comment by id
      loggedInUser = req.session.user;
      let data = await User.findAll();
      data = data.map((data) => data.get({ plain: true }));
      console.log(data);
      res.render("search", {
        loggedInUser,
        data,
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

router.get;

module.exports = router;
