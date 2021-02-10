const express = require("express");
const path = require("path");
const router = express.Router();
const app = express();
const port = process.env.port || 3000;

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "index.html"));
});

app.use("/", router);
app.listen(port);

console.log(`Running at port ${port}`);
