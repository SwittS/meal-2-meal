var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Meal = require('./meal.js');

var IngredientSchema = new Schema({
  food: String,
  meal: { type: Schema.Types.ObjectId, ref: 'Meal' },
  carbohydrates: Number,
  fats: Number,
  protein: Number
});

var Ingredient = mongoose.model('Ingredient', IngredientSchema);

module.exports = Ingredient;
