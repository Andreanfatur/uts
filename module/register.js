const { name } = require("ejs");
const fs = require("fs");

const path = "./datapath/user.json";
const loadUsers = () => {
  const users = fs.readFileSync(path, "utf-8");
  const data = JSON.parse(users);
  return data;
};
const saveUser = (data) => {
  fs.writeFileSync(path, JSON.stringify(data));
};
const addUser = (user) => {
  const data = loadUsers();
  data.push(user);
  saveUser(data);
};
const cekDuplikat = (body) => {
  const data = loadUsers();
  return data.find((data) => data.username === body);
};
module.exports = { addUser, cekDuplikat, loadUsers };
