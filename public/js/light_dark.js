$(document).ready(function () {
  var flip = document.getElementById("switch");

  currentTheme = localStorage.getItem("getTheme");

  //true if exist
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }

  flip.onclick = () => {
    console.log("flip it");
    let currentTheme = document.documentElement.getAttribute("data-theme");
    let theme = "light";

    if (currentTheme === "light") {
      theme = "dark";
    }

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("getTheme", theme);
  };
});
