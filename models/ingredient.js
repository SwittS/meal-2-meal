var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Meal = require('./meal.js');

var IngredientSchema = new Schema({
  meal: {
    type: Schema.Types.ObjectId,
    ref: 'Meal'
  },
  food: String,
  carbohydrates: Number,
  fats: Number,
  protein: Number
});

var Ingredient = mongoose.model('Ingredient', IngredientSchema);

module.exports = Ingredient;
