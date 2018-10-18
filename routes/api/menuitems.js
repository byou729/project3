const router = require("express").Router();
const menuItemController = require("../../controllers/menuItemController");

// Matches with "/api/menuitems"
router.route("/")
  .get(menuItemController.findAll)
  .post(menuItemController.create);

// Matches with "/api/menuitems/:id"
router
  .route("/:id")
  .get(menuItemController.findById)
  .put(menuItemController.update)
  .delete(menuItemController.remove);

router
  .route("/pub/:category")
  .get(menuItemController.findByCategory);

module.exports = router;