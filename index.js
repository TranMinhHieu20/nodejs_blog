const express = require("express");
var morgan = require("morgan");

const app = express();
const port = 3000;
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send(`
        <h1>hell0</h1>
    `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
