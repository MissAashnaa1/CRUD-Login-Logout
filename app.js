const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ val: 1 });
});

app.use("/api/user", require("./routes/userRoutes"));

module.exports = { app };
