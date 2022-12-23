$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

const w = document.documentElement.clientWidth;

function hideButton() {
  const buttonUp = document.getElementsByClassName("button-up")[0];
  const width = document.documentElement.clientWidth;
  if (width >= 1200) {
    buttonUp.style.display = "block";
  } else {
    buttonUp.style.display = "none";
  }
}

window.addEventListener("load", function (event) {
  hideButton();
});

window.addEventListener("resize", function (event) {
  hideButton();
});

function topFunction() {
  document.body.scrollTop = 0;
}

$("#form").submit(function (event) {
  event.preventDefault();
});
