var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Meal = require('./meal');
var Ingredient = require('./ingredient');

var MealIngredientSchema = new Schema({
  _meal: {type: Schema.Types.ObjectId,ref: 'Meal'},
  _ingredient: {type: Schema.Types.ObjectId, ref: 'Ingredient'}
});

var MealIngredient = mongoose.model('MealIngredient', MealIngredientSchema);

module.exports = MealIngredient;
