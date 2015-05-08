$(document).ready(function() {
    $("#profile").on("click", function() {
        $.get("/assets/scripts/profile.html", function(data){
            console.log(data);
            $(".mainContainer").html(data);
        });
    });

    $("#employment").on("click", function() {
        $.get("/assets/scripts/employment.html", function(data){
            console.log(data);
            $(".mainContainer").html(data);
        });
    });

    $("#education").on("click", function() {
        $.get("/assets/scripts/education.html", function(data){
            console.log(data);
            $(".mainContainer").html(data);
        });
    });
});
