const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { addUser, loadUsers } = require("./controler/register");
const cookieParser = require("cookie-parser");
const { login } = require("./controler/login");
const session = require("express-session");

require("./controler/utils");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(expressLayouts);
app.use(express.urlencoded());
app.use(cookieParser("secret"));
app.use(
  session({
    secret: "CD-uu8yU7#rrK",
    saveUninitialized: "true",
    screen: "false",
  })
);
const port = 3040;

app.get("/", (req, res) => {
  res.render("home", {
    title: "home",
    data: req.cookies.email,
    layout: "template",
  });
});
app.get("/login", (req, res) => {
  res.render("login", {
    title: "login",
    data: req.cookies.email,
    layout: "template",
  });
});
app.get("/register", (req, res) => {
  res.render("register", {
    title: "register",
    data: req.cookies.email,
    layout: "template",
  });
});
app.get("/logout", (req, res) => {
  // res.render("login", { title: "login", layout: "template" });
  res.cookie("email", "");
  res.cookie("password", "");
  res.redirect("/");
});
app.post("/register", (req, res) => {
  const { body } = req;
  const data = loadUsers();
  const id = data.length + 1;
  body.id = id;
  delete body.konfirmasi;
  addUser(body);
  res.cookie("email", body.email);
  res.cookie("password", body.password);
  res.redirect("/");
});
app.post("/login", (req, res) => {
  const { body } = req;
  login(body.email, body.password, (messege) => {
    if (messege === "email dan password valid") {
      res.cookie("email", body.email);
      res.cookie("password", body.password);
      res.redirect("/");
    } else {
      res.redirect("/login");
    }
  });
});
app.get("/dashboard", (req, res) => {
  res.render("dashboard", {
    layout: "template",
    title: "Dashboard",
    data: req.cookies.email,
  });
});
app.get("/tambah-product", (req, res) => {
  res.render("tambahProduct", { layout: "template", title: "tambah product" });
});
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`port listen on ${port}`);
  }
});
