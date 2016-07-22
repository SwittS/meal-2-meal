$(document).ready(function() {
    console.log('app.js loaded!');

    $('.parallax').parallax();

    // $('select').material_select();
    // $("select[required]").css({display: "inline-block", height: 0, padding: 0, width: 0});

    $.get('/api/meals').success(function(meals) {
        meals.forEach(function(meals) {
            // res.json(meals);
        });
    });


});
