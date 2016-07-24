var db = require("./models");

var ingredients_list = [
  {
    food: 'chicken breast',
    meal: '8oz Chicken Breast and 200g Rice',
    carbohydrates: 0,
    fats: 2,
    protein: 48
  },
  {
    food: 'rice',
    meal: '8oz Chicken Breast and 200g Rice',
    carbohydrates: 57,
    fats: 0,
    protein: 5
  },
  {
    food: 'ribeye steak',
    meal: '8oz Ribeye Steak and 200g Yukon Potatoes',
    carbohydrates: 0,
    fats: 52,
    protein: 48
  },
  {
    food: 'yukon potato',
    meal: '8oz Ribeye Steak and 200g Yukon Potatoes',
    carbohydrates: 35,
    fats: 0,
    protein: 4
  }
];

var meals_list = [
  {
    name: '8oz Chicken Breast and 200g Rice',
  },
  {
    name: '8oz Ribeye Steak and 200g Yukon Potatoes',
  }
];

db.Meal.remove({}, function(err, meals) {
    console.log('removed all meals');
    db.Meal.create(meals_list, function(err, meals) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('recreated all meals');
        console.log('created', meals.length, 'meals');

        db.Ingredient.remove({}, function(err, ingredients) {
            console.log('removed all ingredients');
            ingredients_list.forEach(function(ingredientData) {
                var ingredient = new db.Ingredient({
                    food: ingredientData.food,
                    carbohydrates: ingredientData.carbohydrates,
                    fats: ingredientData.fats,
                    protein: ingredientData.protein
                });
                db.Meal.findOne({name: ingredientData.meal}, function (err, foundMeal) {
                    console.log('found meal ' + foundMeal.name + ' which has the ingredient ' + ingredient.food);
                    if (err) {
                        console.log(err);
                        return;
                    }
                    ingredient.meal = foundMeal;
                    ingredient.save(function(err, savedIngredient) {
                        if (err) {
                            return console.log(err);
                        }
                        console.log('Saved Ingredients for the Meal' + savedIngredient);
                    });
                });
            });
        });

    });
});
