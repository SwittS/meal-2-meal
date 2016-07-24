var db = require('../models');

function index(req, res){
  db.Ingredient.find({}, function(err, ingredient){
    if(err) {
      res.send(err);
    }
    res.json(ingredient);
  });
}

function show(req, res) {
  db.Ingredient.findById(req.params.ingredientsId, function (err, foundIngredient) {
    if (err) {
      console.log('mealsIngredients.show error', err);
    }
    console.log('mealsIngredients.show responding with', foundIngredient);
    res.json(foundIngredient);
  });
}

function create(req, res){
  var mealId = req.params.mealId;
  var newIngredient = new db.Ingredient({
    food: req.body.food,
    carbohydrates: req.body.carbohydrates,
    fats: req.body.fats,
    protein: req.body.protein
  });
  db.Meal.findById(mealId, function(err, city){
    if(err) {
      return console.log(err);
    }
    console.log(mealId + "we found it");
    newIngredient.meal = meal;
    newIngredient.save(function(err, ingredient){
      if (err) {
        return console.log('save error: ' + err);
      }
      console.log('saved ', ingredient.meal);
      res.json(ingredient);
    });
  });
}

function update(req, res) {
  console.log('updating with data', req.body);
  var updateData = req.body;
  var id = req.params.ingredientsId;
  console.log(id);
  db.Ingredient.findByIdAndUpdate(id, updateData, {new: true}, function (err, savedUpdatedIngredient){
    if (err) {
      console.log('ingredientToUpdate error', err);
    }
    console.log(savedUpdatedIngredient);
    res.json(savedUpdatedIngredient);
  });
}

function destroy(req, res){
  db.Ingredient.findOneAndRemove({_id: req.params.ingredientsId}, function(err, ingredientToDelete){
    if (err) {
      console.log(err, "Error while deleting");
    }
  });
}

function ingredientsByMealId(req,res){
  var mealId = req.params.mealId;
  db.Meal.findById(mealId, function(err, meal){
    if (err) {
      console.log(err);
    }
    db.Ingredient.find({meal: meal}, function (err, mealsIngredients){
      if (err){
        console.log(mealsIngredients + "test");
      }
      res.json(mealsIngredients);
    });
  });
}

// export public methods here
module.exports = {
    index: index,
    create: create,
    show: show,
    destroy: destroy,
    update: update,
    ingredientsByMealId: ingredientsByMealId
};
