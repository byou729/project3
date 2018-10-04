const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const category = new Schema({
//   _id: {
//     type: Number,
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

const Category = mongoose.model("Category", category);

module.exports = Category;