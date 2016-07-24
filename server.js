// SERVER-SIDE JAVASCRIPT

// require express
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var bodyParser = require('body-parser');
var db = require('./models');
// serve static files from public folder
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
app.get('/api', controllers.api.index);

app.get('/api/meals', controllers.meals.index);

app.get('/api/meals/:mealId', controllers.meals.show);

app.post('/api/meals', controllers.meals.create);

app.delete('/api/meals/:mealId', controllers.meals.destroy);

app.put('/api/meals/:mealId', controllers.meals.update);

// mealsIngredients crud

app.get('/api/meals/:mealId/ingredients', controllers.mealsIngredients.index);
//
// app.post('/api/meals/:mealId/ingredients', controllers.mealsIngredients.create);

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function() {
    console.log('Express server is running on http://localhost:3000/');
});
