const path = require("path");
const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/data");




app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});


