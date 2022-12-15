$(document).ready(function () {
    var boneButton = $('#likeButton');
    var commentBubble = $('#commentButton');
    var bone = $('#bone');

    boneButton.click (() => {
        // fix animation later
        
        anime({
            target: bone,
            rotate: {
                value: 360,
                duration: 900,
                easing: 'easeInOutSine'
            },
        });
        
        bone.attr('src', '../images/dog-bone-logo-red.png')
    });

    commentBubble.click (() => {
        anime({
            target: '#comment',
            rotate: {
                value: 360,
                duration: 900,
                easing: 'easeInOutSine'
            }
        })
    });
});
