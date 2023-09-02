const express = require("express");
const router = express.Router();

router
  .route("/first")
  .get(async (req, res) => {
    res.json({ msg: "user routes get request" });
  })
  .post((req, res) => {
    res.json({ msg: "user routes post request" });
  });

module.exports = router;
