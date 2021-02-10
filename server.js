const express = require("express");
const path = require("path");
const router = express.Router();
const app = express();
const port = process.env.port || 3000;
const json = '{"name": "Thien Nguyen", "email": "dinhthienhcm@gmail.com")';

app.use("/", router);

//get request
app.get("/users", function (req, res) {
  res.sendFile("index.html", { root: __dirname });
});

//post request
app.post("/test.json", function (req, res) {
  res.json(json);
});

app.listen(port);

console.log(`Running at port ${port}`);
