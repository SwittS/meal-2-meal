$(document).ready(function() {
    console.log('Sanity Check: Let\'s Party!');

    $('.parallax').parallax();

    $.get('/api/meals').success(function(meals) {
        meals.forEach(function(meals) {
            renderMeal(meals);
        });
    });

    $.get('/api/ingredients').success(function(ingredients) {
        ingredients.forEach(function(ingredients) {
            renderIngredient(ingredients);
        });
    });

    $('#mealTarget').on('click', '.viewAll', handleViewAllClick);

    $('#mealTarget').on('click', '.deleteMeal', handleDeleteMealClick);

});

function renderMeal(meals) {
    var mealHtml = $('#meal-template').html();
    var mealTemplate = Handlebars.compile(mealHtml);
    var html = mealTemplate(meals);
    $('#mealTarget').append(html);
}

function renderIngredient(ingredients) {
    var ingedientHtml = $('#ingredient-template').html();
    var ingredientTemplate = Handlebars.compile(ingredientHtml);
    var html = ingredientTemplate(ingredients);
    $('#modal1').append(html);
}

function handleDeleteMealClick(e) {
    var mealId = $(this).parents('.meal').data('meal-id');
    console.log('someone wants to delete meal id=' + mealId);
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

function handleViewAllClick(e) {
    console.log('view all clicked!');
    var currentMealId = $(this).closest('.meal').data('meal-id');
    console.log('id', currentMealId);
    $('.modal-trigger').data('meal-id', currentMealId);
    $('#modal1').openModal();
}
