const path = require("path");
const express = require("express");
var morgan = require("morgan");
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;
//http logger
app.use(morgan("combined"));

//template engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resourses/views"));
console.log("path:", path.join(__dirname, "resourses/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
