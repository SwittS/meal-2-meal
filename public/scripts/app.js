console.log('Sanity Check: Let\'s Party!');

$(document).ready(function() {

    $('.parallax').parallax();
    $('select').material_select();

    function renderMeals(meals) {
        var mealHtml = $('#t').html();
        var mealTemplate = Handlebars.compile(mealHtml);
        var html = mealTemplate(meal);
        $('#t').prepend(html);
    }

    function onSuccess(json) {
        console.log('FOUND ALL MEALS');
        json.forEach(function(meals) {
            renderMeals(meals);
            console.log("SUCCESS rendered the following meals to the page:" + meals);
        });
    }
    $.get('/api/meals').success(function(meals) {
        meals.forEach(function(meals) {
            // res.json(meals);
        });
    });

});
