/* Hello developer friend! 
 * You may be shocked to learn that this is somewhat of a legacy codebase, based
 * on a solo project from my bootcamp days (2015).
 * There was a time I was tempted to pull this code into an edgier framework 
 * rather than using jQuery, and certainly it lacks many modern amenities, 
 * but for my simple purposes here, despite being fairly hackish, it holds up all right.
*/ 
$(document).ready(function() {
  $.get("/grav", {name:'michelle@michellefunk.com'}, function(gravatarUrl) {
    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      crossDomain: true,
      url: gravatarUrl,
      success: function(data) {
        var profile = data.entry[0];
        $(".gravatar").append("<a href='" + profile.profileUrl + "'> " +
        "<img class='img-bordered img-responsive' src='" + profile.photos[0].value + "?s=150&d=identicon&r=G'></a>");
        $(".gravatar").append("<h4 class='white'>" + profile.displayName + "<br></h5>");
        $(".gravatar").append("<h5><em>" + profile.currentLocation + "<br></em></h5>");
        $(".gravatar").append("<h5>" + profile.aboutMe + "</h5>");
      },
      error: function(xhr, status) {
        console.log("Error : ", xhr, " ", status);
      }
    });
  });

  $.get("/assets/scripts/profile.html", function(profile) {
    $(".textArea").html(profile);
    setHeight();
  });

  $("#profile").on("click", function() {
    $.get("/assets/scripts/profile.html", function(profile){
      $(".textArea").html(profile);
      setHeight();
    });
  });

  $("#employment").on("click", function() {
    $.get("/assets/scripts/employment.html", function(employment){
      $(".textArea").html(employment);
      setHeight();
    });
  });

  $("#education").on("click", function() {
    $.get("/assets/scripts/education.html", function(education){
      $(".textArea").html(education);
      setHeight();
    });
  });

  $("#community").on("click", function() {
    $.get("/assets/scripts/community.html", function(community){
      $(".textArea").html(community);
      setHeight();
    });
  });
});

function setHeight(){
  var eHeight = $(".textArea").innerHeight();
  $(".sidebar, .sidebar2").outerHeight(eHeight);
}
