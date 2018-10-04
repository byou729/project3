var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Categories = new Schema({
  
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        validate: {
        }
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
        }
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        validate: {
        }
      },
      sortOrder: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
        }
      }
  
  
});

var Model = mongoose.model("Categories", Categories);

module.exports = Model;