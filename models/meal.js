var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
// var Ingredient = require('./ingredient.js');

var MealSchema = new Schema({
    name: String
    // ingredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }]
});

var Meal = mongoose.model('Meal', MealSchema);

module.exports = Meal;
