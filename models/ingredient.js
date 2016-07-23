var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
    Meal = require('./meal');

var IngredientSchema = new Schema({
  ingredientName: String,
  carbohydrates: Number,
  fats: Number,
  protein: Number,
  meal: {type: Schema.Types.ObjectId, ref: 'Meal'}
});

var Ingredient = mongoose.model('Ingredient', IngredientSchema);

module.exports = Ingredient;
