var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Meal = require('./meal');
var Ingredient = require('./ingredient');
var MealIngredient = require('./mealIngredient');

var IngredientSchema = new Schema({
  name: String,
  carbohydrates: Number,
  fats: Number,
  protein: Number
});

var Ingredient = mongoose.model('Ingredient', IngredientSchema);

module.exports = Ingredient;
