anime({
    targets: '#likeButton',
    rotate: '2turn',
    duration: 3000,
    delay: 500,
  })
//   .add({ targets: '.color-hex',  background: '#FFF' }, 0)

$(document).ready(function () {
  var boneButton = $("#likeButton");
  var bone = $('#bone');
 
  boneButton.click(() => {
    bone.attr("src", "../images/dog-bone-logo-red.png");

  });
});
