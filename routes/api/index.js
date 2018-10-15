const router = require("express").Router();
const categoryRoutes = require("./categories");
const menuRoutes = require("./menuitems");


router.use("/categories", categoryRoutes);
router.use("/menuitems", menuRoutes);

module.exports = router;