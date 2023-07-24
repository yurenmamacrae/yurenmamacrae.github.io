/*==================================================================================
    Custom JS (Any custom js code you want to apply should be defined here).
====================================================================================*/

function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var subject = document.forms["myForm"]["subject"].value;
    var comments = document.forms["myForm"]["message"].value;
    document.getElementById("error-msg").style.opacity = 0;
    document.getElementById('error-msg').innerHTML = "";
    if (name == "" || name == null) {
      document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Name*</div>";
      fadeIn();
      return false;
    }
    if (email == "" || email == null) {
      document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Email*</div>";
      fadeIn();
      return false;
    }
    if (subject == "" || subject == null) {
      document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Subject*</div>";
      fadeIn();
      return false;
    }
    if (comments == "" || comments == null) {
      document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Comments*</div>";
      fadeIn();
      return false;
    }
  
    document.getElementById("simple-msg").innerHTML = "<div class='alert alert-success'>Message Submitted!</div>";
    $(".name").val('');
    $(".email").val('');
    $(".subject").val('');
    $(".message").val('');
    $(".phone").val('');
    return false;
  }
  function validateFormSubscribe() {
    var name = document.forms["myFormSubscribe"]["subscribe"].value;
    document.getElementById("error-msg-subscribe").style.opacity = 1;
    document.getElementById('error-msg-subscribe').innerHTML = "";
    if (name == "" || name == null) {
      document.getElementById('error-msg-subscribe').innerHTML = "<div class='alert alert-warning'>*Please enter a Email*</div>";
      fadeIn();
      return false;
    }
    document.getElementById("simple-msg-subscribe").innerHTML = "<div class='' style='color:#fff'>Message Submitted!</div>";
    return false;
  }
  function fadeIn() {
    var fade = document.getElementById("error-msg");
    var opacity = 0;
    var intervalID = setInterval(function () {
      if (opacity < 1) {
        opacity = opacity + 0.5;
        fade.style.opacity = opacity;
      } else {
        clearInterval(intervalID);
      }
    }, 200);
  }