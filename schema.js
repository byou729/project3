var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MenuItems = new Schema({
  
    // _id: {
    //     type: Sequelize.INTEGER,
    //     unique: true,
    //     primaryKey: true,
    //     autoIncrement: true,
    //     validate: {
    //     }
    //   },
      name: {
        type: String,
        unique: true,
        validate: {
        }
      },
      active: {
        type: Boolean,
        allowNull: false,
        validate: {
        }
      },
      sortOrder: {
        type: Number,
        allowNull: false,
        validate: {
        }
      }
  
  
});

var Model = mongoose.model("MenuItems", MenuItems);

module.exports = Model;