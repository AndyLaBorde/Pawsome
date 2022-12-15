$(document).ready(function () {
  data = $("#data");
  submit = $("#submit");
  postData = data.attr("data-post");
  userData = data.attr("data-user");

  const postComment = async () => {
    comment = $("#commentInput").val();
    console.log("post");
    let post_id = postData;
    let user_id = userData;
    let text = comment;
    let response = await fetch("/api/comments/", {
      method: "POST",
      body: JSON.stringify({ post_id, user_id, text }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("Commented!");
      document.location.replace(`/comment/${postData}`);
    } else {
      console.log("No Comment");
    }
  };

  submit.click(() => {
    postComment();
  });
});
