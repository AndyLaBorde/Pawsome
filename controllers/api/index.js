const router = require("express").Router();

const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const followerRoutes = require("./followers-routes");
const followingRoutes = require("./following-routes");
const commentRoutes = require("./comment-routes");

// const loginRoutes = require("./login-routes");
// const signupRoutes = require("./signup-routes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/following", followingRoutes);
router.use("/followers", followerRoutes);
router.use("/comments", commentRoutes);
// router.use("/login", loginRoutes);
// router.use("/signup", signupRoutes);

module.exports = router;
