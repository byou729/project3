const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({

    category: {
        type: String,
    },
    sortOrder: {
        type: Number,
    },
    menuItem: [{
        type: Schema.Types.ObjectId,
        ref: "menuItem"
    }]
    
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;