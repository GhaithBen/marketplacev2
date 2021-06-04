const express = require("express");
const app = express();
const PORT = 5000;
const dotenv = require("dotenv");
const connected = require("./config/connectDB");
const productRoutes = require("./routes/productRoutes");

dotenv.config();
connected();

app.get("/", (req, res) => {
  res.send("APP is running ...");
});

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`server up and running on port ${PORT}`);
});
