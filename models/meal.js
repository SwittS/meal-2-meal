var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var MealSchema = new Schema({
    name: String
});

var Meal = mongoose.model('Meal', MealSchema);

module.exports = Meal;
