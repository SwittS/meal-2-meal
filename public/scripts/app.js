$(document).ready(function() {
    console.log('Sanity Check: Let\'s Party!');

    $('.parallax').parallax();
    $('select').material_select();

    // compile handlebars template
    // var source = $('#mealChoices-template').html();
    // template = Handlebars.compile(source);

    $.get('/api/meals').success(function(meals) {
        meals.forEach(function(meals) {
            // res.json(meals);
        });
    });

});
