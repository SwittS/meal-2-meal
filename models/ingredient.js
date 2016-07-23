var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
    Meal = require('./meal');

var IngredientSchema = new Schema({
  ingredientName: String,
  mealName: {type: Schema.Types.ObjectId, ref: 'Meal'},
  carbohydrates: Number,
  fats: Number,
  protein: Number
});

var Ingredient = mongoose.model('Ingredient', IngredientSchema);

module.exports = Ingredient;
