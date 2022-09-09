const URL = `http://${window.location.hostname}:5050`;
let socket = io(URL, { path: '/real-time' });

function setup() {
    frameRate(16);
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    ellipse(windowWidth / 2, windowHeight / 3, 50, 50);
    ellipse(windowWidth / 2, windowHeight / 1.5, 50, 50);
    ellipse(windowWidth / 1.5, windowHeight / 2, 50, 50);
    ellipse(windowWidth / 3, windowHeight / 2, 50, 50);

    movementButton('UP', windowWidth / 2, windowHeight / 3);
    movementButton('DOWN', windowWidth / 2, windowHeight / 1.5);
    movementButton('RIGHT', windowWidth / 1.5, windowHeight / 2);
    movementButton('LEFT', windowWidth / 3, windowHeight / 2);
}

/*___________________________________________

1) Create a function that includes the socket method to emit the directions
_____________________________________________ */

socket.emit('public-controller', { instructions, Controller });
