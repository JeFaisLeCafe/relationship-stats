var express = require("express");
var path = require("path");

var app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

// An api endpoint that returns a short list of items
app.get("/api/getList", (req, res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log("Sent list of items");
});
app.post("/api/test", require("./routes/test.js"));
app.post("/api/upload", require("./routes/upload"));

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
