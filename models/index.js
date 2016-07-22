var mongoose = require("mongoose");

var Meal = require('./meal');
// var Ingredient = require('./ingredient');

module.exports.Meal = Meal;
// module.exports.Ingredient = Ingredient;

mongoose.connect( process.env.MONGODB_URI || "monggodb://localhost/meal-2-meal" );
