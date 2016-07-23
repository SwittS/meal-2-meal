var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/meal-2-meal" );

var Meal = require('./meal.js');
var Ingredient = require('./ingredient.js');

module.exports.Meal = Meal;
module.exports.Ingredient = Ingredient;
