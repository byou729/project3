const db = require("../models");

module.exports = {
  //find all menuItems
  findAll: function(req, res) {
    db.MenuItem
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //find menuItems by id
  findById: function(req, res) {
    db.MenuItem
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCategory: function(req, res) {
    db.MenuItem
      .find({ category: req.params.category})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //create menuItem by parsing body
  create: function(req, res) {
    db.MenuItem
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //update menu item by its id 
  update: function(req, res) {
    db.MenuItem
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //delete menu item by its id
  remove: function(req, res) {
    db.MenuItem
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};