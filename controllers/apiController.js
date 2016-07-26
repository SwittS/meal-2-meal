function index(req, res) {
    res.json({
        message: "Welcome to Meal 2 Meal!",
        documentation_url: "https://github.com/SwittS/meal-2-meal",
        base_url: "http://meal2meal.herokuapp.com",
        endpoints: [{
            method: "GET",
            path: "/api",
            description: "Describes available endpoints"
        }, {
            method: "GET",
            path: "/api/meals",
            description: "Displays all avaiable meals"
        }, {
            method: "GET",
            path: "/api/meals/:mealId",
            description: "Display a single meal from its id"
        }, {
            method: "POST",
            path: "/api/meals",
            description: "Ability to create a meal"
        }, {
            method: "DELETE",
            path: "/api/meals/:mealId",
            description: "Ability to delete a meal from its id"
        }, {
            method: "PUT",
            path: "/api/meals/:mealId",
            description: "Ability to update a meal from its id"
        }, {
            method: "GET",
            path: "/api/ingredients",
            description: "Display all available ingredients"
        }, {
            method: "GET",
            path: "/api/ingredients/:ingredientId",
            description: "Display a single ingredient from its id"
        }, {
            method: "POST",
            path: "/api/ingredients/",
            description: "Ability to create an ingredient"
        }, {
            method: "DELETE",
            path: "/api/ingredients/:ingredientId",
            description: "Ability to delete an ingredient by id"
        }, {
            method: "GET",
            path: "/api/meals/:mealId/ingredients",
            description: "Display ingredients by meal id"
        }]
    });
}

module.exports.index = index;
