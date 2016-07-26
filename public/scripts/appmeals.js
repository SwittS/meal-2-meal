$(document).ready(function() {
    console.log('Sanity Check: Let\'s Party!');

    $('.parallax').parallax();

    $.get('/api/meals').success(function(meals) {
        meals.forEach(function(meals) {
            renderMeal(meals);
        });



    });
});

function renderMeal(meals) {
    var mealHtml = $('#meal-template').html();
    var mealTemplate = Handlebars.compile(mealHtml);
    var html = mealTemplate(meals);
    $('#mealTarget').append(html);
}
