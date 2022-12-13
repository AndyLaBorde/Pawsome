const router = require("express").Router();

const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
// const loginRoutes = require("./login-routes");
// const signupRoutes = require("./signup-routes");


router.use("/users", userRoutes);
router.use("/posts", postRoutes);
// router.use("/login", loginRoutes);
// router.use("/signup", signupRoutes);

module.exports = router;
