$(document).ready(function() {
    $.get("/grav", {name:'michelle@michellefunk.com'}, function(gravatarUrl) {
        $.ajax({
                type: 'GET',
                dataType: 'jsonp',
                crossDomain: true,
                url: gravatarUrl,
                complete: function() {
                    console.log("Ajax call complete")
                },
                success: function(data) {
                    console.log(data)
                    $(".gravatar").append("<img src='" + data.entry[0].photos[0].value + "?s=150&d=identicon&r=G'><br>");
                    $(".gravatar").append(data.entry[0].displayName + "<br>");
                    $(".gravatar").append(data.entry[0].currentLocation + "<br>");
                    $(".gravatar").append(data.entry[0].aboutMe);
                },
                error: function(xhr, status) {
                    console.log("Error : ", xhr, " ", status);
                }
          /*  type: 'GET',
            url: gravatarUrl, //this is just requesting the url, not an API. Some firewalls block this.
            crossDomain: true,
            dataType: 'text',
            complete: function () {
                console.log("Ajax call complete")
            },
            success: function (data) {
                console.log(data)
            },
            error: function (xhr, status) {
                console.log("Error : ", xhr, " ", status);
            }*/
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