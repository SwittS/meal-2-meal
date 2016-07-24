var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/meal-2-meal" );

module.exports.Ingredient = require('./ingredient.js');
module.exports.Meal = require('./meal.js');
