var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var MealSchema = new Schema({
    name: String,
    ingredients: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Ingredient'
      }
    ]
});

var Meal = mongoose.model('Meal', MealSchema);

module.exports = Meal;
