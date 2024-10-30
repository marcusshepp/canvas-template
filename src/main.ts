const canvas: HTMLCanvasElement = document.querySelector(".canvas");
const context: CanvasRenderingContext2D = canvas.getContext("2d")!;
canvas.width = 500;
canvas.height = 500;
context.fillStyle = "white";

let State = {
    foo: null,
};

function init(): void {
    State.foo = 10;
}

function update(): void {
    State.foo += 1;
}

function draw(): void {
    context.fillRect(State.foo, State.foo, 25, 25);
}

function loop(): void {
    context.clearRect(0, 0, canvas.height, canvas.width);
    update();
    draw();
    requestAnimationFrame(loop);
}

init();
loop();
