$(document).ready(function() {
    $.get("/grav", {name:'michelle@michellefunk.com'}, function(gravatarUrl) {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            crossDomain: true,
            jsonp: 'json_callback',
            url: gravatarUrl,
            complete: function() {
                console.log("Ajax call complete")
            },
            success: function(data) {
                console.log(data)
            },
            error: function(xhr, status) {
                console.log("Error : ", xhr, " ", status);
            }
        });
    });

    $.get("/assets/scripts/profile.html", function(data) {
        $(".textArea").html(data);
        setHeight();
    });

    $("#profile").on("click", function() {
        $.get("/assets/scripts/profile.html", function(data){
            $(".textArea").html(data);
            setHeight();
        });
    });

    $("#employment").on("click", function() {
        $.get("/assets/scripts/employment.html", function(data){
            $(".textArea").html(data);
            setHeight();
        });
    });

    $("#education").on("click", function() {
        $.get("/assets/scripts/education.html", function(data){
            $(".textArea").html(data);
            setHeight();
        });
    });


});

function setHeight(){
    var eHeight = $(".textArea").innerHeight();
    $(".sidebar").outerHeight(eHeight);
}

function displayGravatar() {
    console.log("Will run function")
}