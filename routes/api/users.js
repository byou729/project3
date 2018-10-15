const router = require("express").Router();
const categoryController = require("../../controllers/userController");

// Matches with "/api/categories"
router.route("/")
  .get(categoryController.findAll)
  .post(categoryController.create);

// Matches with "/api/categories/:id"
router
  .route("/:id")
  .get(categoryController.findById)
  .put(categoryController.update)
  .delete(categoryController.remove);

module.exports = router;