const canvas: HTMLCanvasElement = document.querySelector(".canvas");
const context: CanvasRenderingContext2D = canvas.getContext("2d")!;
canvas.width = 500;
canvas.height = 500;
context.fillStyle = "white";

let State = {
    foo: null,
    radius: 5,
};

function init(): void {
    State.foo = 10;
}

function update(): void {
    State.foo += 1;
}

function draw(): void {
    context.beginPath();
    context.arc(State.foo, State.foo, State.radius, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
}

function loop(): void {
    context.clearRect(0, 0, canvas.height, canvas.width);
    update();
    draw();
    requestAnimationFrame(loop);
}

init();
loop();
