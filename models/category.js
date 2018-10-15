const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    category: {
        type: String,
        trim: true,
        required: "category is Required"
    },
    sortOrder: {
        type: Number,
        unique: true,
        required: "sort order is Required"
    },
    // menuItem: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "menuItem"
    // }]
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;