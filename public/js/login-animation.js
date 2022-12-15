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

anime({
  targets: '#paw1',
  translateX: 450,
  direction: 'alternate',
  loop: false,
  easing: 'steps(4)',
  delay: 200,
  duration: 3000,
})
anime({
  targets: '#paw2',
  translateX: 450,
  direction: 'alternate',
  loop: false,
  easing: 'steps(4)',
  delay: 100,
  duration: 3000,
})
anime({
  targets: '#paw3',
  translateX: 450,
  direction: 'alternate',
  loop: false,
  easing: 'steps(4)',
  delay: 400,
  duration: 3000,
})
anime({
  targets: '#paw4',
  translateX: 450,
  direction: 'alternate',
  loop: false,
  easing: 'steps(4)',
  delay: 300,
  duration: 3000
})
