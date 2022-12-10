const router = require("express").Router();
//api index is blank throws error
// const apiRoutes = require('./api');
const homeRoutes = require("./home-routes.js");

router.use("/", homeRoutes);
//api routes are not built yet
// router.use('/api', apiRoutes);

module.exports = router;
