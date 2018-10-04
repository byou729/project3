const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuItem = new Schema({
//   _id: {
//     type: Number,
//     allowNull: false,
//     unique: true,
//     primaryKey: true,
//     autoIncrement: true,
//     validate: {
//     }
//   },
  title: {
    type: String,
    allowNull: false,
    unique: true,
    validate: {
    }
  },
  image: {
    type: String,
    validate: {
      isUrl: true,
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
    }
  },
  categoryId: {
    type: Number,
    allowNull: false,
    validate: {
    }
  },
  sortOrder: {
    type: Number,
    allowNull: false,
    unique: true,
    validate: {
    }
  },
  price: {
    type: Number,
    allowNull: false,
    validate: {
    }
  }

});

const MenuItem = mongoose.model("MenuItem", menuItem);

module.exports = MenuItem;