const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
//   _id: {
//     type: Number,
//     allowNull: false,
//     unique: true,
//     primaryKey: true,
//     autoIncrement: true,
//     validate: {
//     }
//   },
  login: {
    type: String,
// //     allowNull: false,
// //     unique: true,
// //     validate: {
// //     }
  },
//   password: {
//     type: String,
//     allowNull: false,
//     validate: {
//     }
//   },
//   email: {
//     type: String,
//     allowNull: false,
//     unique: true,
//     validate: {
//       isEmail: true,
//     }
//   },
//   admin: {
//     type: Boolean,
//     validate: {
//     }
//   }
});

const User = mongoose.model("User", user);

module.exports = User;