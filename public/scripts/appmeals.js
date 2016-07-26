$(document).ready(function() {
    console.log('Sanity Check: Let\'s Party!');

    $('.parallax').parallax();

    $.get('/api/meals').success(function(meals) {
        meals.forEach(function(meals) {
            renderMeal(meals);
        });
      });


            $('.modal-trigger').leanModal();


            $('#mealTarget').on('click', '.deleteMeal', handleDeleteMealClick);

    });



function renderMeal(meals) {
    var mealHtml = $('#meal-template').html();
    var mealTemplate = Handlebars.compile(mealHtml);
    var html = mealTemplate(meals);
    $('#mealTarget').append(html);
}

function handleDeleteMealClick(e) {
  var mealId = $(this).parents('.meal').data('meal-id');
  console.log('someone wants to delete meal id=' + mealId );
  $.ajax({
    url: '/api/meals/' + mealId,
    method: 'DELETE',
    success: handleDeleteMealSuccess
  });
}

function handleDeleteMealSuccess(data) {
  var deletedMealId = data._id;
  console.log('removing the following meal from the page:', deletedMealId);
  $('div[data-meal-id=' + deletedMealId + ']').remove();
}