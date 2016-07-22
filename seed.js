var db = require("./models");

var meals_list = [{
    name: " 8oz Chicken Breast and 200g Rice",
    ingredients: ['chicken breast', 'rice']
}, {
    name: " 8oz Ribeye Steak and 200g Yukon Potatoes",
    ingredients: ['ribeye steak', 'yukon potato']
}];

var ingredients_list = [{
    name: 'chicken breast',
    carbohydrates: 0,
    fats: 2,
    protein: 48
}, {
    name: 'rice',
    carbohydrates: 57,
    fats: 0,
    protein: 5
}, {
    name: 'ribeye steak',
    carbohydrates: 0,
    fats: 52,
    protein: 48
}, {
    name: 'yukon potato',
    carbohydrates: 35,
    fats: 0,
    protein: 4
}];

// remove all records that match {} -- which means remove ALL records
db.Meal.remove({}, function(err, meals) {
    if (err) {
        console.log('Error occurred in remove', err);
    } else {
        console.log('removed all meals');

        // create new records based on the array books_list
        db.Meal.create(meals_list, function(err, meals) {
            if (err) {
                return console.log('err', err);
            }
            console.log("created", meals.length, "meals");
            // process.exit();
        });
    }
});
