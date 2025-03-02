// Navigation js

let btn = document.querySelector(".nav-button");
btn.addEventListener("click", function () {
    document.querySelector(".nav-links-block").classList.toggle("button-active");
    document.querySelector(".nav-button").classList.toggle("active");
    // alert("check");
})

// Scroll to top

let mybutton = document.getElementById("scrolltop");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
});

mybutton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});