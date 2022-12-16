$(document).ready(function () {
    var boneButton = $('#likeButton');
    var commentBubble = $('#commentButton');
    var bone = $('.bone');
    // var comment = $('#comment')

    bone.click ((event) => {
        var target = $(event.target)
        console.log('bone clicked');
        target.attr('src', '../images/dog-bone-logo-red.png')
    });

    commentBubble.click ((event) => {
        var target = $(event.target)
        console.log('bone clicked');
        target.attr('src', '../images/comment-icon-red.png')
    });
    anime({
            target: '#comment',
            rotate: {
                value: '2turn',
                duration: 1000,
                easing: 'easeInOutSine'
            }
    })
    anime({
            target: '#bone',
            rotate: {
                value: '2turn',
                duration: 1000,
                easing: 'easeInOutSine'
            }
    })
});
