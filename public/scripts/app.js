$(document).ready(function() {
    console.log('app.js loaded!');

    $(".dropdown-button").dropdown();

    $.get('/api/meals').success(function(meals) {
        meals.forEach(function(meals) {
            // res.json(meals);
        });
    });


});
