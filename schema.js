var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Categories = new Schema({
  
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

var Model = mongoose.model("Categories", Categories);

module.exports = Model;