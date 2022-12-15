$(document).ready(function () {
  photo = $("#image").val();
  submit = $("#submit-button");
  description = $("#description").val();
  user_id = $("#loggedInUser").attr("data-user");
  likes = 0;

  const newPost = async () => {
    description = $("#description").val();
    photo = $("#image").val();
    console.log(photo);
    console.log(description);
    const response = await fetch("api/posts/", {
      method: "POST",
      body: JSON.stringify({ user_id, photo, description, likes }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("posted!");
      document.location.replace("/");
    } else {
      console.log("No post");
    }
  };

  submit.click(() => {
    newPost();
  });
});
