const fs = require("fs");

const setCookie = (email) => {
  const data = fs.readFileSync("../datapath/user.json");
  const users = JSON.parse(data);
  const user = users.find((users) => users.email === email);
  const result = {
    name: user.username,
    email: user.email,
  };
  return result;
};
setCookie("andre@gmail.com");
module.exports = { setCookie };
