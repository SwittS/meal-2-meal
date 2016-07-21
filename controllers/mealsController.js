var db = require('../models');

// GET /api/albums
function index(req, res) {
  db.Meal.find({}, function(err, allMeals) {
    res.json(allMeals);
  });
}
