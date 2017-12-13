var changeStorm = anime({
    targets: 'div.pane',
    backgroundColor: '#95a4b2',
    autoplay: false,
})

var changeSun = anime({
    targets: 'div.pane',
    backgroundColor: '#2fcbff',
    autoplay: true,
})

var turnOffSun = anime({
    targets: '#sun',
    backgroundColor: '#95a4b2',
    autoplay: false,
})

var turnOnSun = anime({
    targets: '#sun',
    backgroundColor: '#FFFF5F',
    autoplay: false,
})

var turnOnCloudOne = anime({
    targets: '.cloud-square',
    backgroundColor: '#2F4F4F',
    autoplay: false,
})

var turnOnCloudTwo = anime({
    targets: '.cloud-circle-one',
    backgroundColor: '#2F4F4F',
    autoplay: false,
})

var turnOnCloudThree = anime({
    targets: '.cloud-circle-two',
    backgroundColor: '#2F4F4F',
    autoplay: false,
})

var turnOnCloudFour = anime({
    targets: '.cloud-circle-three',
    backgroundColor: '#2F4F4F',
    autoplay: false,
})

var turnOffCloudOne = anime({
    targets: '.cloud-square',
    backgroundColor: '#ffffff',
    autoplay: false,
})

var turnOffCloudTwo = anime({
    targets: '.cloud-circle-one',
    backgroundColor: '#ffffff',
    autoplay: false,
})

var turnOffCloudThree = anime({
    targets: '.cloud-circle-two',
    backgroundColor: '#ffffff',
    autoplay: false,
})

var turnOffCloudFour = anime({
    targets: '.cloud-circle-three',
    backgroundColor: '#ffffff',
    autoplay: false,
})

document.querySelector('.storm-button .restart').onclick = function() {
    turnOffSun.restart();
    turnOnCloudOne.restart();
    turnOnCloudTwo.restart();
    turnOnCloudThree.restart();
    turnOnCloudFour.restart();
    changeStorm.restart();
},

document.querySelector('.sun-button .restart').onclick = function() {
    turnOnSun.restart();
    turnOffCloudOne.restart();
    turnOffCloudTwo.restart();
    turnOffCloudThree.restart();
    turnOffCloudFour.restart();
    changeSun.restart();
}

//document.querySelector('.storm-button .restart').onclick = changeStorm.restart;
//document.querySelector('.sun-button .restart').onclick = changeSun.restart;