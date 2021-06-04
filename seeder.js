const mongoose = require("mongoose");
const users = require("./data/users");
const products = require("./data/products");
const User = require("./models/userModel");
const Product = require("./models/productModel");
const Order = require("./models/orderModel");
const dotenv = require("dotenv");
const connected = require("./config/connectDB");

dotenv.config();
connected();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data is imported");
  } catch (error) {
    console.error(`${error}`);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    console.log("Data is destroyed");
  } catch (error) {
    console.error(`${error}`);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
