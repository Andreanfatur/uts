const { loadUsers } = require("./register");

const login = (userEmail, userPassword, callback) => {
  const users = loadUsers();
  const emailLogin = users.find((users) => users.email === userEmail);
  const passwordLogin = users.find((users) => users.password === userPassword);

  if (!emailLogin) {
    return callback("email dan password salah");
  }
  if (!passwordLogin) {
    return callback("email dan password salah");
  }
  return callback("email dan password valid");
};

module.exports = { login };
