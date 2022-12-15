// 
$(document).ready(function () {

    var boneButton = $('#likeButton');
    var liked = req.session.liked
    var bone = $('#bone');

    boneButton.click(() => {
        console.log('liked');
        req.session.liked = true
    })

    if (liked) {
        bone.attr('src', '../images/dog-bone-logo-red.png')
            
        }
})