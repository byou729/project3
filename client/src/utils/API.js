import axios from "axios";

export default {
  // Gets all Categories
  getCats: function() {
    return axios.get("/api/categories");
  },
  // Gets the cat with the given id
  getCat: function(id) {
    return axios.get("/api/categories/" + id);
  },
  // Deletes the cat with the given id
  deleteCat: function(id) {
    return axios.delete("/api/categories/" + id);
  },
  // Saves a cat to the database
  saveCat: function(catData) {
    return axios.post("/api/categories", catData);
  },
    //   // save the new note that gets posted to the Notes collection
    //   db.Note.create(req.body)
    //   .then(function(data){
    //     return db.Article.findOneAndUpdate({_id:req.params.id},{$push:{note:data.id}},{new:true});

  //save a menuItem to the database
  saveItem: function(itemData){
    return axios.post("/api/menuItems", itemData)
  },
  //update cat to push menuItems with associated cat
  updateCat: function(id,itemId){
    return axios.put("/api/categories/" + id,{$push:{menuItem:itemId}},{new:true})

  },
  // Gets the menuItem with the given id
  getItem: function(id) {
    return axios.get("/api/menuItems/" + id);
  },
  // Deletes the cat with the given id
  deleteItem: function(id) {
    return axios.delete("/api/menuItems/" + id);
  },

  findItemsByCategory: function(category) {
    return axios.get("/api/menuitems/pub/" + category)
  }
};