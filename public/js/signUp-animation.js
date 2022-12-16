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

const randomPfp = () => {
  const profile_pics = [
    "../images/profile_pictures/Cat_red.jpg",
    "../images/profile_pictures/dog_red.jpg",
    "../images/profile_pictures/Jack_russel_pink.jpg",
    "../images/profile_pictures/pug_yellow.jpg",
    "../images/profile_pictures/Samoyed_pink.jpg",
    "../images/profile_pictures/pfp-1.jpg",
    "../images/profile_pictures/pfp-2.jpg",
    "../images/profile_pictures/pfp-3.jpg",
    "../images/profile_pictures/pfp-4.jpg",
  ];
  const index = Math.floor(Math.random() * profile_pics.length);
  console.log(index);
  return profile_pics[index];
};

const newUser = async () => {
  const username = usernameForm.val();
  const email = emailForm.val();
  const password = passwordForm.val();
  const pet = "Pet";
  const profile_picture = randomPfp();

  console.log({ username, email, password, profile_picture, pet });
  response = await fetch("api/users/signup/", {
    method: "POST",
    body: JSON.stringify({ username, email, password, profile_picture, pet }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    console.log("signed up!");
    //logout
    await fetch("api/users/logout/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    //login
    await fetch("api/users/login/", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    document.location.replace("/");
  } else {
    console.log("Nope, what were you thinking");
  }
};

$(document).ready(function () {
  submit = $("#submit");
  submit.click(newUser);
});
