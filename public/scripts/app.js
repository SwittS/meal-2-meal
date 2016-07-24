$(document).ready(function() {
    console.log('app.js loaded!');

    $('.parallax').parallax();
    
    $.get('/api/meals').success(function(meals) {
        meals.forEach(function(meals) {
            // res.json(meals);
        });
    });


});
