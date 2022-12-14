emailForm = $("#email");
passwordForm = $("#password");
lightDark = $("#colorModeSwitch");
button = $(".submitButton");
root = $(":root");
body = $("body");
//toggles left borders
emailForm.click(() => {
  passwordForm.removeClass("selectedForm");
  emailForm.addClass("selectedForm");
});

passwordForm.click(() => {
  emailForm.removeClass("selectedForm");
  passwordForm.addClass("selectedForm");
});

lightDark.click(() => {
  root.css("--main-bg-color", "#8990895c");
  root.css("--light-bg-color", "#d3d3d369");
  root.css("--light-accent-color", "black");
  root.css("--accent-color", "#012c01");
  root.css("--font-color", "black");
  button.css("color", "white");
  body.css(
    "background-image",
    "url(https://images.unsplash.com/photo-1531257114315-24a694751517?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"
  );
  body.css("background-position", "bottom");
  body.css("background-size", "100%");
});
