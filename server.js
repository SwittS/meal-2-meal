
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./models');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/vendor', express.static(__dirname + '/bower_components'));

var controllers = require('./controllers');

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

/*
 * JSON API Endpoints
 */

// API

app.get('/api', controllers.api.index);

// MEALS

app.get('/api/meals', controllers.meals.index);

app.get('/api/meals/:mealId', controllers.meals.show);

app.post('/api/meals', controllers.meals.create);

app.delete('/api/meals/:mealId', controllers.meals.destroy);

app.put('/api/meals/:mealId', controllers.meals.update);

// INGREDIENTS

app.get('/api/ingredients', controllers.mealsIngredients.index);

app.get('/api/ingredients/:ingredientId', controllers.mealsIngredients.show);

app.post('/api/ingredients', controllers.mealsIngredients.create);

app.delete('/api/ingredients/:ingredientId', controllers.mealsIngredients.destroy);

// GET INGREDIENT BY MEAL ID

app.get('/api/meals/:mealId/ingredients', controllers.mealsIngredients.ingredientsByMealId);

app.get('/meals', function(req, res) {
    res.sendFile(__dirname + '/views/meals.html');
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function() {
    console.log('Express server is running on http://localhost:3000/');
});
