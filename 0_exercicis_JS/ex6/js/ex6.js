let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let scale = window.devicePixelRatio;

canvas.width = 1300 * scale;
canvas.height = 600 * scale;
canvas.style.border = "2px solid black";

ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.scale(1.4, 1.4);
ctx.translate(canvas.width / 2 / 1.4 - 160, canvas.height / 2 / 1.4 - 90);

//Cielo
ctx.fillStyle = "#90d4ff";
ctx.fillRect(-305, -130, 1100, 750);

//Mar
ctx.fillStyle = "#156bc6";
ctx.fillRect(-305, 150, 1100, 170);

//fillRect(posX, posY, width, height) -> rectangle
ctx.fillStyle = "#e7b7db";
ctx.fillRect(85, 90, 130, 80);

ctx.fillStyle = "#badfee";
ctx.fillRect(100, 105, 30, 25);

ctx.fillStyle = "#badfee";
ctx.fillRect(165, 105, 30, 25);

ctx.fillStyle = "green";
ctx.fillRect(136, 135, 25, 35);

//Manillar para la puerta
ctx.beginPath();
ctx.arc(155, 153, 2, 0, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();

//Dibujar triángulo
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.moveTo(150, 25);     
ctx.lineTo(75, 91);     
ctx.lineTo(225, 91);    
ctx.closePath();

//Relleno
ctx.fillStyle = "red";
ctx.fill();

ctx.fillStyle = "white";
ctx.fillRect(103, 70, 95, 22);

//Fiquem un text
ctx.font = "12px Arial";
ctx.fillStyle = "red";
ctx.fillText("KAME HOUSE", 110, 86);

//Fiquem un cercle 
ctx.beginPath();
ctx.arc(500, -65, 40, 0, 2 * Math.PI);

// Pintem el cercle
ctx.fillStyle = "yellow";
ctx.fill();

//Antena
ctx.fillStyle = "black";
ctx.fillRect(149, -2, 3, 30);

//Ventanas
ctx.fillStyle = "black";
ctx.fillRect(124, 100, 2, 15);
ctx.fillRect(115, 107, 20, 2);
ctx.fillRect(169, 100, 2, 15);
ctx.fillRect(160, 107, 20, 2);

ctx.fillStyle = "#bb7453";
ctx.fillRect(50, 103, 5, 40);

ctx.fillStyle = "#bb7453";
ctx.fillRect(235, 103, 5, 40);

ctx.beginPath();
ctx.arc(52, 85, 20, 0, 2 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.arc(238, 85, 20, 0, 2 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();
