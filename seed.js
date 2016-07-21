var db = require("./models");

var meals_list = [
              {
                name: " 8oz Chicken Breast and 200g Rice",
                ingredients: []
              },
              {
                name: " 8oz Ribeye Steak and 200g Yukon Potatoes",
                ingredients: []
              }
];

// remove all records that match {} -- which means remove ALL records
db.Meal.remove({}, function(err, meals){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all meals');

    // create new records based on the array books_list
    db.Meal.create(meals_list, function(err, meals){
      if (err) { return console.log('err', err); }
      console.log("created", meals.length, "meals");
      process.exit();
    });
  }
});
