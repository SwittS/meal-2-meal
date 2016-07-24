var db = require('../models');

// GET all ingredients by mealId
function index(req, res) {
    var mealId = req.params.mealId;
    db.Meal.findById(mealId, function(err, foundMeal){
      if (err) {
        console.log(err);
      }
      db.Ingredient.find({meal: meal}, function (err, foundIngredient){
        if (err){
          console.log(foundIngredient + "test");
        }
        res.json(foundIngredient);
      });
    });
  }
// }
// // }
// POST '/api/meals/:mealId/ingredients'
// function create(req, res) {
//   db.Meal.findById(req.params.mealId, function(err, foundMeal) {
//     console.log(req.body);
//     var newIngredient = new db.Ingredient(req.body);
//     foundMeal.ingredient.push(newIngredient);
//     foundMeal.save(function(err, savedMeal) {
//       console.log('newIngredient created: ', newIngredient);
//       res.json(newIngredient);  // responding with just the song, some APIs may respond with the parent object (Album in this case)
//     });
//   });
// }


// export public methods here
module.exports = {
    index: index
// create: create
};
