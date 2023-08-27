const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { addUser, cekDuplikat, loadUsers } = require("./controler/register");
const cookieParser = require("cookie-parser");
const { login } = require("./controler/login");
const session = require("express-session");
require("./controler/utils");
const app = express();
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.urlencoded());
app.use(cookieParser("secret"));
const port = 3040;

app.get("/", (req, res) => {
  res.render("home", {
    title: "home",
    data: req.cookies.email,
    layout: "template",
  });
});
app.get("/login", (req, res) => {
  res.render("login", { title: "login", layout: "template" });
});
app.get("/register", (req, res) => {
  res.render("register", { title: "register", layout: "template" });
});
app.get("/logout", (req, res) => {
  res.render("login", { title: "login", layout: "template" });
});
app.post("/register", (req, res) => {
  const { body } = req;
  addUser(body);
  res.redirect("/");
});
app.post("/login", (req, res) => {
  const { body } = req;
  const users = loadUsers();
  login(body.email, body.password, (messege) => {
    if (messege === "email dan password valid") {
      res.cookie("email", body.email);
      res.cookie("password", body.password);
    } else {
      console.log(messege);
    }
    res.redirect("/");
  });
  // const email = req.cookies.email;
  // const password = req.cookies.password;
  res.json(body);

  // console.log(email);
  // console.log(password);
});
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`port listen on ${port}`);
  }
});
