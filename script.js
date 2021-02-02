let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box =32;
let snake = [];
snake[0] = {
    x: 8* box,
    y: 8* box
}

function criarBG() {
    //pinta o funco do canvas
    context.fillStyle = "lightgreen";
    //desenha x e y e altura
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarSnake(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "black";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarSnake();