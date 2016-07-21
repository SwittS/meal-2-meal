var db = require('../models');

// GET /api/meals
function index(req, res) {
  db.Meal.find({}, function(err, allMeals) {
    res.json(allMeals);
  });
}












// export public methods here
module.exports = {
  index: index
  // create: create,
  // show: show
  // destroy: destroy,
  // update: update
};
