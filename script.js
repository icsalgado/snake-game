let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box =32;

function criarBG() {
    //pinta o funco do canvas
    context.fillStyle = "lightgreen";
    //desenha x e y e altura
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();