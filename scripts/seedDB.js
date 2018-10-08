const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/mua"
);

const menuItemSeed = [
    {
        name: "American Classic",
        cateory: "Breakfast",
        description:
            "Eggs, bacon, toast, choice of skillet potatoes or fruit",
        image:"",
        sortOrder:14,
        price:5
    },
    {
        name: "French quarter french toast",
        cateory: "Breakfast",
        description:
            "French bread drenched in rich cream, topped with powdered sugar, fresh berries  and glazed pecans, served with caramel syrup ",
        image:"",
        sortOrder:14,
        price:7
    },
    {
        name: "Sandwich Tray",
        cateory: "Breakfast",
        description:
            "Hearty breakfast sandwiches, 5 Breakfast BLT and 5 Daybreaks  (assorted proteins)",
        image:"",
        sortOrder:14,
        price:22
    },
    {
        name: "Pastry Collection",
        cateory: "Breakfast",
        description:
            "Assorted pastries, choose from our fresh baked cranberry walnut muffin,  carrot raisin muffin, cheese danish & raspberry crown",
        image:"",
        sortOrder:14,
        price:22
    },
    {
        name: "Taco Bar",
        cateory: "Breakfast",
        description:
            "Choice of: Bacon Turkey Sausage Potato Black Bean  Guacamole",
        image:"",
        sortOrder:14,
        price:11
    },
    {
        name: "Sides",
        cateory: "Breakfast",
        description:
            "Scrambled Eggs  Skillet Potatoes  Bacon  Fruit Salad ",
        image:"",
        sortOrder:14,
        price:7
    },
    {
        name: "Chicken Salad",
        cateory: "Chicken",
        description:
            "Scratch-made with diced grilled chicken, basil & celery, topped w/ glazed pecans, lettuce & tomato on organic wholegrain bread ",
        image:"",
        sortOrder:14,
        price:15
    },
    {
        name: "Turkey & Swiss",
        cateory: "Chicken",
        description:
            "Swiss cheese, lettuce & tomato on organic wholegrain bread ",
        image:"",
        sortOrder:14,
        price:9
    },
    {
        name: "Turkey Club",
        cateory: "Chicken",
        description:
            "Triple-decker turkey sandwich with lettuce, bacon, monterey jack cheese, tomato, toasted 9-grain wheat bread  & house-made creamy parmesan dressing",
        image:"",
        sortOrder:14,
        price:22
    },
    {
        name: "Rustica Chicken Sandwich",
        cateory: "Chicken",
        description:
            "Sliced grilled chicken breast, roasted tomatoes, red onions, black olive tapenade, spring mix, house-made basil pesto & vinaigrette on toasted ciabatta bread ",
        image:"",
        sortOrder:14,
        price:15
    },
];

db.MenuItem
    .remove({})
    .then(() => db.MenuItem.collection.insertMany(menuItemSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
