const mongoose = require("mongoose");
const db = require("../models");

// This file empties the meunuItem collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/mua"
);

const categorySeed = [
    {
        category: "Beef",
        sortOrder: 1
    },
    {
        category: "Chicken",
        sortOrder: 2
    },
    {
        category: "Sides",
        sortOrder: 3
    },
    {
        category: "Desserts",
        sortOrder: 4
    },
];


const menuItemSeed = [
    // {
    //     name: "12oz New York Strip",
    //     category: "Beef",
    //     description:
    //         "A hearty cut, well marbled, hand cut",
    //     image: "",
    //     sortOrder: 1,
    //     price: "$34"
    // },
    // {
    //     name: "Jack Daniels New York Strip",
    //     category: "Beef",
    //     description:
    //         "12 oz Strip Marinated in Jack Daniels",
    //     image: "",
    //     sortOrder: 2,
    //     price: "$27"
    // },
    // {
    //     name: "Garlic & Basil New York Srip",
    //     category: "Beef",
    //     description:
    //         "12oz Strip marinated in garlic and basil with a cream sauce",
    //     image: "",
    //     sortOrder: 3,
    //     price: "$28"
    // },
    // {
    //     name: "Beef House Ribeye",
    //     category: "Beef",
    //     description:
    //         "Our signature steak 16oz",
    //     image: "",
    //     sortOrder: 4,
    //     price: "$40"
    // },
    // {
    //     name: "Chopped Steak",
    //     category: "Beef",
    //     description:
    //         "Freshly ground 12 oz Beef pate seasoned with garlic and topped with onions",
    //     image: "",
    //     sortOrder: 5,
    //     price: "$24"
    // },
    // {
    //     name: "Filet Mignon",
    //     category: "Beef",
    //     description:
    //         "Regular Cut 8oz",
    //     image: "",
    //     sortOrder: 6,
    //     price: "$35"
    // },
    // {
    //     name: "Tornedo Rossini",
    //     category: "Beef",
    //     description:
    //         "8z fillet flambed in brandy",
    //     image: "",
    //     sortOrder: 7,
    //     price: "$40"
    // },
    // {
    //     name: "Chicken Salad",
    //     category: "Chicken",
    //     description:
    //         "Scratch-made with diced grilled Chicken, basil & celery, topped w/ glazed pecans, lettuce & tomato on organic wholegrain bread ",
    //     image: "",
    //     sortOrder: 8,
    //     price: "$15"
    // },
    // {
    //     name: "Grilled Chicken Breast",
    //     category: "Chicken",
    //     description:
    //         "Boneless breast marinaded in olive oil",
    //     image: "",
    //     sortOrder: 9,
    //     price: "$20"
    // },
    // {
    //     name: "BBQ Chicken Breast",
    //     category: "Chicken",
    //     description:
    //         "Boneless baked in tangy barbeque sauce",
    //     image: "",
    //     sortOrder: 10,
    //     price: "$20"
    // },
    // {
    //     name: "Chicken Tenders",
    //     category: "Chicken",
    //     description:
    //         "Hand cut and breaded",
    //     image: "",
    //     sortOrder: 11,
    //     price: "$15"
    // },
    // {
    //     name: "Pan Fried Chicken Livers",
    //     category: "Chicken",
    //     description:
    //         "Hand breaded and pan fried",
    //     image: "",
    //     sortOrder: 12,
    //     price: "$17"
    // },
    // {
    //     name: "Chicken Parmesan",
    //     category: "Chicken",
    //     description:
    //         "Encrusted in parmesan cheese served with a robust marinara sauce",
    //     image: "",
    //     sortOrder: 13,
    //     price: "$22"
    // },
    // {
    //     name: "Chicken Paprika",
    //     category: "Chicken",
    //     description:
    //         "Chicken with rich paprika and cream sauve",
    //     image: "",
    //     sortOrder: 14,
    //     price: "$18"
    // },
    // {
    //     name: "Mashed Potatoe with Gravy",
    //     category: "Sides",
    //     description:
    //         "Wine jus gravy",
    //     image: "",
    //     sortOrder: 15,
    //     price: "$7"
    // },
    // {
    //     name: "Broccoli with Cheese Sauce",
    //     category: "Sides",
    //     description:
    //         "Creamy cheddar cheese",
    //     image: "",
    //     sortOrder: 16,
    //     price: "$7"
    // },
    // {
    //     name: "Sauteed Mushrooms",
    //     category: "Sides",
    //     description:
    //         "Finished with a dash of brandy",
    //     image: "",
    //     sortOrder: 17,
    //     price: "$7"
    // },
    // {
    //     name: "Baked Potatoes",
    //     category: "Sides",
    //     description:
    //         "Fully loaded",
    //     image: "",
    //     sortOrder: 18,
    //     price: "$7"
    // },
    // {
    //     name: "French Fries",
    //     category: "Sides",
    //     description:
    //         "Hand cut",
    //     image: "",
    //     sortOrder: 19,
    //     price: "$7"
    // },
    // {
    //     name: "Onion Rings",
    //     category: "Sides",
    //     description:
    //         "Hand breaded and deep fried",
    //     image: "",
    //     sortOrder: 20,
    //     price: "$7"
    // },
    // {
    //     name: "Creamed Spinach",
    //     category: "Sides",
    //     description:
    //         "Spinich in a rich cream sauce",
    //     image: "",
    //     sortOrder: 21,
    //     price: "$7"
    // },
    // {
    //     name: "Fresh Fruit Tart",
    //     category: "Desserts",
    //     description:
    //         "Fresh fruit, pastry, cream",
    //     image: "",
    //     sortOrder: 22,
    //     price: "$6"
    // },
    // {
    //     name: "Rasberry Almond Torte",
    //     category: "Desserts",
    //     description:
    //         "Almond cake filled with pastry cream almonds rasberry's",
    //     image: "",
    //     sortOrder: 23,
    //     price: "$7"
    // },
    // {
    //     name: "Dish of Ice Cream",
    //     category: "Desserts",
    //     description:
    //         "Topped with fresh berries",
    //     image: "",
    //     sortOrder: 24,
    //     price: "$8"
    // },
    // {
    //     name: "Florida Key Lime Pie",
    //     category: "Desserts",
    //     description:
    //         "Lime flavor, deeply chilled",
    //     image: "",
    //     sortOrder: 25,
    //     price: "$8"
    // },
    // {
    //     name: "CrÃ¨me Brulee",
    //     category: "Desserts",
    //     description:
    //         "With fresh berries",
    //     image: "",
    //     sortOrder: 26,
    //     price: "$9"
    // },
    // {
    //     name: "New york Style Cheese Cake",
    //     category: "Desserts",
    //     description:
    //         "With fresh strawberries",
    //     image: "",
    //     sortOrder: 27,
    //     price: "$12"
    // },
    // {
    //     name: "Homestyle apple pie",
    //     category: "Desserts",
    //     description:
    //         "Served with fresh cream and cinnamon glaze",
    //     image: "",
    //     sortOrder: 28,
    //     price: "$11"
    // },
    {
        name: "Classic Burger",
        category: "Beef",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://drive.google.com/uc?id=19RpA6lm9_TxvJZ3u7YeuKnhpF84JnT-9",
        sortOrder: 29,
        price: "$5.99"

    },

    {
        name: "Classic Double Burger",
        category: "Beef",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://drive.google.com/uc?id=11VPjJuCmH9NNz7pb_ET3zACGoSUXAkDh",
        sortOrder: 30,
        price: "$6.99"

    },

    {
        name: "Bacon Cheddar Burger",
        category: "Beef",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://drive.google.com/uc?id=1EyzrkCfGXNK_vbt5mIURjbdwuYy0MBS0",
        sortOrder: 31,
        price: "$6.99"

    },

    {
        name: "Mushroom Swiss Burger",
        category: "Beef",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://drive.google.com/uc?id=1PkRZvsPEOkv9Xf_XuCIOr5w1yzoT35wD",
        sortOrder: 32,
        price: "$6.99"
    },

    {
        name: "Grilled Chicken Sandwich",
        category: "Chicken",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://drive.google.com/uc?id=16yVT0NE3IDocyBDSZEUYPBZXTeBrcfJw",
        sortOrder: 33,
        price: "$6.99",

    },

    {

        
        name: "Bacon Chicken Club",
        category: "Chicken",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://drive.google.com/uc?id=1qwAro1YfyoPIre_VHVNTpA_LfIXM1yMq",
        sortOrder: 34,
        price: "$7.99",

    },

    {

      
        name: "Coleslaw Chicken Burger",
        category: "Chicken",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://drive.google.com/uc?id=1ttmlA8s3V9ClBQ4bqt3_EOF2-JeeDtKV",
        sortOrder: 35,
        price: "$8.50",

    },

    {

        
        name: "Chicken Tenders",
        category: "Chicken",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://drive.google.com/uc?id=1_aVX4BhgJPKkBdPQBjVLfHsN-2BFy4EF",
        sortOrder: 36,
        price: "$6.99",

    },
    {

        
        name: "Seasoned Fries",
        category: "Sides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://drive.google.com/uc?id=1ttk0FmRuQ5qZyT67FMpXmN-Z6J-B7IDw",
        sortOrder: 37,
        price: "$3.99",

    },

    {

        
        name: "Onion Rings",
        category: "Sides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://drive.google.com/uc?id=1OQ4LXeJ58bsLrPFmWi_Hkjldw-Z_9f6p",
        sortOrder: 38,
        price: "$3.99",

    },

    {

        
        name: "Loaded Baked Potato",
        category: "Sides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://drive.google.com/uc?id=1ozLGBsZWjLjcOUpTXEV3u5QHhivn9lcj",
        sortOrder: 39,
        price: "$4.50",

    },

    {

        
        name: "Cole Slaw",
        category: "Sides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://drive.google.com/uc?id=1eka89_ToXnGnZUYPERKzvWcD0WZehAKW",
        sortOrder: 40,
        price: "$2.99",

    },
    {

        
        name: "Milk Shakes",
        category: "Dessert",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://drive.google.com/uc?id=1GItjDeyfkuoVdcgVLkcQt4qBrLbX7kXu",
        sortOrder: 41,
        price: "$2.99",

    },

    {

        
        name: "Fresh Baked Cobbler",
        category: "Dessert",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://drive.google.com/uc?id=1aPAT6PyftXpMui4yvJLzHo0cCexpvjwb",
        sortOrder: 42,
        price: "$3.99",

    }
];


db.MenuItem
    .remove({})
    .then(() => db.MenuItem.collection.insertMany(menuItemSeed))
    .then(data => {
        console.log(data.result.n + " menu items inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.Category
    .remove({})
    .then(() => db.Category.collection.insertMany(categorySeed))
    .then(data => {
        console.log(data.result.n + " categories inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });