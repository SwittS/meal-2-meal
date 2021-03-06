$(document).ready(function() {
    console.log('Sanity Check: Let\'s Party!');


    $.get('/api/meals').success(function(meals) {
        meals.forEach(function(meals) {
            renderMeal(meals);
        });
    });

    $('.parallax').parallax();


    $('#mealTarget').on('click', '.viewAll', handleViewAllClick);

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
    $.ajax({
        url: '/api/meals/' + currentMealId + '/ingredients',
        method: "GET",
        success: handleViewAllSuccess
    });
    $('#modal1').openModal();
}

function handleViewAllSuccess(ingredients) {
    console.log(ingredients);
    $('.ingredientL').remove();
    ingredients.forEach(function(ingredient) {
        renderIngredient(ingredient);
    });
}

function renderIngredient(ingredients) {
    var ingredientHtml = $('#ingredient-template').html();
    var ingredientTemplate = Handlebars.compile(ingredientHtml);
    var html = ingredientTemplate(ingredients);
    $('.modal-content').append(html);
}
