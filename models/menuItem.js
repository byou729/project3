const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "item name is Required"
  },
  category: {
    type: String,
    trim: true,
    required: "category is Required"
  },
  description: {
    type: String,
    trim: true,
    required: "description is Required"
  },
  image: {
    type: String,
    trim: true,
    required: "image link is a URL"
  },
  sortOrder: {
    type: Number,
    unique: true,
    required: "sort order is Required"
  },
  price: {
    type: String,
    required: "price is Required"
  },
//   // category: [{
//   //   type: Schema.Types.ObjectId,
//   //   ref: "category"
// }]

});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;