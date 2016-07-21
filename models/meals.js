var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MealSchema = new Schema({
  name: String,
  songs: [ Ingredient.schema ]

});

var MealSchema = mongoose.model('Meal', MealSchema);

module.exports = Meal;
