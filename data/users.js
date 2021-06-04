const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Abdelhak Touil",
    email: "admin1@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Ghaith Ben Hassin",
    email: "admin2@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
