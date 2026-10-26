const express = require('express');
const app = express();
const path = require('path');

app.set("view engine", "ejs"); // Corrected view engine setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // Fixed 'Path' to 'path'

app.get('/', function (req, res) {
  res.render("welcome");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
