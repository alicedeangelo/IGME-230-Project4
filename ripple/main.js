//Ripple Animation Function
var rippleAnim = anime({
    targets: 'div.ripple',

    borderColor: {
        value: '#ffffff',
    },

    width: {
        value: '+=200',
        duration: 14000
    },

    height: {
        value: '+=200',
        duration: 14000,
    },

    opacity: {
        value: '-=1',
        duration: 14000
    },

    delay: function(el, i, l){ return i * 700},
    autoplay: false,
});

//Calls the ripple aniamtion when the button is pressed
document.querySelector(' #ripples .restart').onclick = rippleAnim.restart;
