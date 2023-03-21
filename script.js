window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.classList.add("nav-colored");
    navbar.classList.remove("nav-transparent");
    
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("nav-transparent");
    navbar.classList.remove("nav-colored");


  }
};