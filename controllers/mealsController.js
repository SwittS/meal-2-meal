var db = require('../models');

function index(req, res) {
    db.Meal.find()
    .populate('ingredient')
    .exec(function(err, meals) {
      if (err) { return console.log("index error: " + err); }
      res.json(meals);
  });
}

function create(req, res) {
    console.log('body', req.body);
    db.Meal.create(req.body, function(err, meal) {
        if (err) {
            console.log('error', err);
        }
        console.log("This is the meal: ", meal);
        res.json(meal);
    });
}

function show(req, res) {
    db.Meal.findById(req.params.mealId, function(err, foundMeal) {
        if (err) {
            console.log('mealsController.show error', err);
        }
        console.log('mealsController.show responding with', foundMeal);
        res.json(foundMeal);
    });
}

function destroy(req, res) {
    db.Meal.findOneAndRemove({
        _id: req.params.mealId
    }, function(err, foundMeal) {
        if (err) {
            console.log('mealsController.show error', err);
        }
        console.log('Meal entry was succesfully deleted!', foundMeal);
        res.json(foundMeal);
    });
}

function update(req, res) {
    console.log('updating with data', req.body);
    db.Meal.findById(req.params.mealId, function(err, foundMeal) {
        if (err) {
            console.log('mealsController.update error', err);
        }
        foundMeal.name = req.body.name;
        foundMeal.save(function(err, savedMeal) {
            if (err) {
                console.log('Sorry, the entry did not update correctly!');
            }
            res.json(savedMeal);
        });
    });
}

// export public methods here
module.exports = {
    index: index,
    create: create,
    show: show,
    destroy: destroy,
    update: update
};
