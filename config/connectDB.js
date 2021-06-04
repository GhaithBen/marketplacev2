const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });
const connected = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("the databse is connected");
  } catch (error) {
    console.log("the database is not connected");
  }
};
module.exports = connected;
