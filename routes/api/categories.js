const router = require("express").Router();
const categoryController = require("../../controllers/categoryController");

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

    // Route for saving/updating an Article's associated Note
    // app.post("/articles/:id", function(req, res) {
    //   // TODO
    //   // ====
    //   // save the new note that gets posted to the Notes collection
    //   db.Note.create(req.body)
    //   .then(function(data){
    //     return db.Article.findOneAndUpdate({_id:req.params.id},{$push:{note:data.id}},{new:true});
    //   })
    //   .then(function(dbArticle){
    //     res.json(dbArticle);
    //   })
    //   .catch(function(err){
    //     res.json(err);
    //   })
    //   // then find an article from the req.params.id
    //   // and update it's "note" property with the _id of the new note
    // });

module.exports = router;