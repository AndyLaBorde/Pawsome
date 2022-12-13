
//Login router
const router = require("express").Router();
const { DataTypes } = require("sequelize");


router.get("/login", async (req, res) => {
    try {
        res.status(200).render('signup');
    } catch (error) {
        console.log(error);
        res.status(500).json("SomeThing went wrong");
    }
});