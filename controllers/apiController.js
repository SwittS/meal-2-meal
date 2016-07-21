function index(req, res) {
  res.json({
    message: "Welcome to Meal 2 Meal!",
    documentation_url: "https://github.com/SwittS/meal-2-meal",
    base_url: "http://meal2meal.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

module.exports.index = index;
