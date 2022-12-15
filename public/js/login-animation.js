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

