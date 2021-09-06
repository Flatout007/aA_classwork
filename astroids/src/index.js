const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

window.addEventListener('DOMContentLoaded' , function(e) {
    c = document.getElementById("game-canvas")
    ctx = c.getContext("2d");
    console.log('DOM fully loaded and parsed');
});

