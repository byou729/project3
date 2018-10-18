const db = require("../models");

module.exports = {
  
  //find all cats
  findAll: function(req, res) {
    db.Category
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //find cats by id
  findById: function(req, res) {
    db.Category
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //create cat by parsing body from the form input
  create: function(req, res) {
    db.Category
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //update category to add menu items
  update: function(req, res) {
    db.Category
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //delete category and its items
  remove: function(req, res) {
    db.Category
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};