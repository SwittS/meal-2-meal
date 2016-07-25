$(document).ready(function() {
    console.log('Sanity Check: Let\'s Party!');

    $('.parallax').parallax();
    $('select').material_select();

    $.get('/api/meals').success(function(meals) {
        meals.forEach(function(meals) {
        });
    });

});
