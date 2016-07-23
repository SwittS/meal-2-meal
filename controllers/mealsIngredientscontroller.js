var db = require('../models');

// app.get('/api/albums/:albumId/songs', controllers.albumsSongs.index);
function index(req, res) {
  db.Meal.findById(req.params.mealId, function(err, foundMeal) {
    console.log('responding with ingredients:', foundMeal.ingredients);
    res.json(foundMeal.ingredients);
  });
}
// POST '/api/meals/:mealId/ingredients'
function create(req, res) {
  db.Meal.findById(req.params.mealId, function(err, foundMeal) {
    console.log(req.body);
    var newIngredient = new db.Ingredient(req.body);
    foundMeal.ingredient.push(newIngredient);
    foundMeal.save(function(err, savedMeal) {
      console.log('newIngredient created: ', newIngredient);
      res.json(newIngredient);  // responding with just the song, some APIs may respond with the parent object (Album in this case)
    });
  });
}


// export public methods here
module.exports = {
    index: index,
    create: create
};
