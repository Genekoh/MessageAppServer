const express = require("express");

const db = require("./db/db.js");

const router = express.Router();

router.get("/setup", (req, res, next) => {
    res.json("{}");
});

module.exports = router;
