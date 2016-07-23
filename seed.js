var db = require("./models");

var ingredientList = [{
    ingredientName: 'chicken breast',
    mealName: '8oz Chicken Breast and 200g Rice',
    carbohydrates: 0,
    fats: 2,
    protein: 48
}, {
    ingredientName: 'rice',
    mealName: '8oz Chicken Breast and 200g Rice',
    carbohydrates: 57,
    fats: 0,
    protein: 5
}, {
    ingredientName: 'ribeye steak',
    mealName: '8oz Ribeye Steak and 200g Yukon Potatoes',
    carbohydrates: 0,
    fats: 52,
    protein: 48
}, {
    ingredientName: 'yukon potato',
    mealName: '8oz Ribeye Steak and 200g Yukon Potatoes',
    carbohydrates: 35,
    fats: 0,
    protein: 4
}];

var mealList = [{
    name: '8oz Chicken Breast and 200g Rice'
}, {
    name: '8oz Ribeye Steak and 200g Yukon Potatoes'
}];

db.Meal.remove({}, function(err, meals) {
    console.log('removed all authors');
    db.Meal.create(mealList, function(err, meals) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('recreated all meals');
        console.log("created", meals.length, "meals");
    });
});

db.Ingredient.remove({}, function(err, ingredients) {
    console.log('removed all ingredients');
    ingredientList.forEach(function(ingredientData) {
        var ingredient = new db.Ingredient({
            ingredientName: ingredientData.ingredientName,
            carbohydrates: ingredientData.carbohydrates,
            fats: ingredientData.fats,
            protein: ingredientData.protein
        });
        db.Meal.findOne({name: ingredientData.mealName}, function (err, foundMeal) {
         console.log('found meal ' + foundMeal.name + ' for meal ' + ingredient.ingredientName);
         if (err) {
           console.log(err);
           return;
         }
       });
     });
   });





// populate each meals ingredients list
// mealList.forEach(function(meal) {
//     meal.ingredients = sampleIngredients;
// });
//
// // remove all records that match {} -- which means remove ALL records
// db.Meal.remove({}, function(err, meals) {
//     if (err) {
//         console.log('Error occurred in remove', err);
//     } else {
//         console.log('removed all meals');
//
//         // create new records based on the array
//         db.Meal.create(mealList, function(err, meals) {
//             if (err) {
//                 return console.log('err', err);
//             }
//             console.log("created", meals.length, "meals");
//             // process.exit();
//         });
//     }
// });
