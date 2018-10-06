const router = require("express").Router();
const categoryRoutes = require("./categories");

// Book routes
router.use("/categories", categoryRoutes);

module.exports = router;