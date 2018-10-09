const router = require("express").Router();
const categoryRoutes = require("./categories");
const menuRoutes = require("./menuitems");
const userRoutes = require("./users");


router.use("/categories", categoryRoutes);
router.use("/menuitems", menuRoutes);
router.use("/users", userRoutes)

module.exports = router;