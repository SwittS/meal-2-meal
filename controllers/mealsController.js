var db = require('../models');

// GET /api/meals
function index(req, res) {
  db.Meal.find({}, function(err, allMeals) {
    res.json(allMeals);
  });
}

function create(req, res) {
  console.log('body', req.body);
  var ingredients = req.body.ingredients.split(',').map(function(item) { return item.trim(); } );
  req.body.ingredients = ingredients;
  db.Meal.create(req.body, function(err, meal) {
    if (err) { console.log('error', err); }
    console.log(meal);
    console.log(ingredients);
    res.json(meal);
  });
}

function show(req, res) {
  db.Meal.findById(req.params.mealId, function(err, foundMeal) {
    if(err) { console.log('mealsController.show error', err); }
    console.log('mealsController.show responding with', foundMeal);
    res.json(foundMeal);
  });
}

function destroy(req, res) {
  db.Meal.findOneAndRemove({_id: req.params.mealId }, function(err, foundMeal) {
    if(err) { console.log('mealsController.show error', err); }
    console.log('Meal Entry Deleted', foundMeal);
    res.json(foundMeal);
  });
}











// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy
  // update: update
};
