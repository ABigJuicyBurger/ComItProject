const express = require("express");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const http = require("http");


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

 // middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

// routing
app.get("/", (req, res) => {
  res.render("clockbody");
});
app.get("/AboutUs", (req, res) => {
  res.render("AboutUs");
});




// start the server
app.listen(3000, () => {
    console.log("Express started on port 3000");
  });