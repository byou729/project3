const router = require("express").Router();
const categoryRoutes = require("./categories");
const menuRoutes = require("./menuitems");
<<<<<<< HEAD
=======
const userRoutes = require("./users");
>>>>>>> 795b5906f2c1e3d29736d15d7d416c16e16f296d


router.use("/categories", categoryRoutes);
router.use("/menuitems", menuRoutes);
<<<<<<< HEAD
=======
router.use("/users", userRoutes)
>>>>>>> 795b5906f2c1e3d29736d15d7d416c16e16f296d

module.exports = router;