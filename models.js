const { DataTypes } = require("sequelize");
const { sequelize } = require("./db");

const Task = sequelize.define("Task", {
  /* id: {
    type: DataTypes.INTEGER,
    primaryKeys: true,
    autoIncrement: true,
  }, */
  content: {
    type: DataTypes.STRING,
    validate: {
      max: 150,
    },
  },
  description: {
    type: DataTypes.TEXT,
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

/* sequelize.sync();
 */

module.exports = Task;
