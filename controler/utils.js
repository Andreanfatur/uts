const fs = require("fs");

const dirData = "./datapath";
if (!fs.existsSync(dirData)) {
  fs.mkdirSync(dirData);
}
const user = "./datapath/user.json";
if (!fs.existsSync(user)) {
  fs.writeFileSync(user, "[]", "utf-8");
}
const produk = "./datapath/products.json";
if (!fs.existsSync(produk)) {
  fs.writeFileSync(produk, "[]", "utf-8");
}
