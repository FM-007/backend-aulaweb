var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d")

const quadrado = (x, y, largura, altura, cor) => {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
}

function linha(x1, x2, y1, y2, cor) {
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

quadrado(0, 0, 40, 40, 'blue');
quadrado(260, 0, 40, 40, 'red');

linha(40, 40, 150, 150, 'blue');