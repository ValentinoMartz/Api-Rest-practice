const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tasktry", "postgres", "lakers1994", {
  dialect: "postgres",
  host: "localhost",
});

const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successfull connection to DB");
  } catch (err) {
    console.log("Error on connection:", err);
  }
};

module.exports = { sequelize, connectToDB };
