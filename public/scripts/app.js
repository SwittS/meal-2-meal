$(document).ready(function() {
    console.log('Sanity Check: Let\'s Party!');

    $.get('/api/meals').success(function(meals) {
        meals.forEach(function(meals) {
          renderMeal(meals);
          renderMeal2(meals);
        });

    $('.parallax').parallax();
    // $('select').material_select();


    });

});

function renderMeal(meals) {
  console.log('rendering meal', meals);
  var mealHtml = $('#meal-template').html();
  var mealTemplate = Handlebars.compile(mealHtml);
  var html = mealTemplate(meals);
  $('#mealTarget').append(html);
  $('select').material_select();
}

function renderMeal2(meals) {
  console.log('rendering meal', meals);
  var mealHtml = $('#meal-template').html();
  var mealTemplate = Handlebars.compile(mealHtml);
  var html = mealTemplate(meals);
  $('#mealTarget2').append(html);
  $('select').material_select();
}
