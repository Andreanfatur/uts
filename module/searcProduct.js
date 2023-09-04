const fs = require("fs");

const searctProduct = (keyword) => {
  const data = fs.readFileSync("../datapath/products.json");
  const products = JSON.parse(data);
  const product = products.filter((product) =>
    product.name.toLowerCase().includes(keyword.toLowerCase())
  );
  if (product.length > 0) {
    const result = JSON.stringify(product);
    return result;
  } else {
    return "error";
  }
};
const user = searctUser("meja");
console.log(user);
module.exports = searctProduct;
