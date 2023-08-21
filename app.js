const express = require("express");
const expressLayouts = require("express-ejs-layouts");
require("./controler/utils");
const app = express();
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.json());
const port = 3040;

app.get("/", (req, res) => {
  res.render("dashboard", { title: "dashboard", layout: "nav" });
});
app.get("/login", (req, res) => {
  res.render("login", { title: "login", layout: "nav" });
});
app.get("/register", (req, res) => {
  res.render("register", { title: "register", layout: "nav" });
});
app.get("/logout", (req, res) => {
  res.render("login", { title: "login", layout: "nav" });
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`port listen on ${port}`);
  }
});
