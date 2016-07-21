var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/3000");

var Meal = require('./meal');
// var Ingredient = require('./ingredient');

module.exports.Meal = Meal;
// module.exports.Ingredient = Ingredient;
