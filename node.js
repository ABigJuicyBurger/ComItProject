const express = require("express");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");

/*const data = require();*/

const app = express();

// configure express to use handlebars
app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "StudyTime",
  })
);
app.set("view engine", "handlebars");
















// start the server
app.listen(3000, () => {
    console.log("Express started on port 3000");
  });