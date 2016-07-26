document.documentElement.className = 'js';

$(document).ready(function() {
    console.log('Sanity Check: Let\'s Party!');

    $.get('/api/meals').success(function(meals) {
        meals.forEach(function(meals) {
          renderMeal(meals);
          renderMeal2(meals);
        });

    $('.parallax').parallax();
    });




    $('#mealCreation').on('submit', function(e) {
        e.preventDefault();
        var formData = $(this).serialize();
        console.log('formData', formData);
        $.post('/api/meals', formData, function(meals) {
          console.log('meal after POST', meals);
        });
        $(this).trigger("reset");
      });

    $('.createMeal').click(function handleCreateMealClick() {
          if($("#mealCreation").is(":visible")){
              $("#mealCreation").hide();
          } else {
              $("#mealCreation").show();
          }
          return false;
      });


    $('.viewAll').click(function handleUpdateMealClick() {
      console.log('view all meals was clicked!');
    });

    $('.deleteMeal').click(function handleDeleteMealClick() {
      console.log('delete a meal was clicked!');
    });

    $('.compareMeal').click(function handleCompareMealClick() {
      console.log('compare a meal was clicked!');
    });
});

function renderMeal(meals) {
  var mealHtml = $('#meal-template').html();
  var mealTemplate = Handlebars.compile(mealHtml);
  var html = mealTemplate(meals);
  $('#mealTarget').append(html);
  $('select').material_select();
}

function renderMeal2(meals) {
  var mealHtml = $('#meal-template').html();
  var mealTemplate = Handlebars.compile(mealHtml);
  var html = mealTemplate(meals);
  $('#mealTarget2').append(html);
  $('select').material_select();
}
