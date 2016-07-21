var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Ingredient = require('./ingredient');

var MealSchema = new Schema({
  name: String,
  ingredients: [ Ingredient.schema ]
});

var Meal = mongoose.model('Meal', MealSchema);

module.exports = Meal;
