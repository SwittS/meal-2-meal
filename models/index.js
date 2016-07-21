var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/meal-2-meal");

var Meal = require('./meal');
// var Ingredient = require('./ingredient');

module.exports.Meal = Meal;
// module.exports.Ingredient = Ingredient;
