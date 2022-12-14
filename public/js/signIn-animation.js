emailForm = $("#email");
passwordForm = $("#password");
usernameForm = $("#username");
lightDark = $("#colorModeSwitch");
button = $(".submitButton");
root = $(":root");
body = $("body");

//toggles left borders
emailForm.click(() => {
  passwordForm.removeClass("selectedForm");
  usernameForm.removeClass("selectedForm");
  emailForm.addClass("selectedForm");
});

passwordForm.click(() => {
  emailForm.removeClass("selectedForm");
  usernameForm.removeClass("selectedForm");
  passwordForm.addClass("selectedForm");
});

usernameForm.click(() => {
  emailForm.removeClass("selectedForm");
  passwordForm.removeClass("selectedForm");
  usernameForm.addClass("selectedForm");
});
