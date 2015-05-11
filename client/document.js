$(document).ready(function() {
    $.get("/grav", {name:'michelle@michellefunk.com'}, function(url) {
        console.log(url);
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
