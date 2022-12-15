$(document).ready(function () {
  menuButton = $("#menuButton");
  menu = $("#menu");
  body = $("body");

  menuButton.click(() => {
    menu.toggleClass("hide");
    body.toggleClass("noScroll");
  });
});
