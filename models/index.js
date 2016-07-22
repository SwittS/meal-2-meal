var mongoose = require("mongoose");

var Meal = require('./meal');
var Ingredient = require('./ingredient');
var MealIngredient = require('./mealIngredient');

module.exports.Meal = Meal;
module.exports.Ingredient = Ingredient;
module.exports.MealIngredient = MealIngredient;

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/meal-2-meal" );
