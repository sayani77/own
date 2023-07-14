

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;
window.onscroll = function myFunction(){;
 
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
    