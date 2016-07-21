var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
  name: String,
  carbohydrates: Number,
  fats: Number,
  protein: Number
});

var Ingredient = mongoose.model('Ingredient', IngredientSchema);

module.exports = Ingredient;
