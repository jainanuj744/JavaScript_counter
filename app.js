// set initial count
var count = 0;   

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelector("btns");

btns.forEach(function (btn) {
    btn.addEventlistener('click',function(e) {
        console.log(e.currentTarget.classList);
    })
});

